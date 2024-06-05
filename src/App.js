import React, {useState} from 'react';
import './styles/App.css';
import Header from './components/header';
import Grid from './layout/component/gridcontainer';
import GridOverlay from './layout/component/gridoverlay';

function App() {
  const [showGrid, setShowGrid] = useState(true);
  return (
    <div className='app-container'>
      {showGrid && <GridOverlay />}
      <Grid>
        <Header className="grid-item col-span-12" />
        <main>
          <div className='grid-item col-span-3'>Sidebar</div>
          <div className='grid-item col-span-9'>Main Content</div>
        </main>
        <footer className='grid-item colo-span-12' >Footer</footer>
      </Grid>
    </div>
  );
}

export default App;
