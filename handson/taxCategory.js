const sdkRequestBuilder = require('@commercetools/api-request-builder');
const log = require('../logger.js').log;
const { getClient, projectKey } = require('./client.js');

const getTaxCategories = function getTaxCategories() {
  // TODO: 3.6
  // Get a list of product types

};

module.exports.getTaxCategories = getTaxCategories;
