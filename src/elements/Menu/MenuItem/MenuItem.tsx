// Styles
import styles from './MenuItem.module.scss';

// Types
import { MenuItemProps } from './MenuItem.types';

export const MenuItem = (props: MenuItemProps) => {
  const { label, accelerator } = props;

  return (
    <button type='button' className={styles.MenuItem}>
      <div>{label}</div>
      {accelerator && <div>{accelerator}</div>}
    </button>
  );
};
