import { Button } from './elements/Button/Button';

import './styles/main.scss';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import Grid from './elements/Grid/GridWrapper';

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
      </Grid>
    </div>
  );
}

export default App;
