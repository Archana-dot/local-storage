// import logo from './logo.svg';
// import  './App.css';
import React from 'react';

class App extends React.Component {
  setData(){
    let obj= {name: 'susan',age: 12,gender: 'female' }
     
     localStorage.this.setItem('myData', JSON.stringify(obj))
     sessionStorage.this.setItem('myData ', JSON.stringify(obj))


  }
  getData(){

     let data=localStorage.getItem('myData')
     data=JSON.parse(data)
     console.log(data.name)
  }
  render(){
  return (
    <div >
      <button onClick={()=>this.setData()}>set Data</button>
      <button onClick={()=>this.getData()}>get Data</button>
      
    </div>
  );
}
}

export default App;
