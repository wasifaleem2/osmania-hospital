"use client";
import { useAppDispatch } from "@/redux/hooks";
import {
  FetchReports,
  reportsData,
  settingReportError,
} from "@/redux/slices/reportsSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Link from "next/link";
import { DateTimeFormatter } from "@/utils/date-formats";
import {
  FaSearch,
  FaUser,
  FaIdCard,
  FaEnvelope,
  FaPhone,
  FaFileMedical,
  FaDownload,
  FaEye,
  FaCalendarAlt,
  FaFilePdf,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaNotesMedical,
} from "react-icons/fa";

const ReportsPage = () => {
  let dispatch = useDispatch();
  const { reports, loading, error } = useSelector(reportsData);
  const [clientNumber, setClientNumber] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const SearchReports = async () => {
    if (!clientNumber) {
      dispatch(settingReportError("Please enter your invoice number."));
      return;
    }

    // if (clientNumber.length > 20) {
    //   dispatch(settingReportError("Invoice number must be less tha 20 digits"));
    //   return;
    // }

    let data = {
      includeRecords: true,
    };
    await dispatch(FetchReports({ data, nic: clientNumber }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      SearchReports();
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    if (!fileUrl) {
      dispatch(settingReportError("No file available for download"));
      return;
    }

    const link = document.createElement('a');
    link.href = fileUrl;
    
    let downloadName = fileName;
    if (!downloadName && fileUrl) {
      const urlParts = fileUrl.split('/');
      downloadName = urlParts[urlParts.length - 1] || 'report.pdf';
    }
    
    link.download = downloadName;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />;
  };

  const sortedReports = reports?.records ? [...reports.records] : [];
  if (sortConfig.key) {
    sortedReports.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      
      if (sortConfig.key === 'createdAt' || sortConfig.key === 'updatedAt') {
        aValue = new Date(aValue || a.createdAt);
        bValue = new Date(bValue || b.createdAt);
      }
      
      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  return (
    <div className="reports-page-container">
      <div className="reports-header">
        <div className="hospital-banner">
          <img
            src="assets/img/osmania-logo.png"
            alt="Hospital Logo"
            className="hospital-logo"
          />
          <div className="hospital-info">
            <h1>OSMANIA HOSPITAL</h1>
            <h2>LABORATORY REPORT PORTAL</h2>
          </div>
        </div>
      </div>

      <div className="search-section">
        <div className="search-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your invoice number"
              value={clientNumber}
              onChange={(e) => setClientNumber(e.target.value)}
              onKeyDown={handleKeyPress}
              maxLength={13}
              className="cnic-input"
            />
            <button
              className="search-button"
              onClick={SearchReports}
              disabled={loading}
            >
              {loading ? (
                "Searching..."
              ) : (
                <>
                  <FaSearch /> Search
                </>
              )}
            </button>
          </div>
          <p className="input-hint">Enter your invoice number</p>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>

      {loading ? (
        <div className="loading-container">
          <Loader />
          <p>Searching for reports...</p>
        </div>
      ) : reports?.records ? (
        <div className="reports-results">
          <div className="patient-info-card">
            <h3>
              <FaUser /> Patient Information
            </h3>
            <div className="info-grid">
              {/* <div className="info-item">
                <span className="info-label">
                  <FaUser /> Name:
                </span>
                <span className="info-value">
                  {reports.name || "Not provided"}
                </span>
              </div> */}
              <div className="info-item">
                <span className="info-label">
                  <FaIdCard /> Invoice Number:
                </span>
                <span className="info-value">
                  {reports.nic || clientNumber || "Not provided"}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <FaEnvelope /> Email:
                </span>
                <span className="info-value">
                  {reports.email || "Not provided"}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <FaPhone /> Phone:
                </span>
                <span className="info-value">
                  {reports.phoneNumber || "Not provided"}
                </span>
              </div>
            </div>
          </div>

          <div className="reports-section">
            <div className="section-header">
              <h3>
                <FaFileMedical /> Available Reports 
                <span className="report-count">({reports.records.length})</span>
              </h3>
            </div>

            {reports.records.length === 0 ? (
              <div className="no-reports">
                <p>No reports found for this invoice number.</p>
              </div>
            ) : (
              <div className="reports-table-container">
                <div className="table-responsive">
                  <table className="reports-table">
                    <thead>
                      <tr>
                        <th 
                          className="file-column"
                          onClick={() => handleSort('title')}
                        >
                          <div className="table-header-content">
                            Report Name
                            <span className="sort-icon">
                              {getSortIcon('title')}
                            </span>
                          </div>
                        </th>
                        {/* <th 
                          className="description-column"
                          onClick={() => handleSort('description')}
                        >
                          <div className="table-header-content">
                            Description
                            <span className="sort-icon">
                              {getSortIcon('description')}
                            </span>
                          </div>
                        </th> */}
                        <th 
                          className="date-column"
                          onClick={() => handleSort('updatedAt')}
                        >
                          <div className="table-header-content">
                            Date
                            <span className="sort-icon">
                              {getSortIcon('updatedAt')}
                            </span>
                          </div>
                        </th>
                        <th className="actions-column">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedReports.map((report) => (
                        <tr key={report.id} className="report-row">
                          <td className="file-cell">
                            <div className="file-info">
                              <div className="file-icon">
                                <FaNotesMedical />
                              </div>
                              <div className="file-details">
                                <div className="file-title">{report.title}</div>
                                <div className="file-meta">
                                  {/* <span className="file-type">PDF Document</span> */}
                                  <span className="file-size">{report?.type}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          {/* <td className="description-cell">
                            <div className="description-content">
                              {report?.description || "Laboratory test report"}
                            </div>
                          </td> */}
                          <td className="date-cell">
                            <div className="date-content">
                              <FaCalendarAlt className="calendar-icon" />
                              <span>
                                {DateTimeFormatter(report.updatedAt) ||
                                  DateTimeFormatter(report.createdAt)}
                              </span>
                            </div>
                          </td>
                          <td className="actions-cell">
                            <div className="action-buttons">
                              <Link
                                href={report?.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-btn view-btn"
                                title="View Report"
                              >
                                <FaEye /> View
                              </Link>
                              {/* <button
                                onClick={() => handleDownload(report.fileUrl, report.title)}
                                className="action-btn download-btn"
                                title="Download Report"
                              >
                                <FaDownload /> Download
                              </button> */}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        !loading &&
        clientNumber && (
          <div className="no-data-message">
            <p>No reports found for the provided Invoice number.</p>
          </div>
        )
      )}
    </div>
  );
};

export default ReportsPage;