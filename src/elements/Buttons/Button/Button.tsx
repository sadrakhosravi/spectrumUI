// Styles
import styles from './Button.module.scss';

// Types
import { ButtonProps } from './Button.types';

// Default button css styles
const btnIconStyles = {
  small: {
    width: '2rem',
    height: '2rem',
  },
  medium: {
    width: '2.4rem',
    height: '2.4rem',
  },
  large: {
    width: '6rem',
    height: '6rem',
  },
};

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    primary,
    size = 'medium',
    text,
    fullWidth,
    iconPosition,
    transparent,
    icon,
    ...rest
  } = props;
  const sizeStyle = !size || size === 'medium' ? '' : size === 'small' ? styles.SizeSmall : styles.SizeLarge;
  const btnIconStyle = icon ? styles.ButtonWithIcon : styles.ButtonWithoutIcon;

  return (
    <button
      className={`${sizeStyle} ${styles.Button} ${btnIconStyle} ${transparent ? '' : styles.ButtonBackgroundColor} ${
        primary ? styles.ButtonPrimary : ''
      } ${fullWidth ? styles.FullWidth : ''}`}
      {...rest}
    >
      {/* Left icon */}
      {icon &&
        iconPosition !== 'right' &&
        icon.call(undefined, {
          style: btnIconStyles[size as keyof typeof btnIconStyles],
        })}

      {/* Text content */}
      {(text || children) && <span>{text || children}</span>}

      {/* Right icon */}
      {icon &&
        iconPosition === 'right' &&
        icon.call(undefined, {
          style: btnIconStyles[size as keyof typeof btnIconStyles],
        })}
    </button>
  );
};
