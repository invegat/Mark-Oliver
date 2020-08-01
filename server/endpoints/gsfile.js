const express = require('express');
const fs = require('fs')
const fileRouter = express.Router();


fileRouter.get('/fileUpload', function (req, res) {
  const { tag, fo, fn } = req.body;
  fs.open(fn, 'r', (err, fd) => {
    if (err) {
      console.log(`open error ${err}`)
      res.status(400).json({ error: "can't open", err });
    }
    else {
      if (tag != 'gsFile')
        res.status(500).json({ error: `wrong tag ${tag}` });
      else {
        len = fo.len;
        buff = Buffer.alloc(len);
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