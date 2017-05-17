module.exports = class RunBackendPlugin {
  constructor (options) {
    const server = options.backend
    this.entrypoint = server[options.entrypoint]
  }

  apply (compiler) {
    compiler.plugin('done', function() {
      this.entrypoint()
    })
  }
}