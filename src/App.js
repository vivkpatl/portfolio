import React from 'react';
import './App.scss';


//Components that I somehow wrote
import Block from './Block';
import Info from './Info'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="Top">
          <Block title="Vivek P. Patel" description="Developer - Student - Point Guard">
          </Block>

          <Info>
          </Info>
        </div>
      </div>
    );
  }

}

export default App;
