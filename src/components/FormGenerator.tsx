
import React from 'react';
import { useForm } from 'react-hook-form';

const FormGenerator = ({ jsonSchema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  if (!jsonSchema || !jsonSchema.fields) {
    return <p>Provide a valid JSON schema to generate a form.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {jsonSchema.fields.map((field) => (
        <div key={field.id} className="mb-4">
          <label className="block text-sm font-bold mb-2">{field.label}</label>
          {field.type === 'text' && (
            <input
              type="text"
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full p-2 border rounded"
            />
          )}
          {errors[field.id] && (
            <p className="text-red-500 text-sm">This field is required.</p>
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
