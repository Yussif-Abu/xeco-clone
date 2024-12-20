import React from 'react';
import { useField } from 'formik';

const TextArea = ({ label, className = '', labelClassName = '', textAreaClassName = '', errorClassName = '', ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label htmlFor={props.id || props.name} className={`mb-2 font-medium text-white ${labelClassName}`}>
          {label}
        </label>
      )}
      <textarea 
        {...field} 
        {...props} 
        className={`w-full p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500
        focus:border-transparent ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'} 
        ${textAreaClassName} text-black`}
      />
      {meta.touched && meta.error ? (
        <div className={`text-sm text-red-500 mt-1 ${errorClassName}`}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default TextArea;
