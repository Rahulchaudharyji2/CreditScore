import React, { useState } from "react";
import { simulateCreditScore } from "../services/api";
import { TextField, Button, Box, Typography, Card, CardContent, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Styled components
const Root = styled('div')({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const CardWrapper = styled(Card)({
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  backgroundColor: '#fff',
  marginTop: '24px',
});

const CardContentWrapper = styled(CardContent)({
  padding: '24px',
});

const Title = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: '600',
  marginBottom: '20px',
  color: '#333',
  textAlign: 'center',
});

const InputField = styled(TextField)({
  marginBottom: '16px',
  width: '100%',
});

const SubmitButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: 'white',
  padding: '10px 20px',
  fontWeight: '600',
  width: '100%',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

const PredictedScore = styled(Typography)({
  marginTop: '16px',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#1976d2',
});

const ErrorText = styled(Typography)({
  marginTop: '16px',
  color: 'red',
});

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CreditSimulation = () => {
  const [formData, setFormData] = useState({
    on_time_payments: "",
    credit_utilization: "",
    total_debt: "",
    credit_accounts: "",
  });

  const [predictedScore, setPredictedScore] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pieData, setPieData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await simulateCreditScore({
        on_time_payments: Number(formData.on_time_payments),
        credit_utilization: Number(formData.credit_utilization),
        total_debt: Number(formData.total_debt),
        credit_accounts: Number(formData.credit_accounts),
      });

      if (response.error) {
        setError(response.error);
      } else {
        setPredictedScore(response.predicted_credit_score);
        setPieData([
          { name: "On-Time Payments", value: Number(formData.on_time_payments) },
          { name: "Credit Utilization", value: Number(formData.credit_utilization) },
          { name: "Total Debt", value: Number(formData.total_debt) },
          { name: "Credit Accounts", value: Number(formData.credit_accounts) },
        ]);
      }
    } catch (err) {
      setError("Failed to connect to API");
    }
    setLoading(false);
  };

  return (
    <Root>
      <Title variant="h4">Credit Score Simulator</Title>
      <CardWrapper>
        <CardContentWrapper>
          <form onSubmit={handleSubmit}>
            <InputField
              label="On-Time Payments"
              type="number"
              name="on_time_payments"
              value={formData.on_time_payments}
              onChange={handleChange}
              variant="outlined"
            />
            <InputField
              label="Credit Utilization (%)"
              type="number"
              name="credit_utilization"
              value={formData.credit_utilization}
              onChange={handleChange}
              variant="outlined"
            />
            <InputField
              label="Total Debt"
              type="number"
              name="total_debt"
              value={formData.total_debt}
              onChange={handleChange}
              variant="outlined"
            />
            <InputField
              label="Credit Accounts"
              type="number"
              name="credit_accounts"
              value={formData.credit_accounts}
              onChange={handleChange}
              variant="outlined"
            />
            <SubmitButton type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Predict Score'}
            </SubmitButton>
          </form>

          {predictedScore && (
            <PredictedScore variant="h6">
              Predicted Credit Score: {predictedScore}
            </PredictedScore>
          )}
          {error && <ErrorText>{error}</ErrorText>}
        </CardContentWrapper>
      </CardWrapper>

      {/* Pie Chart Visualization */}
      {pieData.length > 0 && (
        <CardWrapper>
          <CardContentWrapper>
            <Typography variant="h6" fontWeight="bold" textAlign="center">Credit Factors Breakdown</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContentWrapper>
        </CardWrapper>
      )}
    </Root>
  );
};

export default CreditSimulation;