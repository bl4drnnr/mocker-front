import classNames from 'classnames';

import { InputProps } from '@components/UI/Input/Input.interface';
import { BasicInput } from '@components/UI/Input/Input.styles';

const Input = ({ value, placeholder, onChange, className }: InputProps) => {
  return (
    <BasicInput
      className={classNames({ ...className })}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
