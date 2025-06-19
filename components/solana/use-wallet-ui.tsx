import { useMobileWallet } from '@/components/solana/useMobileWallet'
import { useAuthorization } from '@/components/solana/useAuthorization'

export function useWalletUi() {
  const { connect, disconnect, signAndSendTransaction, signMessage, signIn } = useMobileWallet()
  const { selectedAccount } = useAuthorization()

  return {
    account: selectedAccount,
    connect,
    disconnect,
    signAndSendTransaction,
    signIn,
    signMessage,
  }
}
