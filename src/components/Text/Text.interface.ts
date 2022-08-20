type TTextSize = 12 | 14 | 16 | 18 | 20 | 24 | 30;
type TTextColor = 'darkGray' | 'lightGray' | 'red' | 'blue' | 'white';
type TTextWeight = 'thin' | 'regular' | 'medium' | 'semibold' | 'bold';

export interface TextProps {
  size: TTextSize;
  color: TTextColor;
  weight: TTextWeight;
  children: string;
  condensed?: boolean;

  onClick?: VoidFunction;
}
