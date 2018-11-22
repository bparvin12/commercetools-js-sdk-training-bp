const { createRequestBuilder } = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const createCustomer = function createCustomer(
  email,
  password,
  firstName,
  lastName,
  countryCode
) {
  // TODO: 5
  // Create a customer

  // #region SOLUTION
  const customerDraft = {
    email,
    password,
    firstName,
    lastName,
    addresses: [{
      country: countryCode
    }],
    defaultBillingAddress: 0,
    billingAddresses: [0],
    defaultShippingAddress: 0,
    shippingAddresses: [0],
    locale: 'en'
  }

  return getClient().execute({
    uri: createRequestBuilder({ projectKey }).customers.build(),
    method: 'POST',
    body: customerDraft
  })
  // #endregion

};

module.exports.createCustomer = createCustomer;