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
    <div className="border rounded-lg p-12 bg-opacity-50 bg-slate-400">
      <div className="flex flex-col justify-center items-center">
        <span className="text-slate-50 text-md">Connected</span>
        <div className="mt-2 text-slate-200">Your Address: {shortenedAddress}</div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <Button onClick={() => router.push('/page3') } className='bg-green-500'>Start Game</Button>
        <Button className="mt-2" onClick={() => disconnect()}>Disconnect</Button>
      </div>
    </div>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (
    <div className="flex items-center flex-col">
      <h2>Choose a wallet: </h2>
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            onClick={() => connect({ connector })}
            className="gap-x-2 mt-2"
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

  return <div className="mt-60">
    {address ? <WalletConnected /> : <ConnectWallet />}
  </div>;
}
