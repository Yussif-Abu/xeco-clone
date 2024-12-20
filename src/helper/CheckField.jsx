import React from 'react';
import { useField } from 'formik';

export const CheckField = ({ children, className = '', labelClassName = '', errorClassName = '', ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <label className={`inline-flex text-white items-center ${labelClassName}`}>
        <input 
          type="checkbox" 
          className={`form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${meta.touched && meta.error ? 'border-red-500' : ''}`} 
          {...field} 
          {...props} 
        />
        <span className="ml-2 text-white">{children}</span>
      </label>
      
      {meta.touched && meta.error && (
        <div className={`text-sm text-red-500 mt-1 ${errorClassName}`}>
          {meta.error}
        </div>
      )}
    </div>
  );
};
