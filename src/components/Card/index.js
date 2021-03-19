import React from 'react';

import { CardContainer, Atribute, Avatar, Name } from './styles';


const Card = ({
	data
}) => {
	const { 
		image,
		name,
		status,
		species,
		gender,
		location,
	 } = data;
	return (
		<CardContainer>
			<Avatar>
				<img src={image} />
			</Avatar>
			<Name>{name}</Name>
			<Atribute>{name}</Atribute>
			<Atribute>{status}</Atribute>
			<Atribute>{species}</Atribute>
			<Atribute>{gender}</Atribute>
			<Atribute>{location.name}</Atribute>
		</CardContainer>
	);
};

export default Card;
