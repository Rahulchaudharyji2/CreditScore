from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 
model = joblib.load("credit_score_model.pkl")

@app.route("/predict-score", methods=["POST"])
def predict_score():
    try:
        data = request.get_json()
        features = np.array([
            data["on_time_payments"],
            data["credit_utilization"],
            data["total_debt"],
            data["credit_accounts"],
        ]).reshape(1, -1)

        predicted_score = model.predict(features)[0]
        return jsonify({"predicted_credit_score": round(predicted_score, 2)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
