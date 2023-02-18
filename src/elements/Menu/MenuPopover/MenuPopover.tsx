// Styles
import styles from './MenuPopover.module.scss';

// Types
import { MenuPopoverProps } from './MenuPopover.types';

export const MenuPopover = (props: MenuPopoverProps) => {
  const { children, className = '', ...rest } = props;

  return (
    <div {...rest} className={`${styles.MenuPopover} ${className}`}>
      {children}
    </div>
  );
};
