const mutations = require('./mutations');
const resolvers = require('./resolvers');
const schemas = require('./schemas');
const queries = require('./queries');

exports.disciplineMutations = mutations;

exports.disciplineResolvers = { ...resolvers };

exports.disciplineSchemas = schemas;

exports.disciplineQueries = queries;
