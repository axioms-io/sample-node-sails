/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

const { hasValidAccessToken } = require('@axioms/express-js');
const { hasRequiredScopes } = require('@axioms/express-js');
const { hasRequiredRoles } = require('@axioms/express-js');
const { hasRequiredPermissions } = require('@axioms/express-js');

const checkToken = hasValidAccessToken({
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
    'private': [checkToken, hasRequiredScopes(['profile', 'openid'])],
    'role': [checkToken, hasRequiredRoles(['sample:role'])],
    'sampleRead': [checkToken, hasRequiredPermissions(['sample:read'])],
    'sampleCreate': [checkToken, hasRequiredPermissions(['sample:create'])],
    'sampleUpdate': [checkToken, hasRequiredPermissions(['sample:update'])],
    'sampleDelete': [checkToken, hasRequiredPermissions(['sample:delete'])]
  }

};
