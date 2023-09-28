import React, { useState } from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddCard = () => {
    if (newTitle.trim() !== '' && newContent.trim() !== '') {
      setCards((prevCards) => [...prevCards, { title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setNewContent(event.target.value);
  };

  return (
    <div>
      <h2>Card List</h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
      <div>
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          placeholder="Enter card title"
        />
        <input
          type="text"
          value={newContent}
          onChange={handleContentChange}
          placeholder="Enter card content"
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
};

export default CardList;