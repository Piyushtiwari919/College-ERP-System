// src/utils/validateAdmissionForm.js

const validateAdmissionForm = (formData) => {
  let newErrors = {};

  // 🔹 Personal Info
  if (!formData.fullName) newErrors.fullName = "Full Name is required";
  if (!formData.fatherName) newErrors.fatherName = "Father Name is required";
  if (!formData.motherName) newErrors.motherName = "Mother Name is required";

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!formData.email.includes("@")) {
    newErrors.email = "Enter a valid email";
  }

  if (!formData.phone) {
    newErrors.phone = "Phone number is required";
  } else if (formData.phone.length !== 10) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  if (!formData.nationality) newErrors.nationality = "Nationality is required";
  if (!formData.dob) newErrors.dob = "Date of Birth is required";
  if (!formData.marital) newErrors.marital = "Marital status is required";
  if (!formData.gender) newErrors.gender = "Gender is required";

  if (!formData.course) newErrors.course = "Select a course";

  // 🔹 Document Uploads (All required except migrationCertificate)
  const requiredDocs = [
    "marksheet10",
    "marksheet12",
    "domicile",
    "casteCertificate",
    "characterCertificate",
    "incomeCertificate",
    "transferCertificate",
    "healthCertificate",
    "counsellingCertificate",
    "jeeAdmitCard",
    "jeeResult",
    "photoSignature",
  ];

  requiredDocs.forEach((doc) => {
    if (!formData[doc]) {
      newErrors[doc] = "This document is required";
    } else if (formData[doc] && formData[doc].type !== "application/pdf") {
      newErrors[doc] = "Only PDF files are allowed";
    }
  });

  // 🔹 Migration Certificate (Optional but must be PDF if uploaded)
  if (formData.migrationCertificate) {
    if (formData.migrationCertificate.type !== "application/pdf") {
      newErrors.migrationCertificate = "Only PDF allowed";
    }
  }

  return newErrors;
};

export default validateAdmissionForm;
