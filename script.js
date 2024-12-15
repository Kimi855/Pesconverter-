const fifaToPesConversion = {
  // Un esempio di mappatura per la conversione
  "overall": (fifaValue) => Math.round(fifaValue * 0.8), // esempio di conversione (da FIFA a PES)
  "pace": (fifaValue) => Math.round(fifaValue * 0.85),
  "shooting": (fifaValue) => Math.round(fifaValue * 0.75),
  "passing": (fifaValue) => Math.round(fifaValue * 0.78),
  "dribbling": (fifaValue) => Math.round(fifaValue * 0.82),
  "defending": (fifaValue) => Math.round(fifaValue * 0.70),
  "physical": (fifaValue) => Math.round(fifaValue * 0.80)
};

// Simuliamo un database di giocatori FIFA per esempio
const fifaDatabase = {
  "1": { name: "Lionel Messi", overall: 93, pace: 85, shooting: 89, passing: 87, dribbling: 95, defending: 36, physical: 60, team: "Altro" },
  "2": { name: "Cristiano Ronaldo", overall: 92, pace: 86, shooting: 91, passing: 83, dribbling: 87, defending: 35, physical: 75, team: "Juventus" },
  "3": { name: "Neymar Jr", overall: 91, pace: 90, shooting: 86, passing: 83, dribbling: 92, defending: 36, physical: 61, team: "PSG" }
};

// Funzione per convertire un giocatore FIFA a PES21
function convertPlayer() {
  const fifaId = document.getElementById("fifaPlayerId").value;
  const player = fifaDatabase[fifaId];
  
  if (!player) {
    alert("Giocatore non trovato.");
    return;
  }

  // Conversione delle statistiche
  const pesPlayer = {
    name: player.name,
    overall: fifaToPesConversion["overall"](player.overall),
    pace: fifaToPesConversion["pace"](player.pace),
    shooting: fifaToPesConversion["shooting"](player.shooting),
    passing: fifaToPesConversion["passing"](player.passing),
    dribbling: fifaToPesConversion["dribbling"](player.dribbling),
    defending: fifaToPesConversion["defending"](player.defending),
    physical: fifaToPesConversion["physical"](player.physical)
  };

  // Mostriamo i risultati
  document.getElementById("pesName").textContent = "Nome: " + pesPlayer.name;
  document.getElementById("pesAttributes").textContent = `Overall: ${pesPlayer.overall} | Pace: ${pesPlayer.pace} | Shooting: ${pesPlayer.shooting} | Passing: ${pesPlayer.passing} | Dribbling: ${pesPlayer.dribbling} | Defending: ${pesPlayer.defending} | Physical: ${pesPlayer.physical}`;

  // Mostrare la sezione con il risultato
  document.getElementById("result").style.display = "block";
}
