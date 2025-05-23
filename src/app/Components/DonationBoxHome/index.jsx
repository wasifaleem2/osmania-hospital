import React from 'react';
const DonationBox = () => {
  return (
    <div className="donation-box-container">
      {/* Top Image with Text Overlay */}
      <div className="donation-box-top">
        <div className="donation-box-top-text">
          <h1>Donation box</h1>
          <h1>for</h1>
          <h1>deserving people</h1>
        </div>
        <div className="donation-box-top-image">
          <img src={"assets/img/banner.jpeg"} alt="Donation Banner" />
        </div>
      </div>

      {/* Main Content */}
      <div className="donation-box-content">
        {/* Left Image */}
        <div className="donation-box-left-image">
          <img src="assets/img/osmania-logo.png" alt="Deserving people" />
          {/* <div>
            <p>OSMANIA HOSPITAL</p>
            <p>DONATE NOW</p>
          </div> */}
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
