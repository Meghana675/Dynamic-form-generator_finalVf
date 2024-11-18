import React from "react";
import { useForm } from "react-hook-form";

// Define types for the schema
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

interface FormGeneratorProps {
  jsonSchema: JSONSchema;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ jsonSchema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {jsonSchema.fields.map((field) => (
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
  );
};

export default FormGenerator;
