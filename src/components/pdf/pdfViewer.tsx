// src/components/pdf/pdfViewer.tsx
import "./styles/pdf.css";

type PDFViewerProps = {
  pdfUrl: string;
  width?: string;
  height?: string;
  className?: string;
};

export default function PDFViewer({
  pdfUrl,
  width = "100%",
  height = "800px",
  className = "",
}: PDFViewerProps) {
  return (
    <div className={`pdf-embed-container ${className}`}>
      <object
        data={pdfUrl}
        type="application/pdf"
        width={width}
        height={height}
        className="pdf-object"
      >
        <p>
          Your browser doesn't support PDF viewing.
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Download the PDF instead
          </a>
        </p>
      </object>
    </div>
  );
}
