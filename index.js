module.exports = class RunBackendPlugin {
  constructor (options) {
    this.entrypoint = () => {
      const server = options.backend
      return server[options.entrypoint]()
    }
  }

  apply (compiler) {
    compiler.plugin('done', () => {
      this.entrypoint()
    })
  }
}