import { getBuyers, getByIdBuyers, insertBuyers, deleteBuyers } from "../model/buyersModel.js";

export const showBuyers = async (req, res) => {
    try {
        getBuyers((err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const showBuyersById = async (req, res) => {
    try {
        getByIdBuyers(req.params.id, (err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const createBuyers = async (req, res) => {
    try {
        const data = req.body
        insertBuyers(data, (err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteBuys = async (req, res) => {
    try {
        const id = req.params.id
        deleteBuyers(id, (err, results) => {
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
}