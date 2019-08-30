import React from 'react'

import { Header, Segment, Container, Image, Button, Icon, List } from 'semantic-ui-react'

import Designs from '../Designs'
import Photographs from '../Photographs'

const BigKahunaBurger = () => (
  <Container text>

    <Segment basic>
      <Header as='h1'>
        Daniel Wiltshire
        <Header.Subheader>
          Specialist in IT Security
        </Header.Subheader>
      </Header>
      <p>I’m a Service Delivery Engineer for NCR where I automate the delivery of mission-critical SaaS applications worldwide.</p>
      <Button color='linkedin'>
        <Icon name='linkedin' /> LinkedIn
      </Button>
    </Segment>

    <Segment basic>
      <Header as='h2'>My interests</Header>
      <List bulleted>
        <List.Item>Landscape photography</List.Item>
        <List.Item>UI design</List.Item>
        <List.Item>Piano, guitar and bass</List.Item>
        <List.Item>Cyber security</List.Item>
        <List.Item>Programming.</List.Item>
      </List>
    </Segment>

    <Segment basic>
      <Header as='h2'>Photography</Header>
      <Image src='https://s3.eu-west-2.amazonaws.com/media.danielwiltshire.co.uk/images/photography/sankt_jorgens_so_dusk_small.jpg' fluid rounded />
      <p>Sankt Jorgens So, Copenhagen</p>
      <Button>
        Load more (6)
      </Button>
    </Segment>

    <Segment basic>
      <Header as='h2'>UI design</Header>
      <Image src='https://s3.eu-west-2.amazonaws.com/media.danielwiltshire.co.uk/images/design/aviation_festival_small.jpg' fluid rounded />
      <p>Sankt Jorgens So, Copenhagen</p>
      <Button>
        Load more (6)
      </Button>
    </Segment>

    <Segment basic>
      <Header as='h2'>Contact</Header>
      <p>Please visit me over at LinkedIn.</p>
      <Button color='linkedin'>
        <Icon name='linkedin' /> LinkedIn
      </Button>
    </Segment>

    <Segment basic>
      <p>This serverless app is written in JavaScript and is continuously deployed to AWS using Travis CI.</p>
    </Segment>

  </Container>
)

export default BigKahunaBurger
