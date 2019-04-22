import React, { Component } from 'react';
import { Menu, Grid, Message, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import logo from './logo.png';

export default class App extends Component {

  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Grid className='max-height'>
        <Grid.Row stretched>
          <Grid.Column width='4'>
            <Menu pointing secondary vertical >
              <Menu.Header><Image src={logo} /></Menu.Header>
              <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
              <Menu.Item name='Find a Therapist' active={activeItem === 'Find a Therapist'} onClick={this.handleItemClick} />
              <Menu.Item name='Chat Room' active={activeItem === 'Chat Room'} onClick={this.handleItemClick} />
              <Menu.Item name='Learn more about self-harm' active={activeItem === 'Learn more about self-harm'} onClick={this.handleItemClick} />
              <Menu.Item name='Fast Facts' active={activeItem === 'Fast Facts'} onClick={this.handleItemClick} />
              <Menu.Item name='Coping with urges' active={activeItem === 'Coping with urges'} onClick={this.handleItemClick} />
            </Menu>
          </Grid.Column>
          <Grid.Column width='12' className='content' >
            <Message hidden={activeItem !== 'Home'} positive header='Home'>
              Welcome Home.
            </Message>
            <Message hidden={activeItem !== 'Find a Therapist'} positive header='Home'>
              Let us help you find a good therapist.
            </Message>
            <Message hidden={activeItem !== 'Chat Room'} positive header='Home'>
              Welcome to our chat room.
            </Message>
            <Message hidden={activeItem !== 'Learn more about self-harm'} positive header='Home'>
              Learn more about self-harm.
            </Message>
            <Message hidden={activeItem !== 'Fast Facts'} positive header='Home'>
              Fast facts!
            </Message>
            <Message hidden={activeItem !== 'Coping with urges'} positive header='Home'>
              Coping with urges.
            </Message>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column>
            <Message info size='mini'>
              <Message.Header>Get Help Now!</Message.Header>
              <p>Crisis Hotline: (000) 000-0000</p>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
