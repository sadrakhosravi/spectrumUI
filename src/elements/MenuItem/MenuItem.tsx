// Components
import { Checkmark16Filled } from '@fluentui/react-icons';

// Styles
import styles from './MenuItem.module.scss';

// Types
import { MenuItemProps } from './MenuItem.types';

export const MenuItem = (props: MenuItemProps) => {
  const { label, accelerator, isActive, isChecked, className = '', onClick } = props;

  return (
    <button
      type='button'
      className={`${styles.MenuItem} ${isActive ? styles.MenuItemActive : ''} ${className}`}
      onClick={onClick}
    >
      {isChecked && (
        <div className={styles.MenuItemChecked}>
          <Checkmark16Filled />
        </div>
      )}
      <div>{label}</div>
      {accelerator && <div>{accelerator}</div>}
    </button>
  );
};
