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

function loadLeagues(continent) {
    const leagueMenu = document.getElementById('league-menu');
    const continentMenu = document.getElementById('continent-menu');
    const leaguesList = document.getElementById('leagues');
    
    continentMenu.classList.add('hidden');
    leagueMenu.classList.remove('hidden');
    
    leaguesList.innerHTML = '';
    const leagues = data[continent];
    
    for (const league in leagues) {
        const li = document.createElement('li');
        li.textContent = league;
        li.onclick = () => loadTeams(league, continent);
        leaguesList.appendChild(li);
    }
}

function loadTeams(league, continent) {
    const teamMenu = document.getElementById('team-menu');
    const leagueMenu = document.getElementById('league-menu');
    const teamsList = document.getElementById('teams');
    
    leagueMenu.classList.add('hidden');
    teamMenu.classList.remove('hidden');
    
    teamsList.innerHTML = '';
    const teams = data[continent][league];
    
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

function goBack(menu) {
    const playerData = document.getElementById('player-data');
    const continentMenu = document.getElementById('continent-menu');
    const leagueMenu = document.getElementById('league-menu');
    const teamMenu = document.getElementById('team-menu');
    const playerMenu = document.getElementById('player-menu');
    
    if (menu === 'continent') {
        continentMenu.classList.remove('hidden');
        leagueMenu.classList.add('hidden');
    } else if (menu === 'league') {
        leagueMenu.classList.remove('hidden');
        teamMenu.classList.add('hidden');
    } else if (menu === 'team') {
        teamMenu.classList.remove('hidden');
        playerMenu.classList.add('hidden');
    } else if (menu === 'player') {
        playerData.classList.add('hidden');
        playerMenu.classList.remove('hidden');
    }
}
