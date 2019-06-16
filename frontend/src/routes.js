import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed.jsx'
import New from './pages/New.jsx'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    )
}

export default Routes