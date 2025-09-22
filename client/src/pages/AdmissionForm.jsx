import { useState, useEffect } from "react";
import admissionPic from "../assets/abes_admission.jpg";
import validateAdmissionForm from "../utils/validateAdmissionForm";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
    nationality: "",
    guardianName: "",
    guardianPhone: "",
    highSchoolRollNo: "",
    interRollNo: "",
    highSchoolMarks: "",
    interMarks: "",
    physicsMarks: "",
    chemistryMarks: "",
    mathMarks: "",
    state: "",
    district:"",
    tahaseel:"",
    pincode: "",
    address: "",
    jeeApplicationNo:"",
    rankType:"",
    rank:"",
    roundNumber:"",
    allotedOption:"",
    allotedInstitue:"",
    allotedCourse: "",
    stream: "",
    allotedCategory: "",
    allotedQuota: "",
    seatGender: "",
  });

  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({});
  const navigate = useNavigate();

 const handleFileChange = (e, field) => {
  const file = e.target.files[0];
  if (!file) return;

  if (file.type !== "application/pdf") {
    alert("Only PDF files are allowed!");
    e.target.value = ""; // reset input
    return;
  }
  setFiles({ ...files, [field]: file });
};

  const documents = [
    { name: "10th Marksheet", field: "tenth" },
    { name: "12th Marksheet", field: "twelfth" },
    { name: "Domicile Certificate", field: "domicile" },
    { name: "Caste Certificate", field: "caste" },
    { name: "Income Certificate", field: "income" },
    { name: "Character Certificate", field: "character" },
    { name: "Transfer Certificate", field: "transfer" },
    { name: "Health Certificate", field: "health" },
    {
      name: "Counselling Physical Reporting Certificate",
      field: "counselling",
    },
    { name: "JEE Admit Card", field: "jeeAdmit" },
    { name: "JEE Result", field: "jeeResult" },
    { name: "Photo", field: "photo" },
    { name: "Signature", field: "sign" },
    {
      name: "Migration Certificate (Optional)",
      field: "migration",
      optional: true,
    },
    { name: "Gap Certificate (Optional)", field: "gap", optional: true },
  ];

  // Handle Input Change
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  //  for next button
  const tabs = ["personal", "academic", "counseling", "address", "documents"];
  const requiredFields = {
  personal: ["fullName", "fatherName", "motherName", "dob", "email", "phone", "gender", "nationality","guardianName", "guardianPhone"],
  academic: ["highSchoolRollNo", "interRollNo", "highSchoolMarks", "interMarks","physicsMarks","chemistryMarks","mathMarks"],
  counseling: ["jeeApplicationNo","rankType","rank","roundNumber","allotedOption","allotedInstitue","allotedCourse","stream","allotedCategory","allotedQuota","seatGender"],
  address: ["address", "district", "state", "pincode","tahaseel"],
  documents: documents.filter(doc => !doc.optional).map(doc => doc.field), // all required documents
};

  const handleNext = () => {
  if (!isSaved) {
    alert("Please save your details first ❗");
    return;
  }

  const fieldsToCheck = requiredFields[activeTab];
  let errorsForTab = {};

  if (activeTab === "documents") {
    // check files
    fieldsToCheck.forEach((field) => {
      if (!files[field]) {
        errorsForTab[field] = `Please upload ${documents.find(d => d.field === field).name}`;
      }
    });
  } else {
    // check formData fields
    fieldsToCheck.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        errorsForTab[field] = "This field is required";
      }
    });
  }

  if (Object.keys(errorsForTab).length > 0) {
    setErrors(errorsForTab);
    alert(
      "Please fill/upload all required fields:\n" +
        Object.values(errorsForTab).map(msg => `- ${msg}`).join("\n")
    );
    return; // stop next
  }

  // Clear errors for this tab
  setErrors({});

  // Move to next tab
  const currentIndex = tabs.indexOf(activeTab);
  if (currentIndex < tabs.length - 1) {
    setActiveTab(tabs[currentIndex + 1]);
  } else {
    navigate("/payment");
  }
};



  // fetch data
  const fetchPersonalData = async () => {
  try {
    const res = await fetch("http://localhost:5000/get-personal");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return {};
  }
};

useEffect(() => {
  fetchPersonalData().then((data) => {
    if (Object.keys(data).length > 0) {
      setFormData(data);
      setIsSaved(true);
    }
  });
}, []);

  // Save button
const API_BASE = process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";

const savePersonalData = async (data) => {
  console.log("Attempting savePersonalData, payload keys:", Object.keys(data));
  try {
    const res = await fetch(`${API_BASE}/save-personal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Try to parse JSON safely
    let json = null;
    try { json = await res.json(); } catch (e) { json = null; }

    console.log("save-personal response:", res.status, json);
    return { ok: res.ok, status: res.status, body: json };
  } catch (err) {
    console.error("Network / fetch error in savePersonalData:", err);
    return { ok: false, error: err.message };
  }
};

const handleSave = async () => {
  // quick client-side validation logging (optional)
  console.log("handleSave called. formData keys:", Object.keys(formData));
  const result = await savePersonalData(formData);

  if (result.ok) {
    setIsSaved(true);
    alert("✅ Details saved successfully!");
    // optionally setFormData(result.body.merged) to sync state with saved file
    if (result.body && result.body.merged) setFormData(result.body.merged);
  } else {
    console.error("Save failed:", result);
    alert(
      `❌ Failed to save details. ${result.body?.message || result.error || "Check server logs."}`
    );
  }
};


  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateAdmissionForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Collected JSON Data:", formData);
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.course) newErrors.course = "Select a course";
    return newErrors;
  };

  // progress bar
  const progressBar = ((tabs.indexOf(activeTab) + 1) / tabs.length) * 100;

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gray-700 dark:bg-gray-800">
      <div className="relative w-full h-80 mt-0.5 mb-4">
        {/* Background Image */}
        <img
          src={admissionPic}
          alt="Admission pic"
          className="w-full h-full object-cover"
        />

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-[#1f2937]/70"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1
            className="text-9xl font-bold bg-gradient-to-r from-orange-500 via-green-600 to-black 
          bg-clip-text text-transparent transition-all duration-700"
            // style={{
            //   backgroundSize: `${progressBar}% 100%`,
            // }}
          >
            Admission Form
          </h1>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Admission Completion
            </label>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
              <div
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressBar}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[3rem]">
              {Math.round(progressBar)}%
            </span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex space-x-4 border-b border-gray mb-6">
          <button
            className={`pb-2 px-6 text-2xl  ${
              activeTab === "personal"
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </button>
          <button
            className={`pb-2 px-6 text-2xl ${
              activeTab === "academic"
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("academic")}
          >
            Academic
          </button>
          <button
            className={`pb-2 px-6 text-2xl ${
              activeTab === "counseling"
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("counseling")}
          >
            Counseling
          </button>
          <button
            className={`pb-2 px-6 text-2xl ${
              activeTab === "address"
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("address")}
          >
            Address
          </button>
          <button
            className={`pb-2 px-6 text-2xl ${
              activeTab === "documents"
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("documents")}
          >
            Document
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <div className="bg-gray-900 shadow-md rounded-lg p-6">
            {activeTab === "personal" && (
              <motion.div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Personal Details
                </h2>
                <form className="grid grid-cols-2 gap-6 flex-1">
                  {/* Full Name */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Father Name */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Father Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Father Name"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* mother name */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Mother Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      placeholder="Mother Name"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Phone No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                  {/* nationality */}

                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="Indian"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* marital status */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Marital State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="marital"
                      value={formData.marital}
                      onChange={handleChange}
                      className="w-full md:w-1/2 border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
                    >
                      <option value="">Select Marital</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  {/* Gender */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full md:w-1/2 border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Guardian Name */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Guardian Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleChange}
                      placeholder="Father Name"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/*  Guardian Phone Number */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Guardian Phone No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                </form>
                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-500 transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isSaved}
                    className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "academic" && (
              <motion.div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Academic Details
                </h2>
                <form className="grid grid-cols-2 gap-6 flex-1">
                  {/* 10th rollno */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      10th Roll No<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="highSchoolRollNo"
                      value={formData.highSchoolRollNo}
                      onChange={handleChange}
                      placeholder="10th Roll No"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* 10th marks */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      10th marks in percentage{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="highSchoolMarks"
                      value={formData.highSchoolMarks}
                      onChange={handleChange}
                      placeholder="10th Marks"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* 12th roll no */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      12th Roll No <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="interRollNo"
                      value={formData.interRollNo}
                      onChange={handleChange}
                      placeholder="12th Roll No"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* 12th marks*/}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      12th marks in percentage(PCM)
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="interMarks"
                      value={formData.interMarks}
                      onChange={handleChange}
                      placeholder="12th Marks"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                  {/* Physics*/}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Physics in percentage
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="physicsMarks"
                      value={formData.physics}
                      onChange={handleChange}
                      placeholder="Physics Marks"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                  {/* Chemistry*/}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Chemistry marks in percentage(PCM)
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="chemistryMarks"
                      value={formData.chemistryMarks}
                      onChange={handleChange}
                      placeholder="Chemistry Marks"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                  {/* Math*/}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Math marks in percentage(PCM)
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="mathMarks"
                      value={formData.mathMarks}
                      onChange={handleChange}
                      placeholder="Math Marks"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                </form>
                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-500 transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isSaved}
                    className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "counseling" && (
              <motion.div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Councelling Details
                </h2>
                <form className="grid grid-cols-2 gap-6 flex-1">
                  {/* Jee Application */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Jee Application No.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="jeeApplicationNo"
                      value={formData.jeeApplicationNo}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Rank Type  */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Rank Type <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="rankType"
                      value={formData.rankType}
                      onChange={handleChange}
                      placeholder="Rank Type"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Rank   */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Rank <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="rank"
                      value={formData.rank}
                      onChange={handleChange}
                      placeholder="Rank"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Round Number */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Round Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="roundNumber"
                      value={formData.roundNumber}
                      onChange={handleChange}
                      placeholder="Rround Number"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Alloted Option  */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Alloted Option <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="allotedOption"
                      value={formData.allotedOption}
                      onChange={handleChange}
                      placeholder="Alloted Option"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Alloted Institue  */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Alloted Institue <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="allotedInstitue"
                      value={formData.allotedInstitue}
                      onChange={handleChange}
                      placeholder="Alloted Institue"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                    {/* Alloted Course  */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Alloted Couse <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="allotedCourse"
                      value={formData.allotedCourse}
                      onChange={handleChange}
                      placeholder="Alloted Course"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                  {/* Stream   */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Stream <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="stream"
                      value={formData.stream}
                      onChange={handleChange}
                      placeholder="Stream"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Alloted Category   */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Alloted Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="allotedCategory"
                      value={formData.allotedCategory}
                      onChange={handleChange}
                      placeholder="Stream"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Alloted Quota    */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Alloted Quota <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="allotedQuota"
                      value={formData.allotedQuota}
                      onChange={handleChange}
                      placeholder="Stream"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Seat Gender    */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Seat Gender <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="seatGender"
                      value={formData.seatGender}
                      onChange={handleChange}
                      placeholder="Stream"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                </form>
                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-2 bg-green-700 text-white rounded hover:bg-gray-600 transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isSaved}
                    className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "address" && (
              <motion.div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Communication Address
                </h2>
                <form className="grid grid-cols-2 gap-6 flex-1">
                  {/* State */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full md:w-1/2 border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
                    >
                      <option value="">Select State</option>
                      <option value="andhra-pradesh">Andhra Pradesh</option>
                      <option value="arunachal-pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="assam">Assam</option>
                      <option value="bihar">Bihar</option>
                      <option value="chhattisgarh">Chhattisgarh</option>
                      <option value="goa">Goa</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="himachal-pradesh">Himachal Pradesh</option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="kerala">Kerala</option>
                      <option value="madhya-pradesh">Madhya Pradesh</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="manipur">Manipur</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="odisha">Odisha</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="tripura">Tripura</option>
                      <option value="uttar-pradesh">Uttar Pradesh</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="west-bengal">West Bengal</option>
                    </select>
                  </div>

                  {/* District */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="District"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Tahasheel */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Tahaseel <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="tahaseel"
                      value={formData.tahaseel}
                      onChange={handleChange}
                      placeholder="Tahaseel"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Pincode */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>

                  {/* Address */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-white">
                      Adddress<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address"
                      className="w-full border border-white rounded p-2 bg-gray-600 focus:border-orange-500 focus:border-2 outline-none"
                    />
                  </div>
                </form>
                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-500 transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isSaved}
                    className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "documents" && (
              <motion.div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Document Uploads
                </h2>
                <form className="space-y-4">
                  {documents.map((doc) => (
                    <div
                      key={doc.field}
                      className="flex items-center space-x-4"
                    >
                      {/* Label with required mark */}
                      <label className="w-72 font-medium text-white">
                        {doc.name}
                        {!doc.optional && (
                          <span className="text-red-500"> *</span>
                        )}
                      </label>

                      {/* File Input */}
                      <input
                        type="file"
                        accept="application/pdf"
                        required={!doc.optional}
                        className={`flex-1 border rounded p-2 border-white bg-gray-600 ${
                          errors[doc.field] ? "border-red-500" : ""
                        }`}
                        onChange={(e) => handleFileChange(e, doc.field)}
                      />

                      {/* Error Message */}
                      {errors[doc.field] && (
                        <p className="text-red-500 text-sm">
                          {errors[doc.field]}
                        </p>
                      )}

                      {/* View Uploaded File */}
                      {files[doc.field] && (
                        <a
                          href={URL.createObjectURL(files[doc.field])}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600"
                        >
                          <FaRegEye />
                        </a>
                      )}
                    </div>
                  ))}
                </form>

               {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-500 transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isSaved}
                    className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdmissionForm;
