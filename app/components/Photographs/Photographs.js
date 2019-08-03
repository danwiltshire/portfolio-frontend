import React from 'react'
import axios from 'axios'

export default class Photographs extends React.Component {
  state = {
    photographs: []
  }

  componentDidMount () {
    axios.get('https://895o1wozfh.execute-api.eu-west-2.amazonaws.com/prod/photographs')
      .then(res => {
        const photographs = res.data.data
        this.setState({ photographs })
        console.log(res)
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
