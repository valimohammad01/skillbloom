import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setShowOtp(true);
    }
  };

  const handleVerifyOtp = () => {
    // Firebase OTP verification logic here
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint to-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo to-saffron rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
            SB
          </div>
          <h1 className="text-2xl font-bold text-indigo">SkillBloom</h1>
          <p className="text-gray-600">Sign in to continue</p>
        </div>

        {!showOtp ? (
          <div>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:border-indigo focus:outline-none"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-saffron text-white py-3 rounded font-bold hover:bg-orange-500 transition"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:border-indigo focus:outline-none"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-indigo text-white py-3 rounded font-bold hover:bg-blue-600 transition"
            >
              Verify OTP
            </button>
            <button
              onClick={() => setShowOtp(false)}
              className="w-full text-indigo py-2 mt-2"
            >
              Back to phone number
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">Or</p>
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded mt-2 hover:bg-gray-50 transition">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 