export default function handler(req, res) {
  if (req.method === 'POST') {
    const { challenge } = req.body;

    // ✅ Just echo the challenge straight back to eBay
    if (challenge && challenge.length >= 32 && challenge.length <= 80) {
      return res.status(200).json({ response: challenge });
    }

    return res.status(400).json({ error: 'Invalid or missing challenge' });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

