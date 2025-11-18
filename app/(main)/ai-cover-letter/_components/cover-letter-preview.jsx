"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content, onContentChange }) => {
  const [editableContent, setEditableContent] = useState(content);

  const handleChange = (value) => {
    setEditableContent(value || '');
    if (onContentChange) {
      onContentChange(value || '');
    }
  };

  return (
    <div className="py-4">
      <MDEditor 
        value={editableContent} 
        onChange={handleChange}
        preview="edit"
        height={700} 
      />
    </div>
  );
};

export default CoverLetterPreview;