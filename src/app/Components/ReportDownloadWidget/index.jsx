"use client";
import React from "react";
import Link from "next/link";
import { FaFileAlt, FaArrowRight } from "react-icons/fa";

const ReportDownloadWidget = () => {
  return (
    <div className="report-widget-simple">
      <div className="widget-content">
        <div className="widget-icon">
          <FaFileAlt />
        </div>
        <h2 className="widget-title">View Your Medical Reports</h2>
        <p className="widget-description">
          Click below to view your Medical test results.
        </p>
        <Link href="/reports" className="widget-link">
          View Reports
          <FaArrowRight className="link-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ReportDownloadWidget;