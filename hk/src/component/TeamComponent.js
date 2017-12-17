import React from 'react';
import { Card, Icon, Image,Grid,Segment} from 'semantic-ui-react'
import team1 from '../image/team1.png';
import team2 from '../image/team2.png';
import ContentsDivider from './ContentsDivider';
const TeamComponent = () => {
  return (
    <div style={{marginTop: '1.3em',paddingBottom:'10.0em'}}>
      <ContentsDivider title= "Team" subtitle="Who's make this"/>
      <Grid columns={2} container divided relaxed stackable>
      <Grid.Row>
        <Grid.Column>
          <Card centered>
            <Image src={team1} size='medium' />
            <Card.Content>
              <Card.Header>Lee young joon</Card.Header>
              <Card.Meta>Joined in 2017</Card.Meta>
              <Card.Description>Main Developments</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                8 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered>
            <Image src={team2} size='medium'  />
            <Card.Content>
              <Card.Header>You Hyen ji</Card.Header>
              <Card.Meta>Joined in 2017</Card.Meta>
              <Card.Description>Main Developments</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  );
};

export default TeamComponent;
