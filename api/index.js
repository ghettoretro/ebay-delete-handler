export default function handler(req, res) {
  if (req.method === 'POST') {
    const { challenge } = req.body;
    if (challenge && challenge === 'JNN_SECRET_01_built_like_tungsten_in_a_metal_shop_cage') {
      return res.status(200).json({ response: challenge });
    }
    return res.status(400).json({ error: 'Invalid token or missing challenge' });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
