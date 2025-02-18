import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Sample training data
data = {
    "on_time_payments": [50, 100, 200, 250, 300],
    "credit_utilization": [80, 60, 40, 30, 20],  # Percentage
    "total_debt": [50000, 40000, 30000, 20000, 10000],
    "credit_accounts": [2, 3, 5, 6, 8],
    "credit_score": [580, 640, 700, 750, 800],
}

df = pd.DataFrame(data)
X = df.drop(columns=["credit_score"])
y = df["credit_score"]

# Train model
model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, "credit_score_model.pkl")
print("Model trained and saved!")
