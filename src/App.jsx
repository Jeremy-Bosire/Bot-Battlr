import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(botId) {
    setArmy(army.filter((bot) => bot.id !== botId));
  }

  function deleteBot(botId) {
    fetch(`http://localhost:3000/bots/${botId}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botId));
        setArmy(army.filter((bot) => bot.id !== botId));
      });
  }

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} releaseBot={releaseBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
