import React from 'react';
import { useSelector } from 'react-redux';
import './home.css';

function Home() {
  const name = useSelector((state) => state.users.user.name);
  return (
    <div className="home">
      <h2 className="home__title">
        {name !== undefined ? `Привет, ${name}!` : 'Привет, гость!'}
      </h2>
    </div>
  );
}

export default Home;
