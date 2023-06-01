import React, { useState, useEffect } from 'react';
import "./App.css"

const MemeCard = ({ meme }) => {
  return (
    <div className= "MemeCard">
      <img src={meme.url} alt={meme.name} />
      <h3>{meme.name}</h3>
    </div>
  );
};

function App() {
  const [memes, setMemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
      });
  }, []);

const handleSearch = (event) => {
  setSearchTerm(event.target.value)
}

const filteredMemes = memes.filter((meme) =>
meme.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="App">
      <input type ="text" placeholder="search memes" value={searchTerm} onChange={handleSearch} />
      {filteredMemes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}

export default App;
