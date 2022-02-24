var StellarSdk = require("stellar-sdk");
var server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

export interface Currency {
  anchor_asset: string
  anchor_asset_type: string
  attestation_of_reserve: string
  code: string
  desc: string
  image: string
  is_asset_anchored: boolean
  issuer: string
  name: string
  redemption_instructions: string
}

export interface OrgDocumentation {
  ORG_DBA: string,
  ORG_DESCRIPTION: string,
  ORG_GITHUB: string,
  ORG_LOGO: string,
  ORG_NAME: string,
  ORG_OFFICIAL_EMAIL: string,
  ORG_PHYSICAL_ADDRESS: string,
  ORG_TWITTER: string,
  ORG_URL: string,
}

export interface OrgPrincipal {
  email: string,
  name: string,
}

export interface StellarTOML {
  ACCOUNTS: string[],
  CURRENCIES: Currency[],
  DOCUMENTATION: OrgDocumentation,
  PRINCIPALS: OrgPrincipal[],
}

export const Stellar = {
  getTransactions: async (ledgerNumber: number) => {
    return await server.transactions().forLedger(ledgerNumber).call();
  },
  resolveTOML: async (domain: string): Promise<StellarTOML> => {
    return await StellarSdk.StellarTomlResolver.resolve(domain);
  },
};
