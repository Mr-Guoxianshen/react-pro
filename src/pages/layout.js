import React from 'react';
import {Link
} from "react-router-dom";
import RouterContainer from "../router";
import {
    BrowserRouter as Router,
} from "react-router-dom";
class Layout extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li><Link to="/home-page">首页</Link></li>
                        <li><Link to="/test">测试页</Link></li>
                    </ul>
                    <RouterContainer />
                    <div>我是尾部</div>
                </Router>
            </div>
        )
    }
  }

export default Layout;
