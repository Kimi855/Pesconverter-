const data = {
    "Europe": {
        "Premier League": ["Liverpool", "Manchester United"],
        "La Liga": ["Real Madrid", "Barcelona"],
        "Bundesliga": ["Bayern Munich", "Borussia Dortmund"]
    },
    "South America": {
        "Brazilian Serie A": ["Flamengo", "Palmeiras"],
        "Argentine Primera Division": ["Boca Juniors", "River Plate"]
    },
    "Asia": {
        "Saudi Pro League": ["Al Nassr", "Al Hilal"],
        "J1 League": ["Kashima Antlers", "Urawa Red Diamonds"]
    }
};

const players = {
    "Liverpool": ["Mohamed Salah", "Virgil van Dijk"],
    "Manchester United": ["Bruno Fernandes", "Marcus Rashford"],
    "Real Madrid": ["Karim Benzema", "Vinicius Jr."],
    "Barcelona": ["Lionel Messi", "Gerard Pique"],
    "Flamengo": ["Gabigol", "Arrascaeta"],
    "Palmeiras": ["Dudu", "Rafael Vega"],
    "Al Nassr": ["Cristiano Ronaldo", "Talisca"],
    "Al Hilal": ["André Carrillo", "Salem Al-Dawsari"]
};

function loadChampionships(continent) {
    const championshipMenu = document.getElementById('championship-menu');
    const continentsMenu = document.getElementById('continent-menu');
    const championshipsList = document.getElementById('championships');
    
    continentsMenu.classList.add('hidden');
    championshipMenu.classList.remove('hidden');
    
    championshipsList.innerHTML = '';
    const championships = data[continent];
    
    for (const championship in championships) {
        const li = document.createElement('li');
        li.textContent = championship;
        li.onclick = () => loadTeams(championship, continent);
        championshipsList.appendChild(li);
    }
}

function loadTeams(championship, continent) {
    const teamMenu = document.getElementById('team-menu');
    const championshipMenu = document.getElementById('championship-menu');
    const teamsList = document.getElementById('teams');
    
    championshipMenu.classList.add('hidden');
    teamMenu.classList.remove('hidden');
    
    teamsList.innerHTML = '';
    const teams = data[continent][championship];
    
    for (const team of teams) {
        const li = document.createElement('li');
        li.textContent = team;
        li.onclick = () => loadPlayers(team);
        teamsList.appendChild(li);
    }
}

function loadPlayers(team) {
    const playerMenu = document.getElementById('player-menu');
    const teamMenu = document.getElementById('team-menu');
    const playersList = document.getElementById('players');
    
    teamMenu.classList.add('hidden');
    playerMenu.classList.remove('hidden');
    
    playersList.innerHTML = '';
    const playerNames = players[team];
    
    for (const player of playerNames) {
        const li = document.createElement('li');
        li.textContent = player;
        li.onclick = () => showPlayerData(player);
        playersList.appendChild(li);
    }
}

function showPlayerData(player) {
    const playerData = document.getElementById('player-data');
    const playerMenu = document.getElementById('player-menu');
    const playerInfo = document.getElementById('player-info');
    
    playerMenu.classList.add('hidden');
    playerData.classList.remove('hidden');
    
    playerInfo.innerHTML = `
        <p>Name: ${player}</p>
        <p>Age: 28</p>
        <p>Height: 1.75m</p>
        <p>Weight: 70kg</p>
        <p>Position: Forward</p>
    `;
}

function goBack() {
    const playerData = document.getElementById('player-data');
    const continentMenu = document.getElementById('continent-menu');
    
    playerData.classList.add('hidden');
    continentMenu.classList.remove('hidden');
}
