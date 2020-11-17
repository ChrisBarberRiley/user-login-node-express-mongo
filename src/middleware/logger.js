// @desc        Log request to console
//              We use morgan, this is to setup the folder structure for other middlewares
const logger = (req, res, next) => {
    console.log('Endpoint reached')
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    )
    next()
}

export default logger
