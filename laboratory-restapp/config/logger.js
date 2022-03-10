const { createLogger, transports, format } = require('winston')

const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'data.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'data.log',
            level: 'warn',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = logger