import React from 'react'
import API from '../../utils/API'
import Gallery from '../Gallery'
import { Dimmer, Loader } from 'semantic-ui-react'

export default class PhotographyGallery extends React.Component {
  state = {
    data: [],
    loading: true
  }

  componentDidMount() {
    API.fetchData('photographs')
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
          <Gallery
            title="Photography"
            data={this.state.data}
          />
        }
      </div>
    )
  }
}
