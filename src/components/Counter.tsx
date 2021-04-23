import React, { useEffect, useState } from 'react'
import { Container, Grid, LinearProgress } from '@material-ui/core'
import { useHistory } from 'react-router'

const Counter: React.FC = () => {
  const TIMETOPLAY = 60
  const MIN = 0
  const MAX = TIMETOPLAY

  const [seconds, setSeconds] = useState(TIMETOPLAY)

  const normalize = (value: number) => ((value - MIN) * 100) / (MAX - MIN)

  const history = useHistory()

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(interval)
        return history.push('/score')
      }
      setSeconds(seconds - 1)
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <Grid item xs={12} sm={6} className="counter">
      <Container>
        <div className="time-left">Tempo restante: {seconds}</div>
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={normalize(seconds)}
        />
      </Container>
    </Grid>
  )
}

export default Counter
