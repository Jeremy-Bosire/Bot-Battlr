import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, releaseBot, deleteBot }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? <p>No bots enlisted yet.</p> : null}
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onClick={() => releaseBot(bot.id)}
          onDelete={() => deleteBot(bot.id)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;