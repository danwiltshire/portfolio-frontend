//@flow
import React from 'react'
import { Modal, Header, Button, Icon, Image } from 'semantic-ui-react'
import AdditionalURLs from '../AdditionalURLs'

type Props = {
  modalOpen: boolean,
  handleClose: () => void,
  Header: string,
  Meta: string,
  LargeImageSrc: string,
  AdditionalURLs: Object
}

const LightboxModal = (props: Props) => (
      <Modal
        open={props.modalOpen}
        closeOnEscape={true}
        onClose={props.handleClose}
        closeIcon
        basic
        >
        <Header content={props.Header} />
        <Modal.Content >
          <p>{props.Meta}</p>
          <Image src={props.LargeImageSrc} rounded centered />
        </Modal.Content>
        <Modal.Actions>
          <AdditionalURLs
            AdditionalURLs={props.AdditionalURLs}
          />
          <a href={props.LargeImageSrc}>
            <Button color='blue' inverted>
              <Icon name='download' /> Download
            </Button>
          </a>
        </Modal.Actions>
      </Modal>
)

export default LightboxModal