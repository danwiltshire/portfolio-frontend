import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import PhotographyGallery from '../PhotographyGallery'

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/gallery/photography" exact component={PhotographyGallery} />
        </div>
    </Router>
)

export default AppRouter