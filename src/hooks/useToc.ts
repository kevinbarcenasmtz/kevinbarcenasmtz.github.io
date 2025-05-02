import { useEffect, useState, RefObject } from 'react';

export type TocItem = {
  id: string;    // used in href and querySelector
  label: string; // shown in the sidebar
  depth: number;
};


export type TocInfo = {
  path: string;
  width: number;
  height: number;
  thumbPosition: [number, number];
};

export function useToc(
  items: TocItem[],
  activeIndex: number,
  containerRef: RefObject<HTMLDivElement>
): TocInfo {
  const [tocInfo, setTocInfo] = useState<TocInfo>({
    path: '',
    width: 0,
    height: 0,
    thumbPosition: [0, 0],
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateInfo = () => {
      if (container.clientHeight === 0) return;

      const links = container.querySelectorAll<HTMLAnchorElement>('.toc-link');
      const pathCommands: string[] = [];

      let width = 0;
      let height = 0;
      let thumbTop = 0;
      let thumbHeight = 0;

      const activeElement = links[activeIndex];
      if (activeElement) {
        const styles = getComputedStyle(activeElement);
        thumbTop = activeElement.offsetTop + parseFloat(styles.paddingTop);
        thumbHeight =
          activeElement.clientHeight -
          parseFloat(styles.paddingTop) -
          parseFloat(styles.paddingBottom);
      }

      items.forEach((item, i) => {
        const el = links[i];
        if (!el) return;

        const styles = getComputedStyle(el);
        const offset = getLineOffset(item.depth);
        const top = el.offsetTop + parseFloat(styles.paddingTop);
        const bottom =
          el.offsetTop + el.clientHeight - parseFloat(styles.paddingBottom);

        width = Math.max(width, offset);
        height = Math.max(height, bottom);

        if (i === 0) {
          pathCommands.push(`M${offset} ${top}`);
        } else {
          const prevOffset = getLineOffset(items[i - 1].depth);
          if (prevOffset !== offset) {
            pathCommands.push(`L${prevOffset} ${top - 8}`);
            pathCommands.push(`L${offset} ${top}`);
          } else {
            pathCommands.push(`L${offset} ${top}`);
          }
        }

        pathCommands.push(`L${offset} ${bottom}`);
      });

      setTocInfo({
        path: pathCommands.join(' '),
        width: width + 1,
        height,
        thumbPosition: [thumbTop, thumbHeight],
      });
    };

    updateInfo();
    const observer = new ResizeObserver(updateInfo);
    observer.observe(container);
    return () => observer.disconnect();
  }, [items, activeIndex, containerRef]);

  return tocInfo;
}

function getLineOffset(depth: number): number {
  return depth >= 2 ? 12 * (depth - 1) : 0;
}
