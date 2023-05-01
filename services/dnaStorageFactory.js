'use strict';
const mongoose = require('mongoose');
const { getConnection } = require('./dbConnection');
const DB_URL = "mongodb://192.168.1.92:27017/meli"
const dnaStorage = require('./dnaStorage')
module.exports = async () => {
    const connection = await getConnection(mongoose, DB_URL, { useNewUrlParser: true })
    return dnaStorage(connection)
}

