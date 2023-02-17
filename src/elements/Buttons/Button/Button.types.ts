import type { AirplaneRegular } from '@fluentui/react-icons/';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullWidth?: boolean;
  transparent?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: typeof AirplaneRegular;
};
