"use client"
import React, { useState } from "react";

const ReportDownloadWidget = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reports] = useState([
    { id: 1, name: "Monthly_Report_Jan_2023.pdf", date: "15 Jan 2023" },
    { id: 2, name: "Patient_Statistics_Q1.pdf", date: "30 Mar 2023" },
    { id: 3, name: "Annual_Report_2022.pdf", date: "15 Jan 2023" },
  ]);

  const handleDownload = (format, fileName = "") => {
    if (fileName) {
      alert(`Downloading ${fileName} in ${format} format`);
    } else {
      alert(`Downloading report in ${format} format`);
    }
  };

  return (
    <div className="report-widget">
      {/* <div className="report-widget__icon">
        <img src="assets/img/stethoscope2.jpeg" alt="Stethoscope" />
      </div> */}
      <div className="report-widget__form">
        <div className="report-widget-header">
          <div className="hospital-logo-box">
            <img src="assets/img/osmania-logo.png" alt="Hospital Logo" className="hospital-logo" />
            <h2>OSMANIA HOSPITAL</h2>
          </div>
          <h3>LABORATORY REPORT DOWNLOAD</h3>
        </div>
        
        <div className="input-section">
          <input
            type="text"
            placeholder="Type your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* <div className="report-widget__buttons">
            <button onClick={() => handleDownload("PDF")}>PDF</button>
            <button onClick={() => handleDownload("DOCX")}>DOCX</button>
            <button onClick={() => handleDownload("XLSX")}>XLSX</button>
          </div> */}
        </div>

        <div className="reports-table">
          <h4>Available Reports</h4>
          <table>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>
                    <div className="file-info">
                      <span className="file-icon">📄</span>
                      <div>
                        <div className="file-name">{report.name}</div>
                        <div className="file-date">{report.date}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button 
                      className="download-btn"
                      onClick={() => handleDownload("PDF", report.name)}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportDownloadWidget;