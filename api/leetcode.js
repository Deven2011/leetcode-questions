export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const username = req.query.username || 'harshvardhanbeniwal';
  const query = `{
    matchedUser(username: "${username}") {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile { ranking }
    }
    allQuestionsCount { difficulty count }
  }`;
  const r = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Referer': 'https://leetcode.com' },
    body: JSON.stringify({ query })
  });
  const data = await r.json();
  res.status(200).json(data);
}
