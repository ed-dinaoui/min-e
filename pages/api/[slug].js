const YoutubeDlWrap = require('youtube-dl-wrap') ;
const fs = require('fs')

const youtubeDlWrap = new YoutubeDlWrap('assets/youtube-dl');

export default function handler(req, res) {
  let readableStream = youtubeDlWrap.execStream([ decodeURIComponent(req.query.URL) ,
   "-f", "best[ext=mp4]"]) ;
    
    
  readableStream.pipe(fs.createWriteStream(`public/output/${req.query.slug}.mp4`));
  res.json({ link : `/output/${req.query.slug}.mp4` }) ;
  res.end()
}
//https://youtu.be/X4Q7d0CtYyk