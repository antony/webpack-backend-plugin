# Webpack backend plugin

A webpack plugin for bootstrapping your backend (an API, server, whatever)

Very simplistic, simply runs a method in another javascript file, defined by you:

// server.js
```
const http = require('http')  
const port = 3000

const server = http.createServer((request, response) => {  
  response.end('Hello Node.js Server!')
})

exports.start = function () {
  server.listen(port)
}
```

Then you could use this configuration.

// webpack.config.js
```
plugins: [
  new WebpackBackendPlugin({
    backend: require('./server'), // your backend 
    entrypoint: 'start' // name of the bootstrap method
  })
]
```

now, when webpack starts, so does your backend - and you can proxy requests to it!