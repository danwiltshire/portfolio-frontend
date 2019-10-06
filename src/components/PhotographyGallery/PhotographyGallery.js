import React from 'react'
import API from '../../utils/API'
import { Header, Grid, Container, Image, Sticky, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class PhotographyGallery extends React.Component {
  state = {
    photographs: [],
    loading: true
  }

  componentDidMount() {
    API.fetchData('photographs')
      .then(response => response.json())
      .then(response => response.data)
      .then(photographs => this.setState(
        {
          photographs,
          loading: false
        }))
      .catch(err => console.log(`Could not fetch the data: ${err}`))
  }


  render() {
    return (
      <div>
        <Sticky>
          <Container>
            <Grid columns={2} padded='vertically'>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h2'>Photography</Header>
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
          { this.state.loading
            ?
            <Dimmer active>
              <Loader
                size='massive'
              />
            </Dimmer>
            :
            <Image.Group size='large'>
              {
                this.state.photographs.map(photograph =>
                  <Image
                    src={photograph.SmallImageSrc}
                    key={photograph.SmallImageSrc}
                    alt={photograph.Meta}
                    rounded
                  />
                )
              }
            </Image.Group>
          }

        </Container>
      </div>
    )
  }
}
