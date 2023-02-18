export type MenuItemProps = {
  /** Menu label/button */
  label: string;
  /** Keyboard shortcut for the menu */
  accelerator?: string;

  /** If the menu item is active - shows active state */
  isActive?: boolean;

  /** If the menu item is checked - shows a check mark */
  isChecked?: boolean;

  /** Extra classname */
  className?: string;

  /** Onclick event */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
