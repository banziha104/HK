
import {Table, Header, Image} from 'semantic-ui-react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HKContents extends Component {
  render() {
    const {id, title, description, type, image} = this.props;
    return (
      <div>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image
                rounded
                size='medium'
                src={image}
              />
              <Header.Content>
                {title}
                <Header.Subheader>{description}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
      </div>
    );
  }
}

HKContents.propTypes = {};

export default HKContents;