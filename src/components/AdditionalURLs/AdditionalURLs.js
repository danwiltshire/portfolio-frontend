//@flow
import * as React from 'react'
import {Button, Icon} from 'semantic-ui-react'

type UrlDetails = {
    URL: string,
    Color: string,
    Icon: string,
    Name: string
}

type Props = {
    AdditionalURLs: Array<UrlDetails>
}

const AdditionalURLs = (props: Props) => (
    props.AdditionalURLs.map<React.Node>(aUrl => (
        <a href={aUrl.URL} key={aUrl.URL}>
            <Button color={aUrl.Color} inverted>
                <Icon name={aUrl.Icon} /> {aUrl.Name}
            </Button>
        </a>
    ))
)

export default AdditionalURLs