
import { configDotenv } from 'dotenv';

configDotenv()

export const envConfig = {
  graphQLEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  auth0Domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
  auth0PublicKey: process.env.NEXT_PUBLIC_AUTH0_PUBLIC_KEY,
  auth0BaseUrl: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
  auth0IssuerBaseUrl: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
  defaultParentRoleId: process.env.NEXT_PUBLIC_PARENT_ROLE_ID
};