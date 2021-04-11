import React, { Component } from 'react';
import Ninjas from "./Ninjas";
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ayaz', age: 23, interest: 'SEO', id: 1 },
      { name: 'Zohaib', age: 24, interest: 'Programming', id: 2 },
      { name: 'Yasir', age: 19, interest: 'App development', id: 3 }
        
    ]
  }
  render() { 
    return ( 
      <div className="App">
        <h1>Hallo World!</h1>
        <p>Welcome:)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
     );
  }
}
 
export default App;


