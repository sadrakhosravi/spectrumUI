import React from 'react';

// Components
import { Input } from '../Input/Input';

// Styles
import styles from './InputWithIcons.module.scss';

// Types
import { InputWithIconProps } from './InputWithIcons.types';

export const InputWithIcon = (props: InputWithIconProps) => {
  const { children, width, ...inputProps } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const [paddingRight, setPaddingRight] = React.useState('0px');

  React.useLayoutEffect(() => {
    const width = ref.current?.getBoundingClientRect().width || 0 + 5;
    setPaddingRight(width + 'px');
  }, [children]);

  return (
    <div className={styles.InputWithIcon}>
      <Input {...inputProps} style={{ paddingRight }} />
      <div className={styles.IconContainer} ref={ref}>
        {children}
      </div>
    </div>
  );
};
