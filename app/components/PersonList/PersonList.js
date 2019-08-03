import React from 'react'
import axios from 'axios'

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:3001')
      .then(res => {
        const persons = res.data
        this.setState({ persons })
      })
  }

  render () {
    return (
      <div>
        {
          this.state.persons.map(person =>
            <article className="gallery_image" key={person._id}>
              <a
                href="https://danielwiltshire.co.uk/images/photography/louisiana_design_museum_1.jpg">
                <img
                  src="https://danielwiltshire.co.uk/images/photography/louisiana_design_museum_1_small.jpg"
                  alt="Looking Glass at Louisiana Design Museum, Copenhagen"
                />
              </a>
            </article>
          )
        }
      </div>
    )
  }
}
