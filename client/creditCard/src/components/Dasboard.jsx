import React, { useEffect, useState } from "react";
import { fetchCreditScore } from "../services/api";
import { Card, CardContent, Typography, List, ListItem, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// Styled components
const Root = styled('div')({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f4f6f8',
  minHeight: '100vh',
});

const CardWrapper = styled(Card)({
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
  color: 'white',
  marginTop: '24px',
  textAlign: 'center',
});

const CardContentWrapper = styled(CardContent)({
  padding: '32px',
});

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: '700',
  color: '#1e3c72',
  textAlign: 'center',
  marginBottom: '20px',
});

const Score = styled(Typography)({
  fontSize: '2rem',
  fontWeight: '700',
  color: '#ffcc00',
  textAlign: 'center',
  marginTop: '10px',
});

const RiskLevel = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: '500',
  color: '#ff9800',
  textAlign: 'center',
  marginTop: '10px',
});

const RecommendationsList = styled(List)({
  marginTop: '20px',
  paddingLeft: '20px',
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  padding: '10px',
});

const ListItemStyled = styled(ListItem)({
  padding: '10px 0',
  fontSize: '1.2rem',
  color: 'white',
});

const Dashboard = () => {
  const [creditData, setCreditData] = useState(null);
  const [creditHistory, setCreditHistory] = useState([]);

  useEffect(() => {
    const getCreditData = async () => {
      const data = await fetchCreditScore();
      setCreditData(data);
      if (data) {
        setCreditHistory(prevHistory => [...prevHistory.slice(-4), { month: new Date().toLocaleString("default", { month: "short" }), score: data.creditScore }]);
      }
    };
    getCreditData();
  }, []);

  return (
    <Root>
      <Title variant="h4">Your Credit Score</Title>
      <CardWrapper>
        <CardContentWrapper>
          {creditData ? (
            <>
              <Score variant="h5">Score: {creditData.creditScore}</Score>
              <RiskLevel variant="h6">Risk Level: {creditData.riskLevel}</RiskLevel>
              <Typography variant="h6" gutterBottom sx={{ marginTop: '20px' }}>
                AI-Driven Recommendations:
              </Typography>
              <RecommendationsList>
                {creditData.recommendations.map((rec, index) => (
                  <ListItemStyled key={index}>
                    <Typography variant="body1">{rec}</Typography>
                  </ListItemStyled>
                ))}
              </RecommendationsList>
            </>
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
              <CircularProgress color="secondary" />
            </Box>
          )}
        </CardContentWrapper>
      </CardWrapper>

      {/* Credit Score Trend Line Chart */}
      <CardWrapper sx={{ background: 'white', color: 'black' }}>
        <CardContentWrapper>
          <Typography variant="h6" fontWeight="bold" textAlign="center" color="#1e3c72">Credit Score Trend</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={creditHistory}>
              <XAxis dataKey="month" />
              <YAxis domain={[600, 850]} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#1e3c72" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContentWrapper>
      </CardWrapper>
    </Root>
  );
};

export default Dashboard;