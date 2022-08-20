import { InputProps } from '@components/Input/Input.interface';
import { BasicInput } from '@components/Input/Input.styles';

const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <BasicInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
