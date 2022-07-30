const Store = require('../models/model')

const getAllProducts = async(req, res) => {
    let { featured, search, limit, sort, select, numericFilter } = req.query
    const options = {
        $gt: '>',
        $gte: '>=',
        $e: '=',
        $lt: '<',
        lte: '<=',
    }
    try {
        switch (req.query) {
            case sort:
                sort = sort.split(',').join('')
                break
            case select:
                select = select.split(',').join('')
                break
            default:
                break
        }

        const store = await Store.find({
                featured: featured,
                name: {
                    $regex: search || '',
                    $options: 'i',
                },
            })
            .sort(sort)
            .limit(limit)
            .select(select)
        res.status(200).json({
            success: true,
            length: store.length,
            data: store,
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            msg: `${error.message}`,
        })
    }
}

module.exports = getAllProducts