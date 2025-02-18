import React, { useState } from "react";
import { fetchPersonalizedPlan } from "../services/api";
import { TextField, Button, Card, CardContent, Typography, List, ListItem, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

// Styled components
const Root = styled('div')({
  padding: '20px',
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
  color: '#333',
  textAlign: 'center',
});

const InputField = styled(TextField)({
  width: '100%',
  marginBottom: '16px',
});

const ButtonStyled = styled(Button)({
  width: '100%',
  padding: '12px',
  backgroundColor: '#1976d2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

const RecommendationsList = styled(List)({
  marginTop: '20px',
  paddingLeft: '20px',
});

const ListItemStyled = styled(ListItem)({
  padding: '8px 0',
  fontSize: '1rem',
});

const PersonalizedPlan = () => {
  const [creditScore, setCreditScore] = useState("");
  const [plan, setPlan] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetchPersonalizedPlan(creditScore);
    setPlan(data?.personalizedPlan || []);
    setLoading(false);
  };

  return (
    <Root>
      <Title variant="h4">AI-Driven Personalized Credit Plan</Title>
      <CardWrapper>
        <CardContentWrapper>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Enter Your Credit Score"
              variant="outlined"
              type="number"
              value={creditScore}
              onChange={(e) => setCreditScore(e.target.value)}
              required
            />
            <ButtonStyled type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Get Plan"}
            </ButtonStyled>
          </form>

          {plan.length > 0 && (
            <RecommendationsList>
              {plan.map((tip, index) => (
                <ListItemStyled key={index}>
                  <Typography variant="body1">{tip}</Typography>
                </ListItemStyled>
              ))}
            </RecommendationsList>
          )}
        </CardContentWrapper>
      </CardWrapper>
    </Root>
  );
};

export default PersonalizedPlan;
