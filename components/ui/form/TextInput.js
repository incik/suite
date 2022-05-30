export const TextInput = ({ type, defaultValue, step, min, max, onChange }) => (
  <input
    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    type={type}
    defaultValue={defaultValue}
    step={step}
    min={min}
    max={max}
    onChange={onChange}
  />
);
