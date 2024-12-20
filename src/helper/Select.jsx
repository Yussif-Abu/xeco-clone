import React from 'react';
import { useField } from 'formik';

const Select = ({
  label,
  className = '',
  labelClassName = '',
  selectClassName = '',
  errorClassName = '',
  options = [],
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={`block mb-2 text-sm font-medium text-white ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <select
        {...field}
        {...props}
        className={`block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        } ${selectClassName} text-black`} 
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-black">
            {option.label}
          </option>
        ))}
      </select>

      {meta.touched && meta.error ? (
        <div className={`text-sm text-red-500 mt-1 ${errorClassName}`}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
