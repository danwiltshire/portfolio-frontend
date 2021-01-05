import React from 'react'
import API from '../../utils/API'
import { Dimmer, Loader, Header, Grid, Container, Image, Sticky, Button, Icon, Segment, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class ProjectGallery extends React.Component {
  state = {
    data: [],
    loading: true
  }

  componentDidMount() {
    API.fetchData('projects')
      .then(response => response.json())
      .then(response => response.data)
      .then(data => this.setState(
        {
          data,
          loading: false
        }))
      .catch(err => console.log(`Could not fetch the data: ${err}`))
  }

  render() {
    return (
      <div>
        { this.state.loading
        ?
          <Dimmer active>
            <Loader
              size='massive'
            />
          </Dimmer>
        :
        <div>
          <Sticky>
            <Container>
              <Grid columns={2} padded='vertically'>
                <Grid.Row>
                  <Grid.Column>
                    <Header as='h2'>Projects</Header>
                  </Grid.Column>
                  <Grid.Column textAlign='right'>
                    <Link
                        to='/'
                      >
                        Close
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Sticky>
          <Container id="main" text>

            <Segment basic>


            <Grid columns={2} padded='vertically'>
                <Grid.Row>
                  <Grid.Column>
                  <Header as='h1'>
                    Violet
                    <Header.Subheader>
                      A serverless media hosting solution
                    </Header.Subheader>
                  </Header>
                  </Grid.Column>
                  <Grid.Column textAlign='right' verticalAlign='middle'>
                    <a href="https://github.com/danwiltshire/violet">
                      <Button color='blue'>
                        <Icon name='github' /> Project Code
                      </Button>
                    </a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Image src='https://media.danielwiltshire.co.uk/images/design/violet-mobileapp-stacked.png' fluid rounded />


              <Header as='h2'>Violet Web</Header>

              <p>Access your media anywhere, from any device.</p>

              <Grid>
                <Grid.Column mobile={8} computer={4}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-web-error.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-web-error.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={8} computer={4}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-web-user.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-web-user.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={8} computer={4}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-web-search.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-web-search.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={8} computer={4}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-web-list.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-web-list.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={8} computer={4}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-web-welcome.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-web-welcome.png'
                  />
                </Grid.Column>
            </Grid>

              <Header as='h2'>Violet Manager</Header>

              <p>Automatically sync media from your PC to Violet.</p>

              <Grid>
                <Grid.Column mobile={16} computer={8}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-manager-librarysettings.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-manager-librarysettings.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={8}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-manager-historyentry.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-manager-historyentry.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={8}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-manager-home.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-manager-home.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={8}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-manager-libraries.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-manager-libraries.png'
                  />
                </Grid.Column>
                <Grid.Column mobile={16} computer={8}>
                  <Image
                    src='https://media.danielwiltshire.co.uk/images/design/violet-manager-synchistory.png'
                    rounded
                    fluid
                    bordered
                    href='https://media.danielwiltshire.co.uk/images/design/violet-manager-synchistory.png'
                  />
                </Grid.Column>
            </Grid>

              <Header as='h2'>Toolset</Header>

              <List bulleted>
                <List.Item>Terraform</List.Item>
                <List.Item>KitchenCI</List.Item>
                <List.Item>Chef InSpec</List.Item>
                <List.Item>ReactJS</List.Item>
                <List.Item>TypeScript</List.Item>
                <List.Item>HTML</List.Item>
                <List.Item>CSS</List.Item>
                <List.Item>AWS API Gateway</List.Item>
                <List.Item>AWS S3</List.Item>
                <List.Item>AWS CloudFront</List.Item>
                <List.Item>AWS Secrets</List.Item>
                <List.Item>AWS Lambda</List.Item>
                <List.Item>AWS IAM</List.Item>
                <List.Item>Auth0</List.Item>
              </List>

            </Segment>

          </Container>
        </div>
        }
      </div>
    )
  }
}
