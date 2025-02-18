import React, { useEffect, useState } from "react";
import { fetchLiveCreditScore } from "../services/api";
import { Card, CardContent, Typography, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";

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
});

const CreditScoreText = styled(Typography)({
  fontSize: '1.6rem',
  fontWeight: '500',
  color: '#1976d2',
});

const InfoText = styled(Typography)({
  fontSize: '1rem',
  color: '#555',
  marginTop: '8px',
});

const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
});

const CreditMonitoring = () => {
  const [creditData, setCreditData] = useState(null);
  const [creditHistory, setCreditHistory] = useState([]);

  useEffect(() => {
    const getCreditData = async () => {
      const data = await fetchLiveCreditScore();
      setCreditData(data);
      if (data) {
        setCreditHistory(prevHistory => [...prevHistory.slice(-4), { time: new Date().toLocaleTimeString(), score: data.creditScore }]);
      }
    };
    getCreditData();

    // Auto-refresh every 10 seconds
    const interval = setInterval(getCreditData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Root>
      <Title variant="h4">Real-Time Credit Monitoring</Title>
      {creditData ? (
        <>
          <CardWrapper>
            <CardContentWrapper>
              <CreditScoreText variant="h5">Current Score: {creditData.creditScore}</CreditScoreText>
              <InfoText>Last Updated: {creditData.lastUpdated}</InfoText>
              <InfoText>Credit Agency: {creditData.agency}</InfoText>
            </CardContentWrapper>
          </CardWrapper>

          {/* Credit Score Trend Line Chart */}
          <CardWrapper>
            <CardContentWrapper>
              <Typography variant="h6" fontWeight="bold" textAlign="center">Credit Score Trend</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={creditHistory}>
                  <XAxis dataKey="time" />
                  <YAxis domain={[600, 850]} />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#1976d2" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContentWrapper>
          </CardWrapper>

          {/* Credit Score Distribution Bar Chart */}
          <CardWrapper>
            <CardContentWrapper>
              <Typography variant="h6" fontWeight="bold" textAlign="center">Credit Score Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={creditHistory}>
                  <XAxis dataKey="time" />
                  <YAxis domain={[600, 850]} />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Tooltip />
                  <Bar dataKey="score" fill="#1e88e5" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </CardContentWrapper>
          </CardWrapper>
        </>
      ) : (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      )}
    </Root>
  );
};

export default CreditMonitoring;