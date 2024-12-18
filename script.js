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

// Funzione per mostrare i campionati
function showChampionships(continent) {
    const championshipList = document.getElementById('championship-list');
    championshipList.innerHTML = "";

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

    toggleSections('championships');
}

// Funzione per mostrare le squadre
function showTeams(continent, championship) {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = "";

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

    toggleSections('teams');
}

// Funzione per mostrare i giocatori
function showPlayers(team) {
    const players = {
        "Arsenal": ["Player 1", "Player 2", "Player 3"],
        "Juventus": ["Player A", "Player B", "Player C"],
        "Flamengo": ["Player X", "Player Y", "Player Z"]
    };

    const playerInfo = document.getElementById('player-info');
    playerInfo.innerHTML = "";

    if (players[team]) {
        players[team].forEach(player => {
            const p = document.createElement('p');
            p.textContent = player;
            playerInfo.appendChild(p);
        });
    }

    toggleSections('players');
}

// Funzione per tornare al menu precedente
function goBack(previousSection) {
    toggleSections(previousSection);
}

// Funzione per gestire la visibilità delle sezioni
function toggleSections(visibleSection) {
    const sections = ['continents', 'championships', 'teams', 'players'];
    sections.forEach(section => {
        document.getElementById(section).style.display = section === visibleSection ? 'block' : 'none';
    });
}
