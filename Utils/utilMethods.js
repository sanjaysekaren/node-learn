const keys = require("../Config/keys");
const { Client } = require("pg");

//returns a db client
exports.getDbConnection = () => {
    const client = new Client({ connectionString: keys.psqlConnectionString });
    client.connect();
    return client;
}