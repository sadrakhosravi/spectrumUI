// Components
import { Popover, PopoverTrigger, PopoverContent } from '../../Popover';

// Styles
import styles from './Menu.module.scss';

// Types
import type { MenuProps } from './Menu.types';

export const Menu = (props: MenuProps) => {
  const { children, label } = props;

  return (
    <Popover placement='bottom-start'>
      <div>
        {/* Menu button */}
        <PopoverTrigger asChild>
          {typeof label === 'string' && <div className={styles.MenuButton}>{label}</div>}
        </PopoverTrigger>
        {/* Menu Popover  */}
        <PopoverContent className='Popover'>
          <div>{children}</div>
        </PopoverContent>
      </div>
    </Popover>
  );
};
