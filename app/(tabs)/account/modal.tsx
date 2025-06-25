import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { Button } from '@react-navigation/elements'
import { AccountUiModalAirdrop } from '@/components/account/account-ui-modal-airdrop'
import { AccountUiModalSend } from '@/components/account/account-ui-modal-send'
import { AccountUiModalReceive } from '@/components/account/account-ui-modal-receive'

export default function AccountModalRoute() {
  const params = useLocalSearchParams()
  const router = useRouter()
  const { account } = useWalletUi()
  const pages = useModalPages()

  if (!account) {
    return router.navigate('/(tabs)/account')
  }

  const page = pages.find((p) => p.id === params.page)
  if (!page) {
    return router.navigate('/(tabs)/account')
  }

  return (
    <AppView style={{ flex: 1, padding: 16, gap: 16 }}>
      <AppView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <AppText type="title">{page.title}</AppText>
        <Button onPressIn={() => router.back()}>Back</Button>
      </AppView>
      {page.element}
    </AppView>
  )
}

function useModalPages() {
  const router = useRouter()
  const { account } = useWalletUi()

  return account
    ? [
        {
          id: 'airdrop',
          title: 'Airdrop',
          element: <AccountUiModalAirdrop back={() => router.navigate('/(tabs)/account')} />,
        },
        {
          id: 'send',
          title: 'Send',
          element: <AccountUiModalSend address={account.publicKey} />,
        },
        {
          id: 'receive',
          title: 'Receive',
          element: <AccountUiModalReceive address={account.publicKey} />,
        },
      ]
    : []
}
