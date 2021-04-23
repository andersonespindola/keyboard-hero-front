import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { ScoreTable } from '../../components/ScoreTable'

export const Ranking: React.FC = () => {
  return (
    <div className="background">
      <ScoreTable />
      <Link to={'/'} style={{ right: 10, position: 'absolute', bottom: 0 }}>
        <Button text="Menu" />
      </Link>
    </div>
  )
}
