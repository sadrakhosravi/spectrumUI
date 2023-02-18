// Styles
import styles from './Input.module.scss';

// Types
import { InputProps } from './Input.types';

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return <input className={styles.Input} {...rest} />;
};
