const path = require('path'),
  express = require('express');
function rest(app) {
  app.use('/ui-router-react-digest', express.static(path.resolve(path.join(process.env.NODE_PATH, process.env.STATIC_PATH))))
  .all('/ui-router-react-digest/*', function(request, response){
    response.sendFile(path.resolve(path.join(process.env.NODE_PATH, process.env.STATIC_PATH, 'index.html')));
  })
}
module.exports = rest;
