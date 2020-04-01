/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

const { validToken } = require('@axioms/express-js');
const { validScope } = require('@axioms/express-js');

const checkToken = validToken({
  axiomsDomain: process.env.AXIOMS_DOMAIN,
  axiomsAud: process.env.AXIOMS_AUDIENCE
});

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/
  '*': true,

  JsonController: {
    'private': [checkToken, validScope(['profile', 'openid'])],
    'role': [checkToken, validScope(['sample:role'])]
  }

};
