import { useContract, useAccount, useContractRead, useContractWrite } from '@starknet-react/core';
import abi from '@/abi/contract.json'

const contractAddress = '0x01e3f27a76abc1e41742fa163579108d1454d606cb3fb5bff8306b912298677c';
const contractAbi = abi;

export default function GameComponent() {
  const { account } = useAccount();
  const { contract } = useContract({ abi:abi, address:contractAddress });

  // 调用合约的 new_adventure 方法

  
  
  const { data, isError, isLoading, error } = useContractRead({
      functionName: "get_current_adventure",
      args: [],
      abi: contractAbi,
      address: contractAddress,
      watch: true,
    });
  
    if (isLoading) return <div>Loading ...</div>;
    if (isError || !data) return <div>{error?.message}</div>;
    //@ts-ignore
    return <div>{data}</div>;
  }