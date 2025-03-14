// import nodemailer from "nodemailer";
// import emailjs from '@emailjs/browser';

// SOL_PRIVATE_KEY=""
// SMTP_USERNAME=""
// SMTP_PASSWORD=""
// SMTP_ENDPOINT

// const transport = nodemailer.createTransport({
//     host: process.env.SMTP_ENDPOINT,
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//       user: process.env.SMTP_USERNAME,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: process.env.NODEMAILER_USERNAME,
//         pass: process.env.NODEMAILER_PASSWORD
//     }
// });

export async function sendEmail(to: string, body: string) {

    // const resp = await transporter.sendMail({
    //     from: process.env.NODEMAILER_USERNAME,
    //     to,
    //     subject: "ZapierClone.App",
    //     text: body,
    //     html: "<p>Team ZapierClone</p>"
    // })

    // const resp = await emailjs.sendForm(process.env.EMAILJS_SERVICE_ID!, process.env.EMAILJS_TEMPLATE_ID!, body);

    console.log(`Email sent to ${to}, body ${body}`);
    
}