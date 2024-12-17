document.getElementById("convert-btn").addEventListener("click", convertFIFAtoPES);

function convertFIFAtoPES() {
    const fifaData = document.getElementById("fifa-input").value;

    if (!fifaData) {
        alert("Please paste FIFA data to convert!");
        return;
    }

    // Example conversion formula (replace these with real calculations)
    const pesData = `
Offensive Awareness: ${convertAttribute(70)}
Ball Control: ${convertAttribute(75)}
Dribbling: ${convertAttribute(80)}
Tight Possession: ${convertAttribute(78)}
Low Pass: ${convertAttribute(82)}
Lofted Pass: ${convertAttribute(79)}
Finishing: ${convertAttribute(85)}
Heading: ${convertAttribute(70)}
Place Kicking: ${convertAttribute(72)}
Curl: ${convertAttribute(74)}
Speed: ${convertAttribute(90)}
Acceleration: ${convertAttribute(88)}
Kicking Power: ${convertAttribute(84)}
Jump: ${convertAttribute(70)}
Physical Contact: ${convertAttribute(76)}
Balance: ${convertAttribute(78)}
Stamina: ${convertAttribute(82)}
Defensive Awareness: ${convertAttribute(65)}
Ball Winning: ${convertAttribute(66)}
Aggression: ${convertAttribute(68)}
GK Awareness: ${convertGKAttribute(50)}
GK Catching: ${convertGKAttribute(52)}
GK Clearing: ${convertGKAttribute(55)}
GK Reflexes: ${convertGKAttribute(53)}
GK Reach: ${convertGKAttribute(51)}
`;

    document.getElementById("pes-output").textContent = pesData;
}

// Attribute Conversion Functions
function convertAttribute(fifaValue) {
    // Replace this formula with your specific conversion logic
    return Math.floor(fifaValue * 0.9 + 10); // Example: Reducing by 10%
}

function convertGKAttribute(fifaValue) {
    return Math.max(40, Math.floor(fifaValue * 0.8 + 20)); // Ensure min 40
}
