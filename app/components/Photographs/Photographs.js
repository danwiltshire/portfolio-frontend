import React from 'react'
import API from '../../utils/API'

export default class Photographs extends React.Component {
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
        {
          this.state.photographs.map(photograph =>
            <article className="gallery_image" key={photograph.Header}>
              <a
                href={photograph.LargeImageSrc}>
                <img
                  src={photograph.SmallImageSrc}
                  alt={photograph.Meta}
                  width="432px"
                  height="288px"
                />
              </a>
            </article>
          )
        }
      </div>
    )
  }
}
