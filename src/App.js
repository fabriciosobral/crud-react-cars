// import React, { Component } from 'react';
// import './App.css';
// import TableCars from './TableCars';


//   class App extends Component{

//     constructor(){
//       super();
//       this.state=({
//         db:[]
//       });
//       this.showCars();
//     }
    
//     showCars(){
//       fetch("http://localhost:9000/www/projects/react-crud/src/api")
//       .then((response)=>response.json())
//       .then((responseJson)=>
//       {
//         this.setState({
//           db: responseJson
//         });
//         console.log(this.state.db);
//       })
//     }

//     render(){
//       return (
//         <div className="App App-header">
//           <TableCars arrayCars={this.state.db}/>
//         </div>
//       );
//     }
//   }
  
// export default App;


import React from 'react';
import TableCars from './TableCars';


 App = () =>{

  const showCars = () => {

    fetch("http://localhost:9000/www/projects/react-crud/src/api")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
          
          this.setState({
            db: responseJson
          });
        })
  }

 
      return (
        <div className="App App-header">
          <TableCars arrayCars={db}/>
        </div>
      );

  }
  
  export default App;

