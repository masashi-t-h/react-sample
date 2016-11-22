import React from 'react';
import List from './list';
import DefaultLayout from './layout';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      todo: ""
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onClickSample = this.onClickSample.bind(this);
  }
  onChangeValue(e) {
    this.setState({todo: e.target.value});
  }
  onClickSample(e) {
    this.state.data.push({todo: this.state.todo});
    this.setState({data: this.state.data})
    this.setState({todo: ""});
  }
  onClickTodo(e) {
    e.target.style = 'text-decoration: line-through';
  }
  render() {
    return (
      <DefaultLayout title={this.props.title} >
        <div className="content">
          <input type="text" id="todo" placeholder="TODO" value={this.state.todo} onChange={this.onChangeValue}/>
          <button onClick={this.onClickSample}>追加</button>
          <List data={this.state.data} onClickAction={this.onClickTodo}/>
        </div>
      </DefaultLayout>
    )
  }
}