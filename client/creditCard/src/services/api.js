import axios from "axios";

const BASE_URL = "https://creditscorebackened.onrender.com/api";  // Node.js API
const ML_API_URL = "https://creditscoremlmodel.onrender.com";   // Flask ML API

// Fetch real-time credit score
export const fetchCreditScore = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fetch-credit-score`);
    return response.data;
  } catch (error) {
    console.error("Error fetching credit score:", error);
    return null;
  }
};

// Fetch predicted credit score from ML API
export const simulateCreditScore = async (formData) => {
  try {
    const response = await axios.post(`${ML_API_URL}/predict-score`, formData);
    return response.data;
  } catch (error) {
    console.error("Error predicting credit score:", error.response?.data || error.message);
    return { error: "Prediction failed" };
  }
};
// Fetch real-time credit score from Experian API (Mocked)
export const fetchLiveCreditScore = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/live-credit-score`);
      return response.data;
    } catch (error) {
      console.error("Error fetching live credit score:", error);
      return null;
    }
  };
  
  // Fetch AI-driven personalized action plan
  export const fetchPersonalizedPlan = async (creditScore) => {
    try {
      const response = await axios.post(`${BASE_URL}/personalized-plan`, { creditScore });
      return response.data;
    } catch (error) {
      console.error("Error fetching personalized plan:", error);
      return null;
    }
  };
  
  // Fetch fraud alerts
 /* export const fetchFraudAlerts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/fraud-alerts`);
      return response.data;
    } catch (error) {
      console.error("Error fetching fraud alerts:", error);
      return null;
    }
  };
  */
  export const fetchAlerts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/alerts`);
      return response.data;
    } catch (error) {
      console.error("Error fetching alerts:", error);
      return [];
    }
  };
