import React from 'react'
import API from "../../utils/API";

export default class Designs extends React.Component {
  state = {
    designs: []
  }

  componentDidMount () {
    API.get('/designs')
      .then(res => {
        const designs = res.data.data
        this.setState({ designs })
      })
  }

  render () {
    return (
      <div>
        {
          this.state.designs.map(design =>
            <article className="gallery_image" key={design.Header}>
              <a
                href={design.LargeImageSrc}>
                <img
                  src={design.SmallImageSrc}
                  alt={design.Meta}
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
