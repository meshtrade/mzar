import { Server, ServerApi, StellarTomlResolver } from "stellar-sdk";

const STELLAR_SERVER = process.env.NEXT_PUBLIC_STELLAR_SERVER;
const STELLAR_TOML_DOMAIN = process.env.NEXT_PUBLIC_STELLAR_TOML_DOMAIN;
const STELLAR_ISSUANCE_ACCOUNT =
  process.env.NEXT_PUBLIC_STELLAR_ISSUANCE_ACCOUNT;

const server = new Server(
  STELLAR_SERVER ?? "https://horizon-testnet.stellar.org"
);

export interface Currency {
  anchor_asset: string;
  anchor_asset_type: string;
  attestation_of_reserve: string;
  code: string;
  desc: string;
  image: string;
  is_asset_anchored: boolean;
  issuer: string;
  name: string;
  redemption_instructions: string;
}

export interface OrgDocumentation {
  ORG_DBA: string;
  ORG_DESCRIPTION: string;
  ORG_GITHUB: string;
  ORG_LOGO: string;
  ORG_NAME: string;
  ORG_OFFICIAL_EMAIL: string;
  ORG_PHYSICAL_ADDRESS: string;
  ORG_TWITTER: string;
  ORG_URL: string;
}

export interface OrgPrincipal {
  email: string;
  name: string;
}

export interface StellarTOML {
  ACCOUNTS: string[];
  CURRENCIES: Currency[];
  DOCUMENTATION: OrgDocumentation;
  PRINCIPALS: OrgPrincipal[];
}

export const Stellar = {
  getAccount: async (): Promise<ServerApi.AccountRecord> => {
    return await server
      .accounts()
      .accountId(STELLAR_ISSUANCE_ACCOUNT ?? "")
      .call();
  },

  resolveTOML: async (): Promise<StellarTOML> => {
    if (STELLAR_ISSUANCE_ACCOUNT) {
      const account = await Stellar.getAccount();
      if (account.home_domain) {
        return (await StellarTomlResolver.resolve(
          account.home_domain
        )) as StellarTOML;
      }
    }

    return (await StellarTomlResolver.resolve(
      STELLAR_TOML_DOMAIN ?? "mzar.mesh.trade"
    )) as StellarTOML;
  },
};
