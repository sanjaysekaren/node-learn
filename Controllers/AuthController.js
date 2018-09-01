const { getDbConnection } = require("../Utils/utilMethods")

exports.login = async (req, res) => {
    let client = getDbConnection();
    try {
        var result = await client.query('SELECT * FROM USERDETAILS WHERE EMAIL_ID=$1 AND PASSWORD=$2', [req.body.email_id, req.body.password])
        if (result.rowCount == 1) {
            res.send({ message: "Login success" })
        }
        else {
            res.status(404)
            res.send({ message: "Login failed" })
        }
    }
    catch (err) {
        
    }
    finally {
        client.end();
    }
}

exports.signup = (req, res) => { }