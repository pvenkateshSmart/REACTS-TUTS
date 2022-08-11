import React,{component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/welcome';
import Message from './components/Message';
import Functionclick from './components/Functionclick';
import Classfunction from './components/Classfunction';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
      <Message/>
      <Functionclick/>
      <Classfunction/>
      <ParentComponent/>
        {/* <Greet name="venky"/>
        <Greet name="Rao"/>
        <Greet name="Narayana"/>
        <Welcome></Welcome>
         */}
    </div>
  );
}

export default App;
