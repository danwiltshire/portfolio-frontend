import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import BigKahunaBurger from '../BigKahunaBurger'
import Photographs from '../Photographs'

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={BigKahunaBurger} />
            <Route path="/gallery/photos" exact component={Photographs} />
        </div>
    </Router>
)

export default AppRouter
