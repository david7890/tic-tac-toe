import React, {useState} from 'react'
import Board from './Board'
import { calculateWinner } from '../helper'

export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const xO = xIsNext ? "X" : "O"

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        const current = historyPoint[stepNumber]
        const squares = [...current]
        //return si gana  o esta ocupado
        if(winner || squares[i]) return
        //select the square
        squares[i] = xO
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (step) =>{
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () => {
        history.map((step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to start"
            return(
                <li key={move}>
                    <button onClick={ () => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    }

    return(
        <>
            <h1>React Tic Tac Toe -with Hooks</h1>
            <Board squares={history[stepNumber]} onClick = {handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>history</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? "Winner: " + winner : "Next Player:" + xO}</h3>
            </div>
        </>
    )
}

export default Game
