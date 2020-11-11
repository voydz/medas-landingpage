import { sendRequest } from '../../lib/bin'

export default async function handler(req, res) {
  try {
    await sendRequest(req.body);
    res.json({ success: true });
  }
  catch {
    res.json({ success: false });
  }
}
