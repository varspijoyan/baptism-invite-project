// pages/api/send.ts
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// Set your frontend URL here
const FRONTEND_URL = 'https://baptism-invite-project.vercel.app';

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Function to send mail
const sendMail = async (name, surname, isAccepted = false, guestsAmount) => {
  await transporter.sendMail({
    from: process.env.GMAIL_USER, // must match Gmail account
    to: process.env.GMAIL_USER,   // receive the email
    subject: 'Baptism Invitation Response',
    html: `
      <h3>Ինֆորմացիա</h3>
      <p><b>Անուն:</b> ${name}</p>
      <p><b>Ազգանուն:</b> ${surname}</p>
      <p><b>Ընդունել է հրավերը:</b> ${isAccepted ? 'Այո' : 'Ոչ'}</p>
      <p><b>Հյուրերի քանակ:</b> ${guestsAmount}</p>
    `,
  });
};

export default async function handler(req, res) {
  // --- CORS Headers ---
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, surname, isAccepted, guestsAmount } = req.body;

    if (!name || !surname || guestsAmount == null) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Send the email
    await sendMail(name, surname, Boolean(isAccepted), Number(guestsAmount));

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('API /send error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}