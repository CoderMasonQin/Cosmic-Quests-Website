"use client";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { useMemo } from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

function WalletConnected() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter()

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <div className="">
      <div>
        <span>Connected: {shortenedAddress}</span>
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button onClick={() => router.push('/page3')}>Start Game</Button>
      </div>
    </div>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (
    <div>
      <span>Choose a wallet: </span>
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            onClick={() => connect({ connector })}
            className="gap-x-2 mr-2"
          >
            {connector.id}
          </Button>
        );
      })}
    </div>
  );
}

export default function WalletBar() {
  const { address } = useAccount();

  return address ? <WalletConnected /> : <ConnectWallet />;
}
