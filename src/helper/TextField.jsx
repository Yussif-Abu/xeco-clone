import React from 'react';
import { useField } from 'formik';

const TextField = ({ label, className, labelClassName, errorClassName, inputClassName, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div className={`flex flex-col mb-4 ${className}`}>
        {label && (
          <label 
            htmlFor={props.id || props.name} 
            className={`mb-2 font-medium text-white ${labelClassName}`}>
            {label}
          </label>
        )}
        <input 
          className={`w-full p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-transparent ${meta.error && meta.touched ? 'border-red-500' : 'border-gray-300'} ${inputClassName} text-black`} 
          {...field} 
          {...props} 
        />
        {meta.touched && meta.error ? (
          <div className={`text-sm text-red-500 mt-1 ${errorClassName}`}>
            {meta.error}
          </div>
        ) : null}
      </div>
    );
};

export default TextField;
