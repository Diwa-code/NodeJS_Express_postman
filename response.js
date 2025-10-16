const response = (statusCode, data, massage, res) => {
    res.status(statusCode).json({
        payload: { data,
            massage: massage
        },
        pagination: {
            prev:'',
            next:"",
            max:""
        }
    })
}

module.exports = response