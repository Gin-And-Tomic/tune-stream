import config from '../config';
import youtubeStream from 'youtube-audio-stream';
import mm from 'musicmetadata';
import fs from 'fs';

const path = './music';

export function getSongs(req, res) {
  fs.readdir(path, (exception, files) => {
    if (exception) {
      res.sendStatus(500).send(exception);
    } else {
      res.json(files);
    }
  });
}

export function getSong(req, res) {
  const id = req.params.id;
  const fullPath = config.libraryPath + '/' + id; // eslint-disable-line prefer-template

  mm(fs.createReadStream(fullPath), (err, metadata) => {
    if (err) {
      res.sendStatus(500).send(err);
    } else {
      res.json(metadata);
    }
  });
}

export function getSongFromLibrary(req, res) {
  const id = req.params.id;
  const fullPath = config.libraryPath + '/' + id; // eslint-disable-line prefer-template
  try {
    const stat = fs.statSync(fullPath);
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': stat.size,
    });
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }

  fs.createReadStream(fullPath).pipe(res);
}

export function getSongFromYoutube(req, res) {
  const id = req.params.id;
  const requestUrl = `http://youtube.com/watch?v=${id}`;
  try {
    youtubeStream(requestUrl).pipe(res);
  } catch (exception) {
    res.status(500).send(exception);
  }
}
