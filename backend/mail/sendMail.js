import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export const sendMail = async (
  name,
  surname,
  isAccepted = false,
  isNotAccepted = false,
  guestsAmount,
) => {
  await transporter.sendMail({
    from: "Guest",
    to: process.env.GMAIL_USER,
    subject: "Baptism Invitation Response",
    html: `
      <h3>Ինֆորմացիա</h3>
      <p><b>Անուն:</b> ${name}</p>
      <p><b>Ազգանուն:</b> ${surname}</p>
      <p><b>Ընդունել է հրավերը:</b> ${isAccepted}</p>
      <p><b>Չի ընդունել հրավերը:</b> ${isNotAccepted}</p>
      <p><b>Հյուրերի քանակ:</b> ${guestsAmount}</p>  
    `,
  });
};
