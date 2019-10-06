import React from 'react'
import API from '../../utils/API'
import { Header, Grid, Container, Image, Sticky, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class UIDesignsGallery extends React.Component {
  state = {
    designs: [],
    loading: true
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {
    API.fetchData('designs')
      .then(response => response.json())
      .then(response => response.data)
      .then(designs => this.setState(
        {
          designs,
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
                  <Header as='h2'>UI design</Header>
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
            <Grid>
              {
                this.state.designs.map(design =>
                  <Grid.Column mobile={16} computer={8}>
                  <Image
                    src={design.SmallImageSrc}
                    key={design.SmallImageSrc}
                    alt={design.Meta}
                    rounded
                    fluid
                  />
                  </Grid.Column>
                )
              }
            </Grid>
          }
        </Container>
      </div>
    )
  }
}
