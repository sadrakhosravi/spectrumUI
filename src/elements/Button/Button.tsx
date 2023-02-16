// Styles
import styles from './Button.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullWidth?: boolean;
  leftIcon?: () => JSX.Element;
  rightIcon?: () => JSX.Element;
}

export const Button = (props: ButtonProps) => {
  const { className, children, primary, size, text, fullWidth, leftIcon, rightIcon, ...rest } = props;
  const sizeStyle = !size || size === 'medium' ? '' : size === 'small' ? styles.SizeSmall : styles.SizeLarge;

  return (
    <button
      className={`${sizeStyle} ${styles.Button} ${primary ? styles.ButtonPrimary : ''} ${
        fullWidth ? styles.FullWidth : ''
      }`}
      {...rest}
    >
      {leftIcon && leftIcon.call(undefined)}
      <span>{text || children}</span>
      {rightIcon && rightIcon.call(undefined)}
    </button>
  );
};
