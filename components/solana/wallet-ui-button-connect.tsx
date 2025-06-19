import { Button } from '@react-navigation/elements'
import { useWalletUi } from '@/components/solana/use-wallet-ui'

export function WalletUiButtonConnect() {
  const { connect } = useWalletUi()

  return (
    <Button variant="filled" onPress={async () => await connect()}>
      Connect
    </Button>
  )
}
