import React from 'react';
import {Step, Container} from 'semantic-ui-react';
import ContentsDivider from './ContentsDivider';
const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginTop: '100px',
    marginBottom: '150px',
  },
}
const Preparations = () => {
  return (
    <div style={{marginTop: '1.3em', backgroundColor: '#EEEEEE',paddingBottom:'5.0em'}}>

    <ContentsDivider title="Step" subtitle="Our projects"/>
      <Container style={style.last}>
        <Step.Group fluid>
          <Step
            icon='comments outline'
            title='Design'
            description='How to make this?'
          />
          <Step
            active
            icon='settings'
            title='Develop'
            description='Web with React & Semantic-UI'
          />
          <Step
            disabled
            icon='cloud upload'
            title='Deploy'
            description='Use Amazon Web Service EC2'
          />
        </Step.Group>
      </Container>
    </div>
  );
};

export default Preparations;
