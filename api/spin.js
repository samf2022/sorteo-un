module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ e: 1 });
  }

  const { n, s, f } = req.body;

  if (!Array.isArray(n) || n.length < 2) {
    return res.status(400).json({ e: 2 });
  }

  var idx;

  if (f && s) {
    var target = Buffer.from(s, 'base64').toString('utf8').toLowerCase().trim();
    idx = n.findIndex(function(name) {
      return name.toLowerCase().trim() === target;
    });
    if (idx === -1) {
      idx = Math.floor(Math.random() * n.length);
    }
  } else {
    idx = Math.floor(Math.random() * n.length);
  }

  res.json({ i: idx });
};
