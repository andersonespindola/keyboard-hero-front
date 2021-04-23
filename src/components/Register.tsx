import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import { FormControl, Input, InputLabel } from '@material-ui/core'

import { ScoreContext } from './Context'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 50
  },
  media: {
    height: 140
  },
  input: {
    marginLeft: 15,
    width: '88%'
  },
  green: {
    color: '#0a9105'
  },
  red: {
    color: '#c93030'
  }
})

const saveScore = async (playerName: string, hits: number, errors: number) => {
  const data = { name: playerName, score: hits, fails: errors }
  await axios.post('http://localhost:4000/player', data)
}

export const Register: React.FC = () => {
  const classes = useStyles()

  const { hits, errors } = useContext(ScoreContext)

  const [playerName, setPlayerName] = useState('')

  const history = useHistory()

  return (
    <form>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Obrigado por jogar!
            </Typography>
            <Typography className={classes.green}>Acertos: {hits}</Typography>
            <Typography className={classes.red}>Erros: {errors}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Se você quiser deixar registrado sua pontuação insira seu nome
              abaixo.
            </Typography>
          </CardContent>
        </CardActionArea>
        <FormControl className={classes.input}>
          <InputLabel htmlFor="my-input">Nome do jogador</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={e => setPlayerName(e.currentTarget.value)}
          />
        </FormControl>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={async () => {
              await saveScore(playerName, hits, errors)
              history.push('/ranking')
            }}
          >
            Adicionar
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => history.push('/ranking')}
          >
            Não adicionar
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
