module.exports = async function handler(req, res) {
  const response = await fetch('https://api.propstack.de/v1/units?expand=1', {
    headers: {
      'X-Api-Key': process.env.PROPSTACK_API_KEY
    }
  });
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}