import express, { Request, Response } from 'express'
import http from 'http'

const PORT = 4000;
const VIDEO_STORAGE_HOST = 'localhost'
const VIDEO_STORAGE_PORT = 3000;
// const PORT = process.env.PORT;
// const VIDEO_STORAGE_HOST
//   = process.env.VIDEO_STORAGE_HOST;
// const VIDEO_STORAGE_PORT
//   = parseInt(process.env.VIDEO_STORAGE_PORT);
const app = express();

app.get("/video", (req, res) => {
  const forwardRequest = http.request(
    {
      host: VIDEO_STORAGE_HOST,
      port: VIDEO_STORAGE_PORT,
      path: '/video?path=samplevideo.mp4',
      method: 'GET',
      headers: req.headers
    },
    forwardResponse => {
      console.log("response", res)
      res.writeHead(forwardResponse.statusCode, forwardResponse.headers);
      forwardResponse.pipe(res);
    }
  );

  req.pipe(forwardRequest)
});
let FORCEPORT = 4000
app.listen(FORCEPORT, () => {
  console.log(`Microservice online ${FORCEPORT}`)
})