// src/components/resume/ContactInfo.tsx
export default function ContactInfo() {
  return (
    <div className="space-y-1 text-sm text-gray-800">
      <p>
        Github:{" "}
        <a
          href="https://github.com/kevinbarcenas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          kevinbarcenas
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/kevin-barcenas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          kevin-barcenas
        </a>
      </p>
      <p>Email: kevin (dot) barcenas @ utexas (dot) edu</p>
      <p>Discord: kevin#1234</p>
    </div>
  );
}
