const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/contact', (req, res) => {
  const formData = req.body;

  const sql = 'INSERT INTO contact_form (name, email, phoneNumber, inquiryType, message) VALUES (?, ?, ?, ?, ?)';
  const values = [formData.name, formData.email, formData.phoneNumber, formData.inquiryType, formData.message];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ error: 'Internal server error', details: err.message });
    } else {
      res.status(200).json({ message: 'Form submitted successfully' });
    }
  });
});

module.exports = router;