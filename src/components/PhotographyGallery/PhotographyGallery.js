import React from 'react'
import API from '../../utils/API'
import { Header, Grid, Container, Image, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class PhotographyGallery extends React.Component {
  state = {
    photographs: []
  }

  async componentDidMount () {
    try {
      const res = await API.get('/photographs')
      const photographs = res.data.data
      this.setState({ photographs })
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
        <Container textAlign='center'>
          <Image.Group size='large'>
            {
              this.state.photographs.map(photograph =>
                <Image src={photograph.SmallImageSrc}
                  alt={photograph.Meta}
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
