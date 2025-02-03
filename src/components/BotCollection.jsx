import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClick={() => enlistBot(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
