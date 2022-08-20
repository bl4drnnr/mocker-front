import { ButtonProps } from '@components/Button/Button.interface';
import { Container } from '@components/Button/Button.styles';
import Text from '@components/Text/Text';

const Button =
({
  text,
  onClick
}: ButtonProps): JSX.Element => {
  return (
    <Container
      onClick={onClick}
    >
      <Text size={16} color={'lightGray'} weight={'regular'}>{text}</Text>
    </Container>
  );
};

export default Button;
