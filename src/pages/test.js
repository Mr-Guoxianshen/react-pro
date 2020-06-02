import React from 'react';
class Test extends React.Component {
    constructor(props) {
        console.log('执行哈哈')
        super(props);
        this.state = {
            text: '呵呵呵呵呵呵呵',
            val: 3
        }
        this.arrList = [
          { i: 1 },
          { i: 2 }
        ]
    }
    componentDidMount() {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val)
  
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val)
      
      setTimeout(_ => {
        this.setState({ val: this.state.val + 1 })
        console.log(this.state.val)
  
        this.setState({ val: this.state.val + 1 })
        console.log(this.state.val)
      }, 0)
    }
    clickHandle() {
        this.setState({ val: this.state.val + 1 })
        console.log(this.state.val)

        this.setState({ val: this.state.val + 1 })
        console.log(this.state.val)
    }
    render() {
      return (
        <div>
          <h1>Hello, {this.state.text}</h1>
          <button onClick={() => this.clickHandle()}>点击</button>
          {
            this.arrList.map(a => (<div>{a.i}</div>))
          }
        </div>
      )
    }
  }

export default Test;
