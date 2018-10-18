import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Home, About, Events, Products, Contact, WHoops404 } from './pages'
import '../stylesheets/pages.scss'
import '../stylesheets/menus.scss'

function TestRouter() {
    return (
        <HashRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/events" component={Events} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contact} />
                    <Route component={WHoops404} />
                </Switch>
            </div>
        </HashRouter>
    )
}

export default TestRouter;