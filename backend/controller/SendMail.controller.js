import * as sendMailService from "../mail/sendMail.js";

export class SendMailController {
  constructor() {
    this.sendMailService = this.sendMailService.bind(this);
  }

  send = async (req, res) => {
    try {
      const {
        name,
        surname,
        isAccepted,
        isNotAccepted,
        guestsAmount,
      } = req.body;
      await sendMailService.sendMail(
        name,
        surname,
        isAccepted,
        isNotAccepted,
        guestsAmount,
      );
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to send email", error: error.message });
    }
  };
}
