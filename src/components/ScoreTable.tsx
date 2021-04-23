import React, { useEffect, useState } from 'react'
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import { Player } from '../model/Player'

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign: 'center'
    },
    body: {
      fontSize: 14,
      textAlign: 'center'
    }
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
})

export const ScoreTable = () => {
  const classes = useStyles()

  const [rows, setRows] = useState([])

  useEffect(() => {
    const createRankingData = async () => {
      const response = await axios.get('http://localhost:4000/player')

      if (!response.data) return []

      const data = response.data.map((player: Player) => {
        const { name, score, fails } = player
        return { name, score, fails }
      })

      setRows(data)
    }

    createRankingData()
  }, [])

  const constructRows = rows.length ? (
    rows.map((row: Player, index: number) => (
      <StyledTableRow key={index}>
        <StyledTableCell>{index + 1}</StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell>{row.score}</StyledTableCell>
        <StyledTableCell>{row.fails}</StyledTableCell>
      </StyledTableRow>
    ))
  ) : (
    <StyledTableRow>
      <StyledTableCell colSpan={4}>
        Não foram encontrados registros
      </StyledTableCell>
    </StyledTableRow>
  )

  return (
    <TableContainer
      component={Paper}
      style={{ width: 800, marginTop: 20, marginBottom: 20 }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Posição</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Acertos</StyledTableCell>
            <StyledTableCell>Falhas</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{constructRows}</TableBody>
      </Table>
    </TableContainer>
  )
}
