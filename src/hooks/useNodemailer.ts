import nodemailer from "nodemailer";
import { toast } from "./use-toast";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

const useNodemailer = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  async function sendMail({ from, to, subject, text }: MailOptions) {
    try {
      await transporter.sendMail({
        from: "",
        to: "",
        subject: "",
        text: "",
      });

      toast({
        title: "Email sent",
        description: "Your email has been sent successfully",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to send email, please try again later",
        variant: "destructive",
      });
    }
  }

  return {
    sendMail,
  };
};

export default useNodemailer;
