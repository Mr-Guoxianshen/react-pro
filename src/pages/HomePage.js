import React from 'react';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '呵呵呵呵呵呵呵'
        }
    }
    render() {
      return <h1>首页, {this.state.text}</h1>;
    }
  }

export default HomePage;
