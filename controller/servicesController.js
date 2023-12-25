import {
    getServices,
    getByIdServices
} from "../model/servicesModel.js";

export const showServices = async (req, res) => {
    try {
        getServices((err, results) => {
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

export const showServicesById = async (req, res) => {
    try {
        getByIdServices(req.params.id, (err, results) => {
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