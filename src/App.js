import React,{Component} from 'react';
import './App.css';
import ProgressBar from "./Components/ProgressBar/progressBar"

class App extends Component {
  state = { 
    percentage:30
   }
  render() { 
    return ( <div style={{width:"100%",height:"100vh", backgroundColor:"#dedede"}} >
      <button disabled={this.state.percentage>=100} onClick={()=>{
        this.setState({percentage:this.state.percentage+10})
      }}>Click</button>
      <ProgressBar
        progressStyle={{
          position:"absolute",
          top:"50%",
          left:"50%",
          transform:"translateX(-50%)",
          height:'20px',
          width:'50%',
          // borderRadius:'10px',
          // border:'1px solid gray'
        }}
        fillerStyle={{
          width: `${this.state.percentage}%`,
          background:'blue',
        }}
      />
  </div> );
  }
}
 
export default App;