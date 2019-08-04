import React from 'react'
import API from "../../utils/API";

export default class Photographs extends React.Component {
  state = {
    photographs: []
  }

  componentDidMount () {
    API.get('/photographs')
      .then(res => {
        const photographs = res.data.data
        this.setState({ photographs })
      })
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
