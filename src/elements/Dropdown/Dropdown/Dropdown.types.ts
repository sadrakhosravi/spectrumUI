export type DropdownProps = {
  /** Controlled value. Should have a controlled setter outside the
   * component in order to work properly.
   */
  value: string | number;

  /** A default value to display if no item is selected */
  defaultValue?: string;

  children: JSX.Element | JSX.Element[];
};
