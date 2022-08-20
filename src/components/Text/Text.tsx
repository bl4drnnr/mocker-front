import React, { ReactElement, useMemo } from 'react';
import { TextProps } from './Text.interface';

const Text = ({
  size, weight = 'medium', color,
  children, onClick = () => undefined,
}: TextProps): ReactElement => {
  const fontWeight = useMemo(() => {
    switch (weight) {
      case 'thin':
        return 300;
      case 'regular':
        return 400;
      case 'medium':
        return 500;
      case 'semibold':
        return 600;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }, [weight]);

  const fontColor = useMemo(() => {
    return color;
  }, [color]);

  return (
    <p
      onClick={onClick}
      style={{
        fontWeight,
        color: fontColor,
        fontSize: size,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
