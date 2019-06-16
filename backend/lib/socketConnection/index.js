import debug from 'debug'

const log = debug('headcalc:lib:socket:info')
const logdebug = debug('headcalc:lib:socket:debug')
log.log = console.log.bind(console)
logdebug.log = console.log.bind(console)

module.exports.headcalcSocket = function(http, sharedSession) {
  const io = require('socket.io')(http)
  io.use(function(socket, next) {
    sharedSession(socket.request, socket.request.res, next)
  })

  io.on('connection', (socket) => {
    log('a user connected')

    socket.on('disconnect', () => {
      log('user disconnected')
    })
  })
}
