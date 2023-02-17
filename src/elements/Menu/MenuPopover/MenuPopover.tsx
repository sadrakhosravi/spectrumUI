// Styles
import styles from './MenuPopover.module.scss';

// Types
import { MenuPopoverProps } from './MenuPopover.types';

export const MenuPopover = (props: MenuPopoverProps) => {
  return <div className={styles.MenuPopover}>{props.children}</div>;
};
