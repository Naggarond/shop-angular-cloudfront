import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://txmacxl4y9.execute-api.us-east-1.amazonaws.com',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://wpkzcsuai2.execute-api.us-east-1.amazonaws.com/dev',
    bff: 'https://txmacxl4y9.execute-api.us-east-1.amazonaws.com',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: false,
    bff: true,
    cart: false,
  },
};
