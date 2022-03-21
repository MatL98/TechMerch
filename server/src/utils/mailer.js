const nodemailer = require("nodemailer");
const twilio = require("twilio");
require("dotenv").config()

async function sendMessageToUser(buyer, infoProducts) {
  console.log(buyer);
  const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

  const options = {
    body: `Nombre y mail:${buyer.username} ${buyer.mail}
			${infoProducts.map((prod) => {
        return `Sus pedidos son: ${prod.name} ${prod.price}`;
      })}`,
    from: "whatsapp:+14155238886",
    to: `whatsapp:+${process.env.MY_PHONE_NUMBER}`,
  };
  try {
    const message = await client.messages.create(options);
    console.log(message);
    res.json({ data: message });
  } catch (error) {
    error;
  }

  client.messages.create({
    from: "+16065591166",
    to: process.env.MY_PHONE_NUMBER,
    body: "Tu pedido esta recibido y procesado, gracias!",
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_User,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const mailOptions = {
    from: "techmerch",
    to: "longomaty@gmail.com",//para probar si llegan mails usar ingresar mail propio 
    subject: `nuevo pedido de ${buyer.mail}-${buyer.username}`,
    html: `<h1>${buyer.username} ${buyer.surname}</h1>
				${infoProducts.map((prod) => {
          return `<p>Sus pedidos son: ${prod.name} ${prod.price}</p>`;
        })}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(505).json("hubo un error");
    } else {
      res.status(200).json("todo ok");
    }
  });
}

module.exports = {sendMessageToUser}
