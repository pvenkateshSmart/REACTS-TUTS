import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'Parent'
      }
      this.greetparent= this.greetparent.bind(this)
    }

    greetparent(childName){
        alert(`This is ${this.state.parentname} from  ${childName}`);
    }
  render() {
    return (
      <div>
        <ChildComponent greethandelr={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComponent