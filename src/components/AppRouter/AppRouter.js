import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import PhotographyGallery from '../PhotographyGallery'
import UIDesignsGallery from '../UIDesignsGallery'

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/index.html" exact component={Home} />
            <Route path="/gallery/photography" exact component={PhotographyGallery} />
            <Route path="/gallery/uidesigns" exact component={UIDesignsGallery} />
        </div>
    </Router>
)

export default AppRouter