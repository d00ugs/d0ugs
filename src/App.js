import React, { Component } from 'react';
import './App.css';
import Dougs from './dougs';
import DocumentTitle from 'react-document-title';

class App extends Component {
  render() {
    return (
      <DocumentTitle title="dou.gs">
        <Dougs/>
      </DocumentTitle>
    );
  }
}

export default App;
