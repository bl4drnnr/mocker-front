import { ButtonProps } from '@components/UI/Button/Button.interface';
import { Container, Text } from '@components/UI/Button/Button.styles';

const Button =
({
  text,
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <Container
      onClick={onClick}
    >
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
