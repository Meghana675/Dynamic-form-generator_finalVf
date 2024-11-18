
import React from "react";
import { useForm } from "react-hook-form";

interface FieldSchema {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: string;
    message?: string;
  };
}

interface JSONSchema {
  formTitle: string;
  formDescription: string;
  fields: FieldSchema[];
}

interface FormPreviewProps {
  schema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  let parsedSchema: JSONSchema | null = null;
  try {
    parsedSchema = JSON.parse(schema);
  } catch {
    return <div className="w-full md:w-1/2 p-4">Invalid JSON Schema</div>;
  }

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-lg font-bold mb-2">{parsedSchema.formTitle}</h2>
      <p className="mb-4">{parsedSchema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {parsedSchema.fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block font-bold">{field.label}</label>
            {field.type === "select" ? (
              <select
                className="w-full border p-2"
                {...register(field.id, { required: field.required })}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="w-full border p-2"
                type={field.type}
                placeholder={field.placeholder || ""}
                {...register(field.id, { required: field.required })}
              />
            )}
            {errors[field.id] && (
              <p className="text-red-500">{field.validation?.message || "This field is required"}</p>
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
