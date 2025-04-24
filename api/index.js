export default function handler(req, res) {
  if (req.method === 'POST') {
    const { challenge } = req.body;
    if (challenge && challenge.length >= 32) {
      return res.status(200).json({ response: challenge });
    }
    return res.status(400).json({ error: 'Invalid token or missing challenge' });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
