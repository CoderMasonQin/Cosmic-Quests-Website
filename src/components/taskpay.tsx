import { useAccount, useContractWrite } from "@starknet-react/core"
import { useState, useMemo, useCallback, useEffect } from "react"


const addrETH = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";

interface PayButtonProps {
    address: string;
    amount: bigint;
  }

export default function PayButton({address, amount}:PayButtonProps) {
    // const { address } = useAccount()
    const [count, setCount] = useState(0)
    console.log("amount = "+ amount)
    const calls = useMemo(() => {
      const tx = {
        contractAddress: addrETH,
        entrypoint: 'transfer',
        calldata: [address, Number(amount), 0]
      }
      return Array(1).fill(tx)
    }, [address, count])
  
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