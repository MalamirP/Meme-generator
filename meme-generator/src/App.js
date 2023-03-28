import React from 'react';
import Header from './Componets/Header';
import Meme from './Componets/Meme';
import Star from './Componets/Star';

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    })
    )
  }

  return (
    <div className="App">
      <Header />
      <Meme />
      <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
    </div>
  );
}

export default App;
