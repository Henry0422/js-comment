import React from 'react';
import './App.css';
import { Main } from './main';

class App extends React.Component {

  componentDidMount() {
    document.title = 'JavaScript Comment';
  }

  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;