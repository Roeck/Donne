import { StatusCodes } from "http-status-codes"

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    const defaultError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: "Something went wrong. Try again"
    }
    res.status(500).json({ msg: 'There was an error'})
}

export default errorHandlerMiddleware