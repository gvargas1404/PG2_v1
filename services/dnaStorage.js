'use strict';

const dnaSchema = require('../model/DnaSchema')

const save = conn => async (newDna) => {
    const DNA = conn.model('DNA', dnaSchema, 'dna');
    await DNA.create({
        ...newDna
    });
    const result = await DNA.findOneAndUpdate({
        dna: { "$eq": newDna.dna }
    }, { isMutant: newDna.isMutant });
    console.log("Result in query: " + JSON.stringify(result));
}

const count = conn => async (query) => {
    const DNA = conn.model('DNA', dnaSchema, 'dna');
    return await DNA.find(query).count();
}

module.exports = conn => {
    return {
        save: save(conn),
        count: count(conn)
    }
}