import React, { Component } from 'react'

class Classfunction extends Component {
    hnadleclick(){
        console.log('test for class function');
    }
  render() {
   
    return (
      <div>Class Function
      <button onClick={this.hnadleclick}>set class function</button>
      </div>
    )
  }
}

export default Classfunction