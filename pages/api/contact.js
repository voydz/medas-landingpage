import {sendRequest} from '../../lib/bin'

export default async function handler(req, res) {
  await sendRequest(req.body);
  res.redirect('/');
}
