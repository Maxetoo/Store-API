const appNotFound = (req, res) => {
    return res.status(404).json({
        success: false,
        msg: 'page not found',
    })
}

module.exports = appNotFound