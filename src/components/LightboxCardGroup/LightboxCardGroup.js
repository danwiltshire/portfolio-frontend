//@flow
import React from 'react'
import { Card } from 'semantic-ui-react'
import LightboxPreview from '../LightboxPreview'

type Item = {
  Header: string
}

type Props = {
  items: Array<Item>
}

const LightboxCardGroup = (props: Props) => (
  <Card.Group centered>
    {
      props.items.map(item => (
        <LightboxPreview
          key={item.Header}          
          {...item}
        />
      ))
    }
  </Card.Group>
)

export default LightboxCardGroup