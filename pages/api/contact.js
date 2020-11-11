import {sendMail} from '../../lib/mail'

export default async function handler(req, res) {
  await sendMail(req.body);
  res.redirect('/');
}
