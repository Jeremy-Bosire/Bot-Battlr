import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {onDelete && (
        <button className="delete-button" onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}>
          Delete
        </button>
      )}
    </div>
  );
}

export default BotCard;