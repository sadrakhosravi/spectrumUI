// Components
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import { MenuPopover } from '../../Menu';
import { ChevronDown16Filled } from '@fluentui/react-icons';

// Styles
import styles from './Dropdown.module.scss';

// Types
import { DropdownProps } from './Dropdown.types';

export const Dropdown = (props: DropdownProps) => {
  const { value, defaultValue, children } = props;

  return (
    <Popover placement='bottom-start'>
      <PopoverTrigger asChild>
        <button className={styles.DropdownTrigger} role='combobox'>
          <span>{value || defaultValue}</span>
          <span>
            <ChevronDown16Filled />
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent closeOnClick>
        <MenuPopover className={styles.DropdownPopover}>{children}</MenuPopover>
      </PopoverContent>
    </Popover>
  );
};
