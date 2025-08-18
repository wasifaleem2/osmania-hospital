"use client";
import { useAppDispatch } from "@/redux/hooks";
import { FetchReports, reportsData, settingReportError } from "@/redux/slices/reportsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Link from "next/link";
import { DateTimeFormatter } from "@/utils/date-formats";
import { FaSearch } from "react-icons/fa";

const ReportDownloadWidget = () => {
  let dispatch = useDispatch();
  const { reports, loading, error } = useSelector(reportsData);
  const [clientNumber, setClientNumber] = useState("");
  // const [reports] = useState([]);

  const SearchReports = async () => {
    if(clientNumber.length !== 13){
      console.log("Incorrect nic")
      dispatch(settingReportError("Incorrect CNIC number. Should contain 13 digits"))
    } else {
      console.log("clientNumber", clientNumber);
      let data = {
        includeRecords: true,
      };
      await dispatch(FetchReports({ data, nic: clientNumber }));
    }
  };


  const handleView = (fileName = "") => {
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
            <img
              src="assets/img/osmania-logo.png"
              alt="Hospital Logo"
              className="hospital-logo"
            />
            <h2>OSMANIA HOSPITAL</h2>
          </div>
          <h3>LABORATORY REPORT DOWNLOAD</h3>
        </div>

        <div className="input-section">
          <input
            type="text"
            placeholder="Type your cnic number"
            value={clientNumber}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                SearchReports();
              }
            }}
            onChange={(e) => setClientNumber(e.target.value)}
          />
          <button className="search-reports-btn" onClick={()=>SearchReports()}><FaSearch /></button>
        </div>
        { error && <p className="report-error">{error}</p> }
        <div className="reports-data">
          {loading ? (
            <Loader />
          ) : (
            <>
              {!loading && reports?.records && (
                <>
                  <h4>Available Reports</h4>
                  <div className="user-info">
                    <p>
                      <strong>Name:</strong> {reports.name}
                    </p>
                    <p>
                      <strong>NIC:</strong> {reports.nic}
                    </p>
                    <p>
                      <strong>Email:</strong> {reports.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {reports.phoneNumber}
                    </p>
                  </div>
                  <div className="reports-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Report Name</th>
                          <th>Description</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reports?.records?.map((report) => (
                          <tr key={report.id}>
                            <td>
                              <div className="file-info">
                                <span className="file-icon">📄</span>
                                <div>
                                  <div className="file-name">
                                    {report.title}
                                  </div>
                                  <div className="file-date">
                                    {DateTimeFormatter(report.updatedAt) ||
                                      DateTimeFormatter(report.createdAt)}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="report-desc">
                              {report?.description || "---"}
                            </td>
                            <td>
                              <Link
                                href={report?.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-btn"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportDownloadWidget;
