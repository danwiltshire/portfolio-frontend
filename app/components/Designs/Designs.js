import React from 'react'
import axios from 'axios'

export default class Designs extends React.Component {
  state = {
    designs: []
  }

  componentDidMount () {
    axios.get('https://895o1wozfh.execute-api.eu-west-2.amazonaws.com/prod/designs')
      .then(res => {
        const designs = res.data.data
        this.setState({ designs })
        console.log(res)
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
