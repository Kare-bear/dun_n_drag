const axios = require("axios");
const { apiKey } = require("./../config");

let getApiData = (req, res) => {


    axios
        .get(`http://dnd5eapi.co/api/classes/${req.body.class}`)
        .then(results =>{
        return res.json(results.data);
        });
    axios
        .get(`http://dnd5eapi.co/api/races/${req.body.race}`)
        .then(results =>{
        return res.json(results.data);
        });
    
}
module.exports = {
    getApiData
};