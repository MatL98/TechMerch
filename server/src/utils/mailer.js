const nodemailer = require("nodemailer");
const twilio = require("twilio");
require("dotenv").config()

async function sendMessageToUser(buyer, infoProducts) {
  const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

  const options = {
    body: `Nombre y mail:${buyer[0].username} ${buyer[0].mail}
			${infoProducts.map((prod) => {
        return `Sus pedidos son: ${prod.name} ${prod.price}`;
      })}`,
    from: "whatsapp:+14155238886",
    to: process.env.MY_PHONE_NUMBER,
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

  const mail = "c6plaeaopf3eec3n@ethereal.email";
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: mail,
      pass: "etNwyEKCAkaB8w2zzz",
    },
  });
  const mailOptions = {
    from: "techmerch",
    to: mail,
    subject: `nuevo pedido de ${buyer[0].mail}-${buyer[0].username}`,
    html: `<h1>${buyer[0].username} ${buyer[0].surname}</h1>
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
