import React from 'react';

import {
  Icon,
  Header,
  Grid,
  Container,
  Divider
} from 'semantic-ui-react'
import '../Style/ddd.css'
const ContentsDivider = (props) => {
  return (
    <div>
      <Grid columns={16}>
            <Container text >
            <Header
              textAlign='center'
              as='h1'
              content={props.title}
              style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em'}}
            />
            <Header
              className="dividerSubTitle"
              as='h1'
              textAlign="center"
              style = {{
                fontSize: '1.5em',
                fontWeight: 'normal',
                marginBottom: '2em',
                marginBottom : '2em'
              }}
              content={props.subtitle}
            />
            </Container>

      </Grid>
    </div>
  );
};

export default ContentsDivider;
