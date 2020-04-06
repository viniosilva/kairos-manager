const mutations = require('./mutations');
const resolvers = require('./resolvers');
const schemas = require('./schemas');
const queries = require('./queries');

exports.teacherMutations = mutations;

exports.teacherResolvers = { ...resolvers };

exports.teacherSchemas = schemas;

exports.teacherQueries = queries;
