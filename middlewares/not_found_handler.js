const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `City not found in... ${req.method} the route where you can't connect is: ${req.url}`
    });
};

export default not_found_handler;