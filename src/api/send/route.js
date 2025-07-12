import express from "express";
import dotenv from "dotenv";
import { Resend } from "resend";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { email, assunto, mensagem } = req.body; 
  console.log("Dados recebidos:", { email, assunto, mensagem });

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: assunto,
      html: `
        <h1>Nova mensagem do portfólio</h1>
        <p><strong>De:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    console.log("Email enviado com sucesso:", data);
    res.status(200).json({ message: "Email enviado com sucesso!", data });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});