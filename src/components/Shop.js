import React, {useState, useEffect} from 'react';
import '../App.css';

function Shop() {

    const fetchItem = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get')
    }

  return (
    <div >
       <h1>Shop page</h1> 
    </div>
  );
}

export default Shop;
