import React from 'react';

export default class List extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.data.map((obj) => {
            return <a href="#" onClick={this.props.onClickAction}><li>{obj.todo}</li></a>;
          })}
        </ul>
      </div>
    );
  }
}