// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Gun = require('gun');

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
