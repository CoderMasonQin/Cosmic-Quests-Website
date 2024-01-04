import { useAccount, useContractWrite } from "@starknet-react/core"
import { useState, useMemo, useCallback, useEffect } from "react"


const addrETH = "0x01e3f27a76abc1e41742fa163579108d1454d606cb3fb5bff8306b912298677c";

interface AdventureProps {
    inviter: string;
    invite_adventure_id:string;
  }

export default function PayButton({inviter, invite_adventure_id}:AdventureProps) {
    // const { address } = useAccount()
    const calls = useMemo(() => {
      const tx = {
        contractAddress: addrETH,
        entrypoint: 'answer',
        calldata: [inviter, invite_adventure_id]
      }
      return Array(1).fill(tx)
    }, [inviter, invite_adventure_id])
  
    const { write } = useContractWrite({ calls });

    const writeTransaction = () => {
      write(); // 调用写操作
    };

    return (
      <>
          <button style={{background: "hsl(39, 50%, 70%)"}}onClick={writeTransaction}>Pay and get subkey</button>
      </>
    )
  }