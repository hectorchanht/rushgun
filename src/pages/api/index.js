// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  const GUN = require('gun');
  const server = require('http').createServer().listen(8964);
  const gun = GUN({ web: server });

  res.status(200).json({
    '🔫 GUN': 'is ready',
    github: 'https://github.com/hectorchanht/rushgun',
    gun: JSON.stringify(gun)
  })
}
