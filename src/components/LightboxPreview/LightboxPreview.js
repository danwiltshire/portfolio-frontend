//@flow
import React from 'react'
import { Image, Card } from 'semantic-ui-react'
import MyModal from './LightboxModal';

type Props = {
  SmallImageSrc: string,
  Header: string,
  Meta: string,
  LargeImageSrc: string,
  AdditionalURLs: Array<Object>
}

type State = {
  modalOpen: boolean
}

class LightboxPreview extends React.Component<Props, State> {

  constructor() {
    super()

    this.state = {
      modalOpen: false,
    }
  }

  render() {
    return ([
      <Card 
        key='card'
        onClick={() => this.setState({ modalOpen: true })}>
        <Image src={this.props.SmallImageSrc} wrapped />
        <Card.Content>
          <Card.Header>{this.props.Header}</Card.Header>
          <Card.Meta>
            <span>{this.props.Meta}</span>
          </Card.Meta>
        </Card.Content>
      </Card>,
      <MyModal // The invisible modal itself
        key='modal'
        Header={this.props.Header}
        Meta={this.props.Meta}
        AdditionalURLs={this.props.AdditionalURLs}
        LargeImageSrc={this.props.LargeImageSrc}
          modalOpen={this.state.modalOpen}
          handleClose={() => this.setState({ modalOpen: false })
          }
      />
    ])
  }
}

export default LightboxPreview;