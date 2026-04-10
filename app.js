const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <html>
    <head><title>KOICA Demo App</title></head>
    <body style="font-family:Arial; text-align:center; padding:50px; background:#f0f4f8">
      <h1 style="color:#003366">KOICA Sovereign Cloud</h1>
      <h2>Demo Application</h2>
      <p>Hostname: <b>${os.hostname()}</b></p>
      <p>Version: <b>1.0.0</b></p>
      <p style="color:green">정상 운영 중</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
