import versions from '../../versions.json'

export default async function handler(req, res) {
  // get latest versions
  const ios = versions.ios[0];
  const android = versions.android[0];

  res.json({ ios, android });
}
