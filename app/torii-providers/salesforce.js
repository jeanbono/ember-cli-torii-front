import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

var Salesforce = Oauth2.extend({

  name:    'salesforce',
  baseUrl: 'https://login.salesforce.com/services/oauth2/authorize',

  // additional params that this provider requires
  requiredUrlParams: ['response_type'],
  optionalUrlParams: [],

  requestVisibleActions: configurable('requestVisibleActions', ''),

  accessType: configurable('accessType', ''),

  responseParams: ['code'],

  state: configurable('state', 'STATE'),

  approvalPrompt: configurable('approvalPrompt', 'auto'),

  redirectUri: configurable('redirectUri',
    'http://localhost:4200/auth/salesforce/callback')
});

export default Salesforce;
