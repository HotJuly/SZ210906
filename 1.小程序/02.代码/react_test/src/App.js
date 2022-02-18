import React ,{Component} from 'react';

class App extends Component{
  state={
    msg:0
  }

  ref666 = React.createRef();

  handleClick1=()=>{
    this.setState({
      msg:this.state.msg+1
    })
    console.log('one',this.state.msg)

    this.setState({
      msg:this.state.msg+1
    })
    console.log('two',this.state.msg)

    this.setState({
      msg:this.state.msg+1
    })
    console.log('three',this.state.msg)

    this.setState({
      msg:this.state.msg+1
    })
    console.log('four',this.state.msg)
  }

  click1=()=>{
    console.log('我是合成事件')
  }

  click2=()=>{
    console.log('我是原生事件')
  }

  render(){
    return (
      <div>
        <h1>{this.state.msg}</h1>
        {/* <button onClick={this.handleClick1}>我是合成事件按钮</button> */}
        {/* <button ref={this.ref666}>我是原生DOM事件按钮</button> */}
        <button onClick={this.click1} ref={this.ref666}>我</button>
      </div>
    )
  }

  componentDidMount(){
    // this.setState({
    //   msg:1
    // })
    // console.log(this.state.msg)

    // this.ref666.current.onclick=this.handleClick1;
    this.ref666.current.onclick=this.click2;
  }
}

export default App;
