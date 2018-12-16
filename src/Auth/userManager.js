import { UserManager } from 'oidc-client'

const config = {
  authority:
    'https://talk2elderly.auth0.com/.well-known/openid-configuration',
  client_id: 'zcyPqIwHfObfBNsDf4G57K7bUzP5YOUV',
  scope: `profile email openid`,
  response_type: 'token id_token',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/auth/callback`
}

const userManager = new UserManager(config)

export default userManager
