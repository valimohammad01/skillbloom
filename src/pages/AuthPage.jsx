import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    if (phoneNumber.length !== 10) {
      setMessage("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);
    setMessage("");

    // Simulate OTP sending (in real app, this would call Firebase)
    setTimeout(() => {
      setShowOtp(true);
      setLoading(false);
      setMessage("OTP sent successfully! Check your phone.");
    }, 2000);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setMessage("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setMessage("");

    // Simulate OTP verification (in real app, this would verify with Firebase)
    setTimeout(() => {
      setLoading(false);
      setMessage("Login successful! Redirecting...");
      // Store user session (in real app, save to localStorage or context)
      localStorage.setItem("user", JSON.stringify({ phone: phoneNumber }));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }, 2000);
  };

  const handleGoogleLogin = () => {
    setMessage("Google login coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint to-white flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo to-saffron rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
            SB
          </div>
          <h1 className="text-2xl font-bold text-indigo">SkillBloom</h1>
          <p className="text-gray-600">Sign in to continue</p>
        </div>

        {message && (
          <div className={`p-3 rounded mb-4 text-center ${
            message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message}
          </div>
        )}

        {!showOtp ? (
          <div>
            <input
              type="tel"
              placeholder="Enter phone number (10 digits)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:border-indigo focus:outline-none"
              maxLength={10}
            />
            <button
              onClick={handleSendOtp}
              disabled={loading || phoneNumber.length !== 10}
              className={`w-full py-3 rounded font-bold transition ${
                loading || phoneNumber.length !== 10
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-saffron text-white hover:bg-orange-500"
              }`}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:border-indigo focus:outline-none"
              maxLength={6}
            />
            <button
              onClick={handleVerifyOtp}
              disabled={loading || otp.length !== 6}
              className={`w-full py-3 rounded font-bold transition ${
                loading || otp.length !== 6
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo text-white hover:bg-blue-600"
              }`}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            <button
              onClick={() => {
                setShowOtp(false);
                setOtp("");
                setMessage("");
              }}
              className="w-full text-indigo py-2 mt-2 hover:text-blue-600 transition"
            >
              Back to phone number
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">Or</p>
          <button 
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded mt-2 hover:bg-gray-50 transition"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 