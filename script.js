// Funzione per gestire la conversione degli attributi
function convertAttributes() {
    let fifaPlayer = {
        "dribbling": parseFloat(document.getElementById("fifaDribbling").value),
        "shooting": parseFloat(document.getElementById("fifaShooting").value),
        "passing": parseFloat(document.getElementById("fifaPassing").value),
        "defending": parseFloat(document.getElementById("fifaDefending").value),
        "pace": parseFloat(document.getElementById("fifaPace").value),
        "stamina": parseFloat(document.getElementById("fifaStamina").value),
        "aggression": parseFloat(document.getElementById("fifaAggression").value)
    };

    // Formula di conversione semplice per PES21 (potrebbe essere più complessa, ma qui è un esempio)
    let pesPlayer = {
        "dribbling": (fifaPlayer.dribbling * 0.9).toFixed(1),
        "shooting": (fifaPlayer.shooting * 0.95).toFixed(1),
        "passing": (fifaPlayer.passing * 0.85).toFixed(1),
        "defending": (fifaPlayer.defending * 1.1).toFixed(1),
        "pace": (fifaPlayer.pace * 1.2).toFixed(1),
        "stamina": (fifaPlayer.stamina * 0.8).toFixed(1),
        "aggression": (fifaPlayer.aggression * 1.1).toFixed(1)
    };

    // Mostra i risultati della conversione
    document.getElementById("pesDribbling").innerText = pesPlayer.dribbling;
    document.getElementById("pesShooting").innerText = pesPlayer.shooting;
    document.getElementById("pesPassing").innerText = pesPlayer.passing;
    document.getElementById("pesDefending").innerText = pesPlayer.defending;
    document.getElementById("pesPace").innerText = pesPlayer.pace;
    document.getElementById("pesStamina").innerText = pesPlayer.stamina;
    document.getElementById("pesAggression").innerText = pesPlayer.aggression;
}

// Funzione per applicare il comportamento realista dei falli
function realisticFouls() {
    let aggression = parseFloat(document.getElementById("fifaAggression").value);
    let tackling = parseFloat(document.getElementById("fifaTackling").value);
    
    let foulLikelihood = (aggression + tackling) / 2;
    document.getElementById("foulLikelihood").innerText = `Probabilità di fallo: ${foulLikelihood.toFixed(2)}%`;

    if (foulLikelihood > 50) {
        document.getElementById("foulWarning").innerText = "Il giocatore è più incline a fare fallo!";
    } else {
        document.getElementById("foulWarning").innerText = "Il giocatore ha una bassa probabilità di fare fallo.";
    }
}

// Funzione di ricerca squadra
function searchTeam() {
    let teamName = document.getElementById("teamSearch").value;
    document.getElementById("searchResult").innerText = `Risultati per la squadra: ${teamName}`;
}

// Evento di clic per la conversione
document.getElementById("convertButton").addEventListener("click", function() {
    convertAttributes();
    realisticFouls();
});
