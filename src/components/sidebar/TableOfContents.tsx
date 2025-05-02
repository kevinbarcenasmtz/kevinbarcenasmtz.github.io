import { useRef } from 'react';
import { useToc, type TocItem } from '../../hooks/useToc';
import './toc.css';

type Props = {
  items: TocItem[];
  activeIndex: number;
};

export default function TableOfContents({ items, activeIndex }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tocInfo = useToc(items, activeIndex, containerRef);

  const encodedSvg = tocInfo.path
    ? encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tocInfo.width} ${tocInfo.height}">
          <path d="${tocInfo.path}" stroke="rgba(0,0,0,0.3)" stroke-width="1" fill="none" />
        </svg>`
      )
    : '';

  return (
    <div className="toc-container">
      <div className="toc-links" ref={containerRef}>
        {/* SVG mask-based thumb */}
        {tocInfo.path && (
          <div
            className="toc-thumb"
            style={{
              width: `${tocInfo.width}px`,
              height: `${tocInfo.height}px`,
              WebkitMaskImage: `url("data:image/svg+xml,${encodedSvg}")`,
              maskImage: `url("data:image/svg+xml,${encodedSvg}")`,
            }}
          >
            <div
              className="thumb-indicator"
              style={{
                top: `${tocInfo.thumbPosition[0]}px`,
                height: `${tocInfo.thumbPosition[1]}px`,
              }}
            />
          </div>
        )}

        {/* TOC Links */}
        {items.map((item, i) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            className={`toc-link ${i === activeIndex ? 'active' : ''}`}
            style={{
              paddingLeft: `${item.depth >= 2 ? item.depth * 16 : 16}px`,
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
