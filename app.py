from flask import Flask, request, jsonify
import pandas as pd
from scipy.stats import linregress
import requests

app = Flask(__name__)

def get_sofifa_data(api_key=None, player_page=1):
    """
    Recupera i dati dei giocatori da Sofifa tramite API, gestendo la paginazione.
    """
    url = "https://api.sofifa.com/api/v1/players"

    headers = {
    "Accept": "application/json"
    }
    if api_key:
    headers["Authorization"] = f"Bearer {api_key}"

    params = {
        "page": player_page,
        "per_page": 100 # Numero massimo per pagina (valore default 20)
    }
    
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()  # Lancia un'eccezione per codici di stato non 2xx

        data = response.json()
        
        players_data = []
        for player in data.get('items', []):
            player_data = {
                'Overall': player['overall'],
                'Pace': player['pace'],
                'Shooting': player['shooting'],
                'Passing': player['passing'],
                'Dribbling': player['dribbling'],
                'Defending': player['defending'],
                'Physical': player['physic'],
                'Crossing': player['crossing'],
                'Finishing': player['finishing'],
                'Heading Accuracy': player['headingaccuracy'],
                'Short Passing': player['shortpassing'],
                'Volleys': player['volleys'],
                'Curve': player['curve'],
                'FK Accuracy': player['fkaccuracy'],
                'Long Passing': player['longpassing'],
                'Ball Control': player['ballcontrol'],
                'Acceleration': player['acceleration'],
                'Sprint Speed': player['sprintspeed'],
                'Agility': player['agility'],
                'Reactions': player['reactions'],
                'Balance': player['balance'],
                'Shot Power': player['shotpower'],
                'Jumping': player['jumping'],
                'Stamina': player['stamina'],
                'Strength': player['strength'],
                'Long Shots': player['longshots'],
                'Aggression': player['aggression'],
                'Interceptions': player['interceptions'],
                'Positioning': player['positioning'],
                'Vision': player['vision'],
                'Penalties': player['penalties'],
                'Composure': player['composure'],
                'Marking': player['marking'],
                'Standing Tackle': player['standingtackle'],
                'Sliding Tackle': player['slidingtackle'],
                'GK Diving': player['gkdiving'],
                'GK Handling': player['gkhandling'],
                'GK Kicking': player['gkkicking'],
                'GK Positioning': player['gkpositioning'],
                'GK Reflexes': player['gkreflexes'],
            }
            players_data.append(player_data)

        df = pd.DataFrame(players_data)
        return df, data.get('totalPages', 1) # Restituisce anche il numero totale di pagine

    except requests.exceptions.RequestException as e:
        print(f"Errore durante la richiesta all'API di Sofifa: {e}")
        return None, None


def perform_regression(df1, df2, col):
    """
    Esegue la regressione lineare tra le colonne di due DataFrame.
    """
    slope, intercept, r_value, p_value, std_err = linregress(df2[col], df1[col])
    return slope, intercept

@app.route('/api/convert', methods=['POST'])
def convert():
    try:
        data = request.get_json()
        if not data or not isinstance(data, dict):
            return jsonify({"error": "Invalid JSON format"}), 400
        # Recupero dati da sofifa
        api_key = data.get("api_key")
        df_fifa = pd.DataFrame()
        player_page = 1
        total_pages = 1
        while player_page <= total_pages:
            new_fifa_df, total_pages = get_sofifa_data(api_key, player_page)
            if new_fifa_df is not None:
                df_fifa = pd.concat([df_fifa, new_fifa_df], ignore_index=True)
            player_page += 1

        if df_fifa.empty:
          return jsonify({"error": "Nessun dato FIFA recuperato dall'API di Sofifa"}), 500

        # Carico dati PES
        df_pes = pd.read_csv('data/stats_pes21.csv')
        converted_stats = df_fifa.copy()
        # Converto le stats
        for col in df_pes.columns:
            if col in df_fifa.columns:
                slope, intercept = perform_regression(df_fifa, df_pes, col)
                converted_stats[col] = df_fifa[col] * slope + intercept
            else:
                print(f"Warning: La colonna {col} non è presente nei dati di FIFA e non verrà convertita.")

        # Restituisco i dati
        return jsonify(converted_stats.to_dict(orient="records"))
    except Exception as e:
        return jsonify({"error": f"Errore durante la conversione: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
