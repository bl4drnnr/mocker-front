import { ButtonProps } from '@components/Button/Button.interface';
import { Container, Text } from '@components/Button/Button.styles';

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
