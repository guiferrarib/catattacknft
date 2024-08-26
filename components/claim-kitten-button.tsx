import { useContext, useState } from "react";
import { GameContext } from "../contexts/game-context";
import { client, contract } from "../utils/constants";
import { TransactionButton } from "thirdweb/react";
import { claimKitten } from "../thirdweb/8453/0xCF3230acF39e68Ae3DC940ccdFC89759a746b69f";
import { ClaimButton } from "thirdweb/react";
import { defineChain } from "thirdweb/chains";

const ClaimKittenButton: React.FC = () => {
  const { refetch } = useContext(GameContext);
  const [error, setError] = useState<Error | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <ClaimButton
  contractAddress = {contract.address}
  chain={defineChain(8453)}
  client={client}
  claimParams={{
    type: "ERC1155",
    quantity: 1n,
    tokenId: 0n,
  }
  }
>
  Claim now
</ClaimButton>
      {error && (
        <p className="mt-2 text-xs first-letter:capitalize text-red-400 max-w-xs text-center">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default ClaimKittenButton;
