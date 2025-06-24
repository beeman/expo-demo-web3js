import { PublicKey } from '@solana/web3.js'
import { useQuery } from '@tanstack/react-query'
import { useConnection } from '../solana/solana-provider'

export function useGetBalance({ address }: { address: PublicKey }) {
  const connection = useConnection()

  return useQuery({
    queryKey: ['get-balance', { endpoint: connection.rpcEndpoint, address }],
    queryFn: () => connection.getBalance(address),
  })
}
