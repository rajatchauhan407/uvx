export default function handler(req, res) {
    const auth = req.headers.authorization;
  
    if (!auth) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
      res.status(401).end('Unauthorized');
      return;
    }
  
    const [user, pass] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
  
    // Replace with your own credentials
    if (user === 'uvx' && pass === 'uvx222') {
      res.status(200).end('Authorized');
    } else {
      res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
      res.status(401).end('Unauthorized');
    }
  }
  