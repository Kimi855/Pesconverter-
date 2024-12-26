function convertStats() {
    const apiKey = document.getElementById('apiKey').value;
    fetch('/api/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({"api_key": apiKey})
      })
      .then(response => response.json())
      .then(data => {
        if (data.error){
          console.error('Errore durante la conversione:', data.error);
          document.getElementById('resultArea').textContent = `Errore: ${data.error}`;
        } else {
          console.log('Statistiche convertite:', data);
            //Mostra i dati nella pagina
            const resultArea = document.getElementById('resultArea');
            resultArea.innerHTML = ''; // Clear previous content
            data.forEach(player => {
                const playerDiv = document.createElement('div');
                playerDiv.innerHTML = JSON.stringify(player)
                resultArea.appendChild(playerDiv)
            });

          }

      })
      .catch(error => {
          console.error('Errore durante la fetch:', error);
          document.getElementById('resultArea').textContent = `Errore durante la richiesta al server: ${error}`
      });
  }
