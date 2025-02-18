import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const faqData = [
  { question: "What is a credit score?", answer: "A credit score is a numerical representation of your creditworthiness based on your financial history." },
  { question: "How can I improve my credit score?", answer: "You can improve your credit score by making on-time payments, reducing credit utilization, and maintaining a diverse credit portfolio." },
  { question: "What factors affect my credit score?", answer: "Key factors include payment history, credit utilization, length of credit history, types of credit, and recent credit inquiries." },
  { question: "How often does my credit score update?", answer: "Your credit score updates whenever your credit report is updated, typically once a month." },
  { question: "Will checking my credit score lower it?", answer: "No, checking your own credit score is considered a soft inquiry and does not affect your credit score." }
];

const FAQContainer = styled(Container)({
  padding: "40px 20px",
  maxWidth: "800px",
  textAlign: "center",
});

const FAQTitle = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#1e3c72",
  marginBottom: "20px",
});

const StyledAccordion = styled(Accordion)({
  marginBottom: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  '&:before': {
    display: 'none',
  }
});

const FAQ = () => {
  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqData.map((faq, index) => (
        <StyledAccordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" fontWeight="bold">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
