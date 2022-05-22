import React from 'react';

interface Props {
	id: number;
	value: string;
	handleMake(index: number): void;
}

const Square: React.FC<Props> = ({ id, value, handleMake }) => {
	const handleClick = () => {
		handleMake(id);
	}

	return (
		<div className="square" onClick={ handleClick }>
			<span><strong>{ value }</strong></span>
		</div>
	);
}

export default Square;