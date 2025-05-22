import React from 'react';
import banner from "../../../../public/assets/img/banner.jpeg"
const DonationBox = () => {
  return (
    <div className="donation-box-container">
      {/* Top Image with Text Overlay */}
      <div className="donation-box-top">
        <div className="donation-box-top-text">
          <h1>Donation Box for Deserving People</h1>
        </div>
        <div className="donation-box-top-image">
          <img src={banner} alt="Donation Banner" />
        </div>
      </div>

      {/* Main Content */}
      <div className="donation-box-content">
        {/* Left Image */}
        <div className="donation-box-left-image">
          <img src="path_to_left_image" alt="Deserving people" />
        </div>

        {/* Donation Details */}
        <div className="donation-box-details">
          <h2>Osmania Hospital - Donate Now</h2>
          <p>Donations can be deposited directly in the following bank account.</p>
          <p><strong>Title of Account:</strong> Hyderabad Relief and Rehabilitation Trust</p>
          <p><strong>Account No.:</strong> 0105-8020-1003-0799</p>
          <p><strong>IBAN:</strong> PK78MUCB0105802010030799</p>
          <p><strong>Bank:</strong> MCB Bank Ltd.</p>

          {/* Input Field */}
          <div className="donation-box-input">
            <label htmlFor="account">Enter Account:</label>
            <input type="text" id="account" name="account" />
          </div>

          {/* Donation Amount Options */}
          <div className="donation-box-amounts">
            <button>1,000</button>
            <button>2,000</button>
            <button>5,000</button>
            <button>10,000</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
