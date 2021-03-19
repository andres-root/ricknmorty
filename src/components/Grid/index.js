import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';

import { GridContainer } from './styles';


const Grid = () => {
  const [items, setItems] = useState([]);

  const randomNumber = (min, max) => {
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
  };
  
  const fetchData = useCallback(async (idList) => {
    const SERVER = 'https://rickandmortyapi.com/api/character';
    const URI = `${SERVER}/${idList}`;

    const data = await fetch(URI)
      .then(response => response.json())
      .then((data) => {
        setItems(data);
      })  
      .catch((error) => {
        console.log(error);
      });
    
    return data;
  });

  const generateIds = () => {
    const idSet = new Set();
    
    while (idSet.size < 20) {
      idSet.add(randomNumber(1, 671));
    }

    return Array.from(idSet).join(',');
  };

  useEffect(() => {
    const idList = generateIds();
    fetchData(idList);
  }, []);

  console.log(items);

	return (
		<GridContainer>
      {items && items.length > 0 && items.map(card => (
        <Card data={card} />
      ))}
		</GridContainer>
	);
};

export default Grid;
