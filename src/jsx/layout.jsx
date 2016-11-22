import React from 'react';

export default class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        {this.props.children}
        <footer>
          <p>
            Copyright 2016
          </p>
        </footer>
      </div>
    );
  }
}