const express = require('express');
const fs = require('fs')
const fileRouter = express.Router();
const index = require('../index')



fileRouter.get('/target', function (req, res) {
  res.status(200).json({ gstarget: index.GSTARGET })
})

fileRouter.post('/fileUpload', function (req, res) {
  console.log('req.body', JSON.stringify(req.body))
  // const { tag, size, fn } = req.body;
  const tag = req.body['name']
  const size = req.body['size']
  const fn = req.body['path']
  console.log(`tag: ${tag}  size: ${size}  fn: ${fn}`)

  fs.open(fn, 'r', (err, fd) => {
    if (err) {
      console.log(`open error ${err}`)
      res.status(400).json({ error: "can't open", err });
    }
    else {
      if (tag != 'gsFile')
        res.status(500).json({ error: `wrong tag ${tag}` });
      else {
        buff = Buffer.alloc(size);
        fs.read(fd, buff, 0, len, 0, (err, bytes, buff) => {
          if (err) {
            res.status(400).json({ error: "can't read", err });
          }
          else {
            res.status(200).json(buff.toString());
          }

        })
      }

    }
  })

});
module.exports = fileRouter;