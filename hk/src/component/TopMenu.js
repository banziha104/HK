import React, {Component} from 'react';
import {
  Container,
  Menu,
  Button,
  Icon,
  Visibility,
  Segment,
  Header
} from 'semantic-ui-react'
import FixedMenu from './FixedMenu'
import '../style/seg.css'
class TopMenu extends Component {
  state = {};

  hideFixedMenu = () => this.setState({visible: false})
  showFixedMenu = () => this.setState({visible: true})

  render() {
    const {visible} = this.state

    return (
      <div>
        {visible ? <FixedMenu/> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            className="mySeg"
            inverted
            textAlign='center'
            style={{minHeight: 700, padding: '1em 0em'}}
            vertical
          >
            <Container>
              <Menu stackable inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Introduce</Menu.Item>
                <Menu.Item as='a'>Contents</Menu.Item>
                <Menu.Item as='a'>Team</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted color={'blue'} style={{marginLeft: '0.5em'}}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Hangang'
                inverted
                style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}}
              />
              <Header
                as='h2'
                content='The beautiful river of South Korea'
                inverted
                style={{fontSize: '1.7em', fontWeight: 'normal'}}
              />
              <br/>
              <Button inverted color={'blue'} size='huge'>
                Get Started
                <Icon name='right arrow'/>
              </Button>
            </Container>
          </Segment>
        </Visibility>
      </div>

    );
  }
}

TopMenu.propTypes = {};

export default TopMenu;
