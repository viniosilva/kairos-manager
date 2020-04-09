const mutations = require('./mutations');
const resolvers = require('./resolvers');
const schemas = require('./schemas');
const queries = require('./queries');

exports.classroomMutations = mutations;

exports.classroomResolvers = { ...resolvers };

exports.classroomSchemas = schemas;

exports.classroomQueries = queries;
