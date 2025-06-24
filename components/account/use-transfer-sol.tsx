import { PublicKey, TransactionSignature } from '@solana/web3.js'
import { useConnection } from '@/components/solana/solana-provider'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { createTransaction } from '@/components/account/create-transaction'

export function useTransferSol({ address }: { address: PublicKey }) {
  const connection = useConnection()
  const client = useQueryClient()
  const { signAndSendTransaction } = useWalletUi()

  return useMutation({
    mutationKey: ['transfer-sol', { endpoint: connection.rpcEndpoint, address }],
    mutationFn: async (input: { destination: PublicKey; amount: number }) => {
      let signature: TransactionSignature = ''
      try {
        const { transaction, latestBlockhash, minContextSlot } = await createTransaction({
          publicKey: address,
          destination: input.destination,
          amount: input.amount,
          connection,
        })

        // Send transaction and await for signature
        signature = await signAndSendTransaction(transaction, minContextSlot)

        // Send transaction and await for signature
        await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed')

        console.log(signature)
        return signature
      } catch (error: unknown) {
        console.log('error', `Transaction failed! ${error}`, signature)

        return
      }
    },
    onSuccess: async (signature) => {
      console.log(signature)
      await Promise.all([
        client.invalidateQueries({
          queryKey: ['get-balance', { endpoint: connection.rpcEndpoint, address }],
        }),
        client.invalidateQueries({
          queryKey: ['get-signatures', { endpoint: connection.rpcEndpoint, address }],
        }),
      ])
    },
    onError: (error) => {
      console.error(`Transaction failed! ${error}`)
    },
  })
}
