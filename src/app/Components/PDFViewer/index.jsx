"use client";
import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setPageWidth(containerWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
    >
      {/* <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <button onClick={zoomOut} style={{ marginRight: "10px" }}>
          ➖ Zoom Out
        </button>
        <button onClick={zoomIn}>➕ Zoom In</button>
      </div> */}
      <Document
        file="/assets/pdf/Get_Started_With_Smallpdf.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p>Loading PDF...</p>}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div key={`page_${index + 1}`} style={{ marginBottom: "20px" }}>
            <Page
              pageNumber={index + 1}
              width={pageWidth}
              scale={scale}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
