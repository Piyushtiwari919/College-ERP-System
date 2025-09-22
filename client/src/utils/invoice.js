// utils/invoice.js
import jsPDF from "jspdf";

/**
 * Generates a PDF invoice for a payment.
 * @param {string} studentName - Full name of the student.
 * @param {string} courseName - Name of the course.
 * @param {number} amountPaid - Amount paid in this transaction.
 * @param {number} totalFee - Total fee for the course.
 * @param {number} paidAmount - Total amount paid so far.
 */
export const generateInvoice = (studentName, courseName, amountPaid, totalFee, paidAmount) => {
  const doc = new jsPDF();

  // Generate random 8-digit transaction ID
  const transactionId = Math.floor(10000000 + Math.random() * 90000000);

  // Payment date
  const date = new Date().toLocaleDateString();

  // PDF Title
  doc.setFontSize(18);
  doc.text("ABES ERP Portal - Payment Invoice", 20, 20);

  doc.setFontSize(12);
  doc.text(`Transaction ID: ${transactionId}`, 20, 40);
  doc.text(`Date: ${date}`, 20, 50);
  doc.text(`Student Name: ${studentName}`, 20, 60);
  doc.text(`Course: ${courseName}`, 20, 70);

  doc.text(`Amount Paid: ₹${amountPaid}`, 20, 90);
  doc.text(`Total Fee: ₹${totalFee}`, 20, 100);
  doc.text(`Remaining Balance: ₹${totalFee - paidAmount}`, 20, 110);

  doc.text("Thank you for your payment!", 20, 130);

  // Save the PDF
  doc.save(`Invoice_${transactionId}.pdf`);
};
