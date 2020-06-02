import React from 'react';
import './App.css';
import Layout from './pages/layout';

class App extends React.Component {
  constructor(props: any) {
      super(props);
      this.state = {
          route: props.route,
      }
  }
  render() {
      return (
          <div className="App">
              <div>
                <Layout />
              </div>
          </div>
      );
  }
}

export default App;
