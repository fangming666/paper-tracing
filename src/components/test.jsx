// import React, { Component } from 'react';
// import './App.scss';
//
// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = ({
//             data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
//             isLoadingMore: false
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="App">
//                     {this.state.data.map((item, index) => (
//                         <li key={index} className="li-item">{item}</li>
//                     ))}
//                 </div>
//                 <div className="loadMore" ref="wrapper" onClick={this.loadMoreDataFn.bind(this, this)}>加载更多</div>
//             </div>
//         );
//     }
//
//     componentDidMount() {
//         const wrapper = this.refs.wrapper;
//         const loadMoreDataFn = this.loadMoreDataFn;
//         const that = this; // 为解决不同context的问题
//         let timeCount;
//
//
//         function callback() {
//             const top = wrapper.getBoundingClientRect().top;
//             const windowHeight = window.screen.height;
//
//             if (top && top < windowHeight) {
//                 // 当 wrapper 已经被滚动到页面可视范围之内触发
//                 loadMoreDataFn(that);
//             }
//         }
//
//         window.addEventListener('scroll', function () {
//             if (this.state.isLoadingMore) {
//                 return ;
//             }
//
//             if (timeCount) {
//                 clearTimeout(timeCount);
//             }
//
//             timeCount = setTimeout(callback, 50);
//         }.bind(this), false);
//     }
//
//     loadMoreDataFn(that) {
//         that.setState({
//             data: that.state.data.concat(['E', 'c', 'h', 'o'])
//         })
//     }
// }
//
// export default Test;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from "react";

require("./App.scss");

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['hello', 'world', 'click', 'me'], result: !this.state.result};
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        var newItems = this.state.items.concat("123");
        this.setState({items: newItems, result: true});
    }

    handleRemove(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        var items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                    {this.state.result ? <div>123</div> : <div>456</div>}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default TodoList;

