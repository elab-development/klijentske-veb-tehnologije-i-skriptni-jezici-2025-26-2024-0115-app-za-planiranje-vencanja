interface Props {
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  min?: string;
}

function InputField({
  value,
  placeholder,
  onChange,
  type = "text",
  min,
}: Props) {
  
    return (
  <input
  className="input-field"
  value={value}
  placeholder={placeholder}
  onChange={onChange}
  type={type}
  min={min}
/>
);
}

export default InputField;