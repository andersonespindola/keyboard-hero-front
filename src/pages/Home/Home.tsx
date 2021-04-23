import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { ScoreContext } from '../../components/Context'

import './styles.css'

export const Home: React.FC = () => {
  const { setHits, setErrors } = useContext(ScoreContext)
  setHits(0)
  setErrors(0)

  return (
    <div className="App">
      <Link to={'/game'}>
        <Button text="Jogar" />
      </Link>
      <Link to={'/ranking'}>
        <Button text="Ranking" />
      </Link>
    </div>
  )
}
