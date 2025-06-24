import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'
import { Button } from '@react-navigation/elements'
import { useRouter } from 'expo-router'
import { AccountUiModalAirdrop } from '@/components/account/account-ui-modal-airdrop'
import { useWalletUi } from '@/components/solana/use-wallet-ui'

export default function ModalAirdrop() {
  const router = useRouter()
  const { account } = useWalletUi()
  if (!account) {
    return router.navigate('/(tabs)/account')
  }

  return (
    <AppView style={{ flex: 1, padding: 16, gap: 16 }}>
      <AppView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <AppText type="title">Airdrop</AppText>
        <Button onPressIn={() => router.back()}>Back</Button>
      </AppView>
      <AccountUiModalAirdrop back={() => router.navigate('/(tabs)/account')} />
    </AppView>
  )
}
