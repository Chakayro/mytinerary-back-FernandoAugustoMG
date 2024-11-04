const error_400 = (error, req, res, next) => {
    console.log(error);
    return res.status(400).json({
        success: false,
        response: error,
        message: "Error on the city server"

    });
}
export default error_400;