import React from 'react'

import { Header, Segment, Container, Image, Button, Icon, List } from 'semantic-ui-react'

const BigKahunaBurger = () => (
  <Container id="main" text>

    <Segment basic>
      <Header as='h1'>
        Daniel Wiltshire
        <Header.Subheader>
          Specialist in IT Security
        </Header.Subheader>
      </Header>
      <p>I’m a Service Delivery Engineer for NCR where I automate the delivery of mission-critical SaaS applications worldwide.</p>
      <a href="https://www.linkedin.com/in/danielwiltshire/">
        <Button color='linkedin'>
          <Icon name='linkedin' /> LinkedIn
        </Button>
      </a>
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
      <div className="gallery-image">
        <Image src='https://s3.eu-west-2.amazonaws.com/media.danielwiltshire.co.uk/images/photography/sankt_jorgens_so_dusk_small.jpg' fluid rounded />
        <span>Sankt Jørgens Sø, Copenhagen</span>
      </div>
    </Segment>

    <Segment basic>
      <Header as='h2'>UI design</Header>
      <div className="gallery-image">
        <Image src='https://s3.eu-west-2.amazonaws.com/media.danielwiltshire.co.uk/images/design/aviation_festival_small.jpg' fluid rounded />
        <span>Bristol Aviation Fair poster</span>
      </div>
    </Segment>

    <Segment basic>
      <Header as='h2'>Contact</Header>
      <p>Please visit me over at LinkedIn.</p>
      <a href="https://www.linkedin.com/in/danielwiltshire/">
        <Button color='linkedin'>
          <Icon name='linkedin' /> LinkedIn
        </Button>
      </a>
    </Segment>

    <Segment id="footer" basic>
      <p>This serverless app is written in JavaScript and is continuously deployed to AWS using Travis CI.</p>

      <p><a href="https://github.com/danwiltshire/portfolio-frontend">Source code on GitHub</a></p>
    </Segment>

  </Container>
)

export default BigKahunaBurger
