// JSON dei giocatori di esempio
const teamsData = {
    "FC Barcelona": [
        { "name": "Lionel Messi", "position": "Forward", "fifa_value": 93, "pes_value": 90 },
        { "name": "Sergio Busquets", "position": "Midfielder", "fifa_value": 87, "pes_value": 84 },
        { "name": "Gerard Piqué", "position": "Defender", "fifa_value": 85, "pes_value": 83 }
    ],
    "Real Madrid": [
        { "name": "Karim Benzema", "position": "Forward", "fifa_value": 89, "pes_value": 86 },
        { "name": "Luka Modric", "position": "Midfielder", "fifa_value": 88, "pes_value": 85 },
        { "name": "Sergio Ramos", "position": "Defender", "fifa_value": 86, "pes_value": 84 }
    ]
};

window.onload = function() {
    const teamSelect = document.getElementById("team-select");
    const playerList = document.querySelector("#player-list tbody");

    // Popola il menu di selezione delle squadre
    for (let team in teamsData) {
        let option = document.createElement("option");
        option.value = team;
        option.textContent = team;
        teamSelect.appendChild(option);
    }

    // Funzione per caricare i giocatori della squadra selezionata
    teamSelect.addEventListener("change", function() {
        const selectedTeam = teamSelect.value;
        const players = teamsData[selectedTeam];
        updatePlayerList(players);
    });

    // Funzione per aggiornare la lista dei giocatori
    function updatePlayerList(players) {
        playerList.innerHTML = ""; // Pulisce la lista precedente
        players.forEach(player => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = player.name;
            row.appendChild(nameCell);

            const positionCell = document.createElement("td");
            positionCell.textContent = player.position;
            row.appendChild(positionCell);

            const fifaValueCell = document.createElement("td");
            fifaValueCell.textContent = player.fifa_value;
            row.appendChild(fifaValueCell);

            const pesValueCell = document.createElement("td");
            pesValueCell.textContent = player.pes_value;
            row.appendChild(pesValueCell);

            playerList.appendChild(row);
        });
    }

    // Carica la lista dei giocatori per la prima squadra (di default)
    teamSelect.value = "FC Barcelona";
    updatePlayerList(teamsData["FC Barcelona"]);
};
