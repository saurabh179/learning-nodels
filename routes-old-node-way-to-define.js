// const fs = require('fs');


// //in node js we handle request like this
// const requestHandler = ((req, res) => {
//     console.log(req.url, req.method);
//     const url = req.url;
//     const method = req.method;
//     if (req.url === '/') {
//         res.write('<html>');
//         res.write('<head><title>My Title</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">POST</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }

//     if (req.url == "/message" && req.method === 'POST') {
//         const body = [];
//         //data comming from client can come in chuck -> so first 'data' event pe req capture karo then when whole data
//         //is there then at 'end' event will do something
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parsebody = Buffer.concat(body).toString();
//             console.log(parsebody);
//             const message = parsebody.split('=')[1];
//             //correct way to write in file in async code
//             fs.writeFile("message.txt", message, err => {
//                 res.statusCode = 302;
//                 return res.end();
//             });
//         });
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My Title</title></head>');
//     res.write('<body><h1> hello </h1></body>');
//     res.write('</html>');
//     res.end();
// });

// module.exports = requestHandler;