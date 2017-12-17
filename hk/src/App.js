import React, { Component } from 'react';
import './App.css';
import TopMenu from "./Component/TopMenu";
import ContentsDivider from  "./Component/ContentsDivider"
import HistoryContents from  "./Component/HistoryContents"
import {Segment, Divider} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <ContentsDivider title ="News" subtitle ="Information for visitor"/>
        <HistoryContents/>
      </div>
    );
  }
}
export default App;
