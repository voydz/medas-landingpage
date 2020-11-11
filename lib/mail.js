import SendGrid from '@sendgrid/mail'

SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendMail(variables) {
  await SendGrid.send({
    to: 'felix.rudat@hotmail.de', // Change to your recipient
    from: 'felix.rudat@hotmail.de', // Change to your verified sender
    subject: 'Medas Portal - Neue Registration',
    text: `${JSON.stringify(variables)}`,
    html: `${JSON.stringify(variables)}`,
  })
};
