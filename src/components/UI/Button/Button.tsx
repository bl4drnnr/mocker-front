import { ButtonProps } from '@components/UI/Button/Button.interface';
import { ButtonContent, Container } from '@components/UI/Button/Button.styles';

const Button =
({
  text,
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <Container
      onClick={onClick}
    >
      <ButtonContent>{text}</ButtonContent>
    </Container>
  );
};

export default Button;
