import test from 'ava'

const WebpackBackendPlugin = require('.')

class MyBackend {
  constructor () {
    this.started = false
  }

  start () {
    this.started = true
  }
}

class Compiler {
  plugin (event, cb) {
    cb()
  }
}

test('entrypoint is called', t => {
  const backend = new MyBackend()
  const plugin = new WebpackBackendPlugin({
    backend,
    entrypoint: 'start'
  })
  const compiler = new Compiler()
  plugin.apply(compiler)
	t.truthy(backend.started)
})