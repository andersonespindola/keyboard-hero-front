import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { GeneratorContext } from './components/Context'

import { Game } from './pages/Game/Game'
import { Home } from './pages/Home/Home'
import { Score } from './pages/Score/Score'
import { Ranking } from './pages/Ranking/Ranking'

/**
 * Enabled routes.
 */
export function Routes() {
  return (
    <Router>
      <Switch>
        <GeneratorContext>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/score" component={Score} />
          <Route path="/ranking" component={Ranking} />
        </GeneratorContext>
      </Switch>
    </Router>
  )
}
