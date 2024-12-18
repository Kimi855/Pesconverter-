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
];

function searchPlayer() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ""; // Clear previous results

    const filteredPlayers = playerData.filter(player => 
        player.name.toLowerCase().includes(input) || 
        player.team.toLowerCase().includes(input)
    );

    if (filteredPlayers.length > 0) {
        filteredPlayers.forEach(player => {
            const pesAttributes = convertToPES(player.fifaAttributes);
            const playerElement = document.createElement('div');
            playerElement.innerHTML = `
                <h3>${player.name} (${player.team})</h3>
                <p><strong>Converted PES Attributes:</strong></p>
                <ul>
                    <li>Offensive Awareness: ${pesAttributes.offensiveAwareness}</li>
                    <li>Ball Control: ${pesAttributes.ballControl}</li>
                    <li>Dribbling: ${pesAttributes.dribbling}</li>
                    <li>Tight Possession: ${pesAttributes.tightPossession}</li>
                    <li>Finishing: ${pesAttributes.finishing}</li>
                    <li>Place Kicking: ${pesAttributes.placeKicking}</li>
                    <li>Curl: ${pesAttributes.curl}</li>
                    <li>Speed: ${pesAttributes.speed}</li>
                    <li>Acceleration: ${pesAttributes.acceleration}</li>
                </ul>
            `;
            resultsContainer.appendChild(playerElement);
        });
    } else {
        resultsContainer.innerHTML = "<p>No players found.</p>";
    }
}

function convertToPES(fifaAttributes) {
    return {
        offensiveAwareness: Math.round(fifaAttributes.offensiveAwareness * 0.95),
        ballControl: Math.round(fifaAttributes.ballControl * 0.98),
        dribbling: Math.round(fifaAttributes.dribbling * 0.97),
        tightPossession: Math.round(fifaAttributes.tightPossession * 0.96),
        finishing: Math.round(fifaAttributes.finishing * 0.94),
        placeKicking: Math.round(fifaAttributes.placeKicking * 0.92),
        curl: Math.round(fifaAttributes.curl * 0.93),
        speed: Math.round(fifaAttributes.speed * 0.90),
        acceleration: Math.round(fifaAttributes.acceleration * 0.92)
    };
}
