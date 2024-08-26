import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";

export const appMetadata = {
  name: "Cat Attack",
  url: "https://catattack.thirdweb.com",
};

export const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "";
export const CHAIN = defineChain(8453);
export const CONTRACT_ADDR = "0x2C57B40e1526Cd4732937C04f2716E4ab7eb4Bf3";

export const client = createThirdwebClient({ clientId: CLIENT_ID });
export const contract = getContract({
  client,
  chain: CHAIN,
  address: CONTRACT_ADDR,
});

export const accountAbstraction = {
  chain: CHAIN,
  gasless: false,
};

export const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "discord", "apple", "farcaster", "email", "passkey"],
    },
  }),
];