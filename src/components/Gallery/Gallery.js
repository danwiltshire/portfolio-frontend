import React from 'react'
import { Header, Grid, Container, Image, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Sticky>
          <Container>
            <Grid columns={2} padded='vertically'>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h2'>{this.props.title}</Header>
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
        <Container>
          <Grid>
            {
              this.props.data.map(photograph =>
                <Grid.Column mobile={16} computer={8}>
                  <Image
                    src={photograph.SmallImageSrc}
                    key={photograph.SmallImageSrc}
                    alt={photograph.Meta}
                    href={photograph.LargeImageSrc}
                    rounded
                    fluid
                  />
                </Grid.Column>
              )
            }
          </Grid>
        </Container>
      </div>
    )
  }
}
