import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Register } from '../../components/Register'

export const Score: React.FC = () => {
  return (
    <div className="background">
      <Register />
      <Link to={'/'} style={{ right: 10, position: 'absolute', bottom: 0 }}>
        <Button text="Menu" />
      </Link>
    </div>
  )
}
