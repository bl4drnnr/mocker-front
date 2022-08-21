import { InputProps } from '@components/UI/Input/Input.interface';
import { BasicInput } from '@components/UI/Input/Input.styles';

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
