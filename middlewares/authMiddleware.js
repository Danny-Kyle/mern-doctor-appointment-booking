const jwt = require("jsonwebtoken");

module.exports = async (res, req, next) => {
    try{}
    catch(error){
        return res.status(401).send({
            message: "Auth Failed",
            success: false
        })
    }
}