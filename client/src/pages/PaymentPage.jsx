import React, { useState } from "react";
import { motion } from "framer-motion";
import { generateInvoice } from "../utils/invoice";
import { useNavigate } from "react-router-dom";



const PaymentPage = () => {
  const navigate = useNavigate();

  const tutionFee = 1;
  const registrationFee = 0;
  const bookFee = 0;
  const medicalInsurance = 0;
  const miscellaneous = 0;
  const totalFee = tutionFee+registrationFee+bookFee+medicalInsurance+miscellaneous;
  const maxUpiLimit = 50000;

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [installmentOption, setInstallmentOption] = useState("full"); // full | part
  const [paidAmount, setPaidAmount] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/get-personal");
    const data = await res.json();

    const studentName = data.fullName || "Unknown Student";
    const courseName = data.course || "Unknown Course";

    // calculate payable amount
    const amountToPay =
      installmentOption === "full"
        ? totalFee - paidAmount
        : Math.min(maxUpiLimit, totalFee - paidAmount);

    const newPaidAmount = paidAmount + amountToPay;

    if (newPaidAmount > totalFee) {
      alert("⚠️ You’re trying to overpay. Please adjust installments.");
      return;
    }

    setPaidAmount(newPaidAmount);

    alert(`✅ Paid ₹${amountToPay}. Remaining: ₹${totalFee - newPaidAmount}`);

    // generate invoice
    generateInvoice(studentName, courseName, amountToPay, totalFee, newPaidAmount);

    // redirect when fully paid
    if (newPaidAmount >= totalFee) {
      alert("🎉 Payment completed! Redirecting to login...");
      navigate("/login"); 
    }
  } catch (error) {
    console.error("Error fetching applicant data:", error);
    alert("⚠️ Failed to fetch applicant data. Payment aborted.");
  }
};

  return (
    <div className="bg-gray-600">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg text-white"
    >
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        Payment Details
      </h2>

      {/* Progress Bar */}
      <div className="flex items-center mb-6">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
          <div
            className="bg-orange-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(paidAmount / totalFee) * 100}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-300 min-w-[3rem]">
          {Math.round((paidAmount / totalFee) * 100)}%
        </span>
      </div>

      {/* Fee Summary */}
      <div className="bg-gray-700 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-semibold mb-2">Fee Summary</h3>
        <div className="flex justify-between text-gray-300 mb-1">
          <span>Tuition Fee</span>
          <span>₹ {tutionFee}</span>
        </div>
        <div className="flex justify-between text-gray-300 mb-1">
          <span>Registration Fee</span>
          <span>₹ {registrationFee}</span>
        </div>
        <div className="flex justify-between text-gray-300 mb-1">
          <span>Book Bank Maintenamce Fee</span>
          <span>₹ {bookFee}</span>
        </div>
        <div className="flex justify-between text-gray-300 mb-1">
          <span>Medical Insurance</span>
          <span>₹ {medicalInsurance}</span>
        </div>
        <div className="flex justify-between text-gray-300 mb-1">
          <span>Miscellaneous</span>
          <span>₹ {miscellaneous}</span>
        </div>
        <div className="border-t border-gray-500 mt-2 pt-2 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-orange-400">₹ {totalFee}</span>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          ✅ Paid: ₹{paidAmount} | ⏳ Remaining: ₹{totalFee - paidAmount}
        </div>
      </div>

      {/* Installment Option */}
      <div className="bg-gray-700 p-4 rounded-xl mb-6">
        <h3 className="text-lg font-semibold mb-2">Choose Payment Option</h3>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="installment"
              value="full"
              checked={installmentOption === "full"}
              onChange={(e) => setInstallmentOption(e.target.value)}
            />
            <span>Full Payment (₹{totalFee - paidAmount})</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="installment"
              value="part"
              checked={installmentOption === "part"}
              onChange={(e) => setInstallmentOption(e.target.value)}
            />
            <span>Installment (Max ₹{maxUpiLimit})</span>
          </label>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handlePayment} className="grid gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Name on Card</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-600 border border-white focus:border-orange-500 outline-none"
            placeholder="Pratibha Maurya"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="p-3 rounded bg-gray-600 border border-white focus:border-orange-500 outline-none"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="mb-1">Expiry</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="p-3 rounded bg-gray-600 border border-white focus:border-orange-500 outline-none"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">CVV</label>
            <input
              type="password"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="p-3 rounded bg-gray-600 border border-white focus:border-orange-500 outline-none"
              placeholder="***"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            type="button"
            className="flex-1 px-6 py-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-orange-600 rounded-lg hover:bg-orange-500 transition font-semibold"
          >
            Pay ₹
            {installmentOption === "full"
              ? totalFee - paidAmount
              : Math.min(maxUpiLimit, totalFee - paidAmount)}
          </button>
        </div>
      </form>
    </motion.div>
    </div>
  );
};

export default PaymentPage;
