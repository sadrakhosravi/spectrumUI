import React from 'react';

// Load styles
import './styles/main.scss';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// Components
import Grid from './elements/Grid/GridWrapper';
import { Button } from './elements/Buttons';
import { AirplaneRegular } from '@fluentui/react-icons';
import { MenuPopover } from './elements/Menu/MenuPopover/MenuPopover';
import { MenuItem } from './elements/MenuItem/MenuItem';
import { Menu } from './elements/Menu';
import { Input, InputWithIcon } from './elements/Inputs';
import { Dropdown } from './elements/Dropdown/Dropdown/Dropdown';

// Icon

function App() {
  const [value, setValue] = React.useState('Test Value');

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <Grid autoFlow='column' autoColumns={'min-content'} columnGap='1rem'>
        <Button primary>Button</Button>
        <Button>Button</Button>
        <Button icon={AirplaneRegular}>Button</Button>
        <Button icon={AirplaneRegular} />
        <Button icon={AirplaneRegular} transparent />
      </Grid>
      <Grid
        autoFlow='column'
        autoColumns={'min-content'}
        columnGap='1rem'
        style={{ marginTop: '20px', width: '500px' }}
      >
        <Menu label='Example'>
          <MenuPopover>
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
          </MenuPopover>
        </Menu>
        <Menu label='Example'>
          <MenuPopover>
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
            <MenuItem label={'Selection'} accelerator='Ctrl+P' />
          </MenuPopover>
        </Menu>
      </Grid>

      <Grid autoFlow='column' autoColumns={'min-content'} columnGap='1rem' style={{ marginTop: '20px' }}>
        <Input placeholder='Test' />
        <Input type='search' placeholder='Search...' />
        <InputWithIcon type='search' placeholder='Search...'>
          <Button icon={AirplaneRegular} transparent size='small' />
          <Button icon={AirplaneRegular} transparent size='small' />
          <Button icon={AirplaneRegular} transparent size='small' />
        </InputWithIcon>
      </Grid>

      <Grid
        style={{
          marginTop: '2rem',
        }}
      ></Grid>
      <Dropdown value={value}>
        <MenuItem label='test' onClick={() => setValue('test')} isActive={value === 'test'} />
        <MenuItem label='test2' onClick={() => setValue('test2')} isChecked />
        <MenuItem label='test3' onClick={() => setValue('test3')} />
        <MenuItem label='test4' onClick={() => setValue('test4')} />
        <MenuItem label='test5' onClick={() => setValue('test5')} />
      </Dropdown>
    </div>
  );
}

export default App;
