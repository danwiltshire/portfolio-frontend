import React from 'react'
import API from '../../utils/API'
import { Header, Grid, Container, Image, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class UIDesignsGallery extends React.Component {
  state = {
    designs: []
  }

  componentDidMount() {
    API.fetchData('designs')
      .then(response => response.json())
      .then(response => response.data)
      .then(designs => this.setState({ designs }))
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
        <Container textAlign='center'>
          <Image.Group size='large'>
            {
              this.state.designs.map(design =>
                <Image src={design.SmallImageSrc}
                  alt={design.Meta}
                  rounded
                />
              )
            }
          </Image.Group>
        </Container>
      </div>
    )
  }
}
