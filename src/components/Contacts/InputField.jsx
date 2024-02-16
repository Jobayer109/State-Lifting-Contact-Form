/* eslint-disable react/prop-types */
const InputField = ({ type, name, value, label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
