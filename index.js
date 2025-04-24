
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { challenge } = req.body;
    if (challenge && process.env.VERIFY_TOKEN === challenge) {
      return res.status(200).json({ response: challenge });
    }
    return res.status(400).json({ error: 'Invalid token or missing challenge' });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
