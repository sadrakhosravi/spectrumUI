// Load styles
import './styles/main.scss';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// Components
import Grid from './elements/Grid/GridWrapper';
import { Button } from './elements/Buttons';
import { AirplaneRegular } from '@fluentui/react-icons';
import { MenuPopover } from './elements/Menu/MenuPopover/MenuPopover';
import { MenuItem } from './elements/Menu/MenuItem/MenuItem';
import { Menu } from './elements/Menu';

// Icon

function App() {
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
    </div>
  );
}

export default App;
