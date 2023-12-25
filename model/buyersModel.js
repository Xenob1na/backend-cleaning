import db from "../config/database.js";


export const getBuyers = (result) => {
    db.query("SELECT * FROM buyers", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results)
        }
    })
};

export const getByIdBuyers = (id, result) => {
    db.query("SELECT * FROM buyers WHERE buyers_id =?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null)
        } else {
            result(null, results[0]);
        }
    })
}

export const insertBuyers = (data, result) => {
    db.query("INSERT INTO buyers SET ?", [data], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

export const deleteBuyers = (id, result) => {
    db.query("DELETE FROM buyers WHERE buyers_id =?", [id], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
}