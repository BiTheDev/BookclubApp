import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const faqs = [
    {
      question: "How do I join a discussion?",
      answer: "Simply click on a book or event and there will be an option to participate in ongoing discussions or start your own."
    },
    // ... (more FAQs)
  ];

const FAQs = () => {
  return (
    <Box p={4} bgcolor="background.paper">
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default FAQs