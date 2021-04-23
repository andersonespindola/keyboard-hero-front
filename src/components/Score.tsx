import { createStyles, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import { ScoreContext } from './Context'

const useStyles = makeStyles(() =>
  createStyles({
    hits: {
      color: '#00a100'
    },
    errors: {
      color: '#f50057'
    },
    scores: {
      right: '30px',
      position: 'absolute'
    }
  })
)

const Score: React.FC = () => {
  const classes = useStyles()

  const { hits, errors } = useContext(ScoreContext)

  return (
    <div className={classes.scores}>
      <p className={classes.hits}>Acertos: {hits}</p>
      <p className={classes.errors}>Erros: {errors}</p>
    </div>
  )
}

export default Score
