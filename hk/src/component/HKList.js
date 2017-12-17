import HKContents from './HKContents'
import React, {Component} from 'react';
import {Table, Container} from 'semantic-ui-react';
import ContentsDivider from './ContentsDivider';
import * as receiver from '../network/data';

class HKList extends Component {
  render() {
    const data = receiver.getData();
    const dataList = data.map(
      ({id, title, description, type, image}) => (
        <HKContents
          id={id}
          title={title}
          description={description}
          type={type}
          image={image}
          key={id}
        />
      )
    );
    return (
      <div style={{marginTop: '1.3em', backgroundColor: '#EEEEEE',paddingBottom:'10.0em'}}>
        <div style={{marginBottom:'1.3em'}}>
          <ContentsDivider title="Contents" subtitle="Most popular in hangang"/>
          <Container>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Contents</Table.HeaderCell>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {dataList};
              </Table.Body>
            </Table>
          </Container>
        </div>
      </div>
    );
  }
}

export default HKList;


