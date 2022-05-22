import React from 'react';
import { useState } from 'react';

import Square from './Square';

const WINNING_COMBINATIONS: (number[])[] = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 4, 6],
	[2, 5, 8],
	[3, 4, 5],
	[6, 7, 8]
];

let board: string[] = ["", "", "", "", "", "", "", "", ""];

const Game: React.FC = () => {
	const [turn, setTurn] = useState<string>("X");
	const [winner, setWinner] = useState<string | null>(null);

	const newGame = (): void => {
		setTurn("X");
		setWinner(null);
		board = board.map(item => "");
	}

	const handleMake = (index: number): void => {
		if (!winner && board[index] === "") {
			board[index] = turn;
			checkWinner();
			turn === "X" ? setTurn("O") : setTurn("X");
		}
	}

	const checkWinner = (): void => {
		if (!board.includes("")) {
			setWinner("Tie")
		}
		WINNING_COMBINATIONS.forEach((combination) => {
			const [a, b, c] = combination;
			if (!winner && board[a] && board[a] === board[b] && board[a] === board[c]) {
				setWinner(board[a]);
			}
		})
	}

	return (
		<div className="game">
			<button className="new-game-button" onClick={ () => newGame() }>New Game</button>
			{!winner && <p className="message">Turn: <strong>{ turn }</strong></p>}
			{winner === "Tie" && <p className="message">{ winner }!</p>}
			{winner && winner !== "Tie" && <p className="message"><strong>{ winner }</strong> is the winner!</p>}
			<div className="board">
				{board.map((value, index) => (
					<Square
						key={ index }
						id={ index }
						value={ value }
						handleMake={ handleMake }
					/>
				))}
			</div>
		</div>
	);
}

export default Game;