import React from 'react'

import Fab from '@material-ui/core/Fab'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import StarIcon from '@material-ui/icons/Star'

export interface Props {
  text: string
}

const getIconButton = (text: string) => {
  if (text === 'Jogar') return <SportsEsportsIcon style={{ marginRight: 5 }} />
  if (text === 'Ranking')
    return <StarIcon style={{ marginRight: 5 }}></StarIcon>
  if (text === 'Menu') return <StarIcon style={{ marginRight: 5 }}></StarIcon>
}

const Button: React.FC<Props> = ({ text }) => {
  const buttonIcon = getIconButton(text)

  return (
    <div style={{ marginBottom: 10 }}>
      <Fab variant="extended">
        {buttonIcon}
        {text}
      </Fab>
    </div>
  )
}

export default Button
