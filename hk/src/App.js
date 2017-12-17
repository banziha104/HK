import React, {Component} from 'react';
import './App.css';
import TopMenu from "./component/TopMenu";
import HistoryContents from "./component/NewsContents"
import HKList from "./component/HKList";
import Preparations from "./component/StepContents"
import TeamComponent from "./component/TeamComponent"
import {Segment, Divider} from 'semantic-ui-react';
import * as receiver from './network/data'
import * as dataReceiver from './network/getHKdata'

class App extends Component {
  data;

  constructor(props) {
    super(props);

  };

  componentDidMount() {
    this.data = dataReceiver.getData();
  }

  hkData = receiver.getData();

  render() {
    return (
      <div>
        <TopMenu/>
        <HistoryContents/>
        <HKList/>
        <TeamComponent/>
        <Preparations/>
      </div>
    );
  }
}

export default App;
