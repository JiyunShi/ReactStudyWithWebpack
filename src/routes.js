import React from 'react'
import { Router, Route } from 'react-router'
import history from './history'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'
import  { Left, Right, Whoops404  } from './components'

const routes = (
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes