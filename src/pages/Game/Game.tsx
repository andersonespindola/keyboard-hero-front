import React from 'react'

import './styles.css'
import Counter from '../../components/Counter'
import KeyboardPlay from '../../components/KeyboardPlay'
import Score from '../../components/Score'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

export const Game: React.FC = () => {
  return (
    <div className="background">
      <Counter />
      <Score></Score>
      <KeyboardPlay />
      <Link to={'/'} style={{ right: 10, position: 'absolute', bottom: 0 }}>
        <Button text="Menu" />
      </Link>
    </div>
  )
}
