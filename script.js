function showTeams(championship) {
    const teams = {
        "Premier League": ["Arsenal", "Manchester City", "Chelsea"],
        "Serie A": ["Juventus", "Inter", "AC Milan"],
        "La Liga": ["Real Madrid", "Barcelona", "Atletico Madrid"],
        "Bundesliga": ["Bayern Munich", "Borussia Dortmund", "RB Leipzig"],
        "Saudi League": ["Al-Nassr", "Al-Hilal", "Al-Ittihad"]
    };

    const teamList = document.getElementById('team-list');
    teamList.innerHTML = "";

    if (teams[championship]) {
        teams[championship].forEach(team => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = team;
            button.onclick = () => showPlayers(team);
            li.appendChild(button);
            teamList.appendChild(li);
        });
    }

    document.getElementById('championships').style.display = 'none';
    document.getElementById('teams').style.display = 'block';
}

function showPlayers(team) {
    const players = {
        "Arsenal": ["Player 1", "Player 2", "Player 3"],
        "Juventus": ["Player A", "Player B", "Player C"],
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

    document.getElementById('teams').style.display = 'none';
    document.getElementById('players').style.display = 'block';
}
