import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";

const App: React.FC = () => {
  // Set default JSON schema
  const [schema, setSchema] = useState<string>(JSON.stringify({
    formTitle: "Project Requirements Survey",
    formDescription: "Please fill out this survey about your project needs",
    fields: [
      {
        id: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name"
      },
      {
        id: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "you@example.com"
      }
    ]
  }, null, 2));

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <JSONEditor schema={schema} setSchema={setSchema} />
      <FormPreview schema={schema} />
    </div>
  );
};

export default App;
