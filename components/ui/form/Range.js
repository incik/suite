export const Range = ({ defaultValue, onChange, min, max, step }) => {
  return (
    <input
      type="range"
      defaultValue={defaultValue}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
  );
};
