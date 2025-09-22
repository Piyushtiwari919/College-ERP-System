import { useState } from "react";
import { documents } from "../constants/documents";

export default function useDocuments() {
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];

    if (file && file.type !== "application/pdf") {
      setErrors((prev) => ({
        ...prev,
        [field]: "Only PDF files are allowed",
      }));
      e.target.value = "";
      return;
    }

    setFiles((prev) => ({ ...prev, [field]: file }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return { documents, files, errors, handleFileChange };
}
