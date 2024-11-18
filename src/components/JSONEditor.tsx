
import React, { useState } from "react";

interface JSONEditorProps {
  schema: string;
  setSchema: (schema: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ schema, setSchema }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    try {
      JSON.parse(value);
      setError(null);
      setSchema(value);
    } catch (err) {
      setError("Invalid JSON format.");
    }
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <textarea
        className="w-full h-5/6 border p-2"
        value={schema}
        onChange={handleChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JSONEditor;
