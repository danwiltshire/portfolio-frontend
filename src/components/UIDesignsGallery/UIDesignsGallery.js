import React from 'react'
import API from '../../utils/API'
import { Header, Grid, Container, Image, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class UIDesignsGallery extends React.Component {
  state = {
    designs: []
  }

  async componentDidMount () {
    try {
      const res = await API.get('/designs')
      const designs = res.data.data
      this.setState({ designs })
    } catch (e) {
      console.log(`Axios request failed: ${e}`)
    }
  }

  render () {
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
                <Image src={design.LargeImageSrc}
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
