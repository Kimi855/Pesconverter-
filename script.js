const playerData = [
    {
        name: "Lionel Messi",
        team: "Inter Miami",
        fifaAttributes: {
            offensiveAwareness: 93,
            ballControl: 95,
            dribbling: 96,
            tightPossession: 93,
            finishing: 94,
            placeKicking: 92,
            curl: 89,
            speed: 78,
            acceleration: 85
        }
    },
    {
        name: "Cristiano Ronaldo",
        team: "Al-Nassr",
        fifaAttributes: {
            offensiveAwareness: 92,
            ballControl: 90,
            dribbling: 88,
            tightPossession: 86,
            finishing: 95,
            placeKicking: 84,
            curl: 87,
            speed: 80,
            acceleration: 82
        }
    },
    // Aggiungi altri giocatori qui
];

function searchPlayer() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ""; // Pulisce i risultati precedenti

    const filteredPlayers = playerData.filter(player =>
        player.name.toLowerCase().includes(input) ||
        player.team.toLowerCase().includes(input)
    );

    if (filteredPlayers.length > 0) {
        filteredPlayers.forEach(player => {
            const playerElement = document.createElement('div');
            playerElement.classList.add('player-card');
            playerElement.innerHTML = `
                <h3>${player.name} (${player.team})</h3>
                <p><strong>Attributi FIFA:</strong></p>
                <ul>
                    <li>Consapevolezza Offensiva: ${player.fifaAttributes.offensiveAwareness}</li>
                    <li>Controllo di Palla: ${player.fifaAttributes.ballControl}</li>
                    <li>Dribbling: ${player.fifaAttributes.dribbling}</li>
                    <li>Possesso Stretto: ${player.fifaAttributes.tightPossession}</li>
                    <li>Finalizzazione: ${player.fifaAttributes.finishing}</li>
                    <li>Calci Piazzati: ${player.fifaAttributes.placeKicking}</li>
                    <li>Effetto: ${player.fifaAttributes.curl}</li>
                    <li>Velocità: ${player.fifaAttributes.speed}</li>
                    <li>Accelerazione: ${player.fifaAttributes.acceleration}</li>
                </ul>
            `;
            resultsContainer.appendChild(playerElement);
        });
    } else {
        resultsContainer.innerHTML = "<p>Nessun giocatore trovato.</p>";
    }
}
