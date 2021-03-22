
import React from 'react';
import INPUT from './components/input/input.js';
import BOX from './components/box/box';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles-js';
library.add(faTrash);

const particlesbro = {

  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        area: 300
      },
    },

  },
};
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      curritem: {
        text: '',
        key: ''
      }
    }

  }
  onButtonsubmit = () => {
    const newitem = this.state.curritem;
    console.log(newitem);
    if (newitem !== "") {
      const nitems = [...this.state.item, newitem];
      this.setState({
        item: nitems,
        curritem: {
          text: '',
          key: ''
        }
      })
    }
  }
  onInputChange = (e) => {
    this.setState({
      curritem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  remove = (key) => {
    const newstat = this.state.item.filter(e => (key !== e.key));
    this.setState({
      item: newstat,
      curritema: {
        text: '',
        key: ''
      }

    })
  }
  updatevalue = (text, key) => {
    const newstst = this.state.item;
   const stat= newstst.map(ele => {
      if (ele.key === key) {
        ele.text = text;
      }
     return ele
    })
    this.setState({
      item: newstst
    })
  }
  render() {
    return (

      <div className='app'>
        <Particles
          className='particles'
          params={particlesbro}
          style={{
            width: '100%',

          }}


        />

        <div className="todo">TODOLIST</div>
        <INPUT onButtonsubmit={this.onButtonsubmit} data={this.state.curritem} OninputChange={this.onInputChange} />
        <BOX className="scroll" item={this.state.item} remove={this.remove} updatevalue={this.updatevalue} />
      </div>


    )
  }
}

export default App;
