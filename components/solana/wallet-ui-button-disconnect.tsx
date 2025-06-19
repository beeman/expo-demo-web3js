import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { Button } from '@react-navigation/elements'

export function WalletUiButtonDisconnect() {
  const { disconnect } = useWalletUi()

  return <Button onPress={async () => await disconnect()}>Disconnect</Button>
}
