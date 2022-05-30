export const Select = ({ defaultValue, onChange, children }) => (
  <select
    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    defaultValue={defaultValue}
    onChange={onChange}
  >
    {children}
  </select>
);
