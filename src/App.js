import Header from './components/Header';
import Grid from './components/Grid';

import './App.css';

function App() {
  const itemsList = [
    {
      name: 'Alan Rails',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',
      origin: 'Uknown',
      lastLocation: 'Worldender\'s lair',
      avatar: 'alan-rails.jpeg',
    },
  ]
  return (
    <div className="App">
      <Header
        title={'rick and morty'}
        subtitle={'hey, did you ever want to hold a terry fold?'}
      />
      <Grid items={itemsList} />
    </div>
  );
}

export default App;
