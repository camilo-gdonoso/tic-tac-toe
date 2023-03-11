import { WINNER_COMBOS } from "../utils/constants"
export const checkWinner = (boardToCheck) => {
    // revisar todas las combinaciones ganadoras para ver si x u O gano
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // miro si en el cero hay una X o una O
        boardToCheck[a] === boardToCheck[b] && // si en el 
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }