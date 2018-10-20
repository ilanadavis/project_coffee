import React from 'react';
import Header from './Header';
import Hire from './Hire';
import Change from './Change';
import Term from './Term';


class App extends React.Component {
  render() {
    return (
      <div className="paf-selection">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
         <Hire />
         <Change />
         <Term />
      </div>
    )
  }
  
}

export default App;