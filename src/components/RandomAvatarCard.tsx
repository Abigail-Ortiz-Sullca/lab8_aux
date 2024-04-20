import React, { useEffect, useState } from 'react';
import '../styles.css'; // Importa los estilos globales

const RandomAvatarCard: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    fetch('https://api.minimalavatars.com/avatar/random/png')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setAvatarUrl(url);
      });
  }, []);

  return (
    <div className="card">
      <div className="image-section">
        {avatarUrl && <img className="avatar-image" src={avatarUrl} alt="Random Avatar" />}
      </div>
      <div className="description-section">
        <p className="description">Descripción: Colocar alguna descripción para los personajes</p>
      </div>
    </div>
  );
};

export default RandomAvatarCard;


