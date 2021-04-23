import React, { KeyboardEvent, useContext, useState } from 'react'

import { Theme, createStyles, makeStyles, Paper } from '@material-ui/core'
import { ScoreContext } from './Context'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16)
      },
      height: 144,
      marginTop: 100,
      position: 'absolute',
      color: '#fff',
      textAlign: 'center'
    },
    letter: {
      animation: 'pulse 0.5s infinite',
      fontFamily: 'Short Stack',
      fontSize: 100
    },
    background: {
      display: 'flex'
    }
  })
)

const getRandomLetter = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 65)

const KeyboardPlay: React.FC = () => {
  const [letter, setLetter] = useState(getRandomLetter)
  const { setErrors, setHits, hits, errors } = useContext(ScoreContext)

  const verifyAndChangeScore = (event: KeyboardEvent<HTMLInputElement>) => {
    const digitedValue = event.key.toUpperCase()

    const newHit = hits + 1
    const newError = errors + 1

    digitedValue === letter ? setHits(newHit) : setErrors(newError)

    setLetter(getRandomLetter())
  }

  const classes = useStyles()

  return (
    <>
      <div
        className={classes.background}
        tabIndex={1}
        onKeyDown={verifyAndChangeScore}
      ></div>
      <div className={classes.root}>
        <span>Press now</span>
        <Paper elevation={3}>
          <div className={classes.letter}>{letter}</div>
        </Paper>
      </div>
    </>
  )
}

export default KeyboardPlay
