// Struttura dati per continenti, campionati e squadre
const data = {
    "Europe": {
        "Premier League": ["Arsenal", "Manchester City", "Chelsea"],
        "Serie A": ["Juventus", "Inter", "AC Milan"],
        "La Liga": ["Real Madrid", "Barcelona", "Atletico Madrid"]
    },
    "South America": {
        "Brasileirão A": ["Flamengo", "Palmeiras", "Santos"],
        "Libertadores": ["River Plate", "Boca Juniors", "Gremio"]
    },
    "Asia": {
        "Saudi League": ["Al-Nassr", "Al-Hilal", "Al-Ittihad"],
        "J1 League": ["Kawasaki Frontale", "Urawa Red Diamonds", "Vissel Kobe"]
    }
};

// Mostra i campionati per continente
function showChampionships(continent) {
    const championshipList = document.getElementById('championship-list');
    championshipList.innerHTML = "";

    // Aggiunge i campionati al DOM
    if (data[continent]) {
        for (const championship in data[continent]) {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = championship;
            button.onclick = () => showTeams(continent, championship);
            li.appendChild(button);
            championshipList.appendChild(li);
        }
    }

    // Nasconde i continenti e mostra i campionati
    document.getElementById('continents').style.display = 'none';
    document.getElementById('championships').style.display = 'block';
}

// Mostra le squadre per campionato
function showTeams(continent, championship) {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = "";

    // Aggiunge le squadre al DOM
    if (data[continent] && data[continent][championship]) {
        data[continent][championship].forEach(team => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = team;
            button.onclick = () => showPlayers(team);
            li.appendChild(button);
            teamList.appendChild(li);
        });
    }

    // Nasconde i campionati e mostra le squadre
    document.getElementById('championships').style.display = 'none';
    document.getElementById('teams').style.display = 'block';
}

// Mostra i giocatori per squadra
function showPlayers(team) {
    const players = {
        "Arsenal": ["Player 1", "Player 2", "Player 3"],
        "Juventus": ["Player A", "Player B", "Player C"],
        "Flamengo": ["Player X", "Player Y", "Player Z"]
    };

    const playerInfo = document.getElementById('player-info');
    playerInfo.innerHTML = "";

    // Aggiunge i giocatori al DOM
    if (players[team]) {
        players[team].forEach(player => {
            const p = document.createElement('p');
            p.textContent = player;
            playerInfo.appendChild(p);
        });
    }

    // Nasconde le squadre e mostra i giocatori
    document.getElementById('teams').style.display = 'none';
    document.getElementById('players').style.display = 'block';
}
