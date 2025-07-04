import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type CardDisplayProps = {
	card: string;
	onClick?: () => void;
	scale?: number; // new optional prop
	style?: React.CSSProperties; // new optional prop for custom styles
};

function CardDisplay({ card, onClick, scale = 1, style }: CardDisplayProps) {
	const cardUrl = useBaseUrl(`/img/cards/${card}.png`);
	
	return (
		<img
			src={cardUrl}
			alt={card}
			onClick={onClick}
			style={{
				position: 'absolute',
				width: `${scale * 100}%`,
				height: `${scale * 100}%`,
				backfaceVisibility: 'hidden',
				borderRadius: 8,
				objectFit: 'cover',
				border: '1px solid #ccc',
				cursor: onClick ? 'pointer' : 'default',
				...style,
			}}
		/>
	);
}

export default CardDisplay;
