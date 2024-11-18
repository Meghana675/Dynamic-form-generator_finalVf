
import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";
import "./styles/tailwind.css";

const App: React.FC = () => {
  const [schema, setSchema] = useState<string>("");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <JSONEditor schema={schema} setSchema={setSchema} />
      <FormPreview schema={schema} />
    </div>
  );
};

export default App;
