import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Feed from './pages/feed/Feed'
import New from  './pages/new/New'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Feed} />
            <Route path='/new' component={New} />

        </Switch>
    )
}