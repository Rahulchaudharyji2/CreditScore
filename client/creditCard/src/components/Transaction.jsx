import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import { styled } from "@mui/system";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// Styled components
const TransactionsWrapper = styled('div')({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const CardWrapper = styled(Card)({
  width: '100%',
  maxWidth: '800px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  marginTop: '24px',
  backgroundColor: '#fff',
});

const CardContentWrapper = styled(CardContent)({
  padding: '24px',
});

const Title = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: '600',
  color: '#333',
  textAlign: 'center',
  marginBottom: '16px',
});

const StatusText = styled(Typography)(({ status }) => ({
  fontStyle: 'italic',
  color: status === 'Paid on Time' ? 'green' : status === 'Late Payment' ? 'red' : 'orange',
}));

const Transactions = () => {
  const transactionHistory = [
    { date: "2024-02-01", type: "Credit Card Payment", amount: 5000, status: "Paid on Time" },
    { date: "2024-01-15", type: "Loan EMI", amount: 12000, status: "Late Payment" },
    { date: "2024-01-05", type: "Credit Card Usage", amount: 3000, status: "Pending" }
  ];

  return (
    <TransactionsWrapper>
      <Title variant="h4">Transaction History</Title>
      <CardWrapper>
        <CardContentWrapper>
          <List>
            {transactionHistory.map((txn, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={<strong>{txn.date}</strong>}
                  secondary={`${txn.type} - ₹${txn.amount}`}
                />
                <StatusText status={txn.status}>{txn.status}</StatusText>
              </ListItem>
            ))}
          </List>
        </CardContentWrapper>
      </CardWrapper>
      
      {/* Line Chart for Transaction Amount Trends */}
      <CardWrapper>
        <CardContentWrapper>
          <Typography variant="h6" fontWeight="bold" textAlign="center">Transaction Amount Trends</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transactionHistory}>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#1976d2" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContentWrapper>
      </CardWrapper>
    </TransactionsWrapper>
  );
};

export default Transactions;
