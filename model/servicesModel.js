import db from "../config/database.js";

export const getServices = (result) => {
    db.query("SELECT * FROM services", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
};

export const getByIdServices = (id, result) => {
    db.query("SELECT * FROM services WHERE services_id =?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, results[0]);
        }
    })
}