import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { useRouter } from 'expo-router'
import { Collapsible } from '@/components/Collapsible'
import { ellipsify } from '@/utils/ellipsify'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { WalletUiButtonDisconnect } from '@/components/solana/wallet-ui-button-disconnect'
import { WalletUiButtonConnect } from '@/components/solana/wallet-ui-button-connect'

export function DashboardUiAccount() {
  const { account } = useWalletUi()
  const router = useRouter()
  return (
    <Collapsible
      title={account ? `Connected to ${ellipsify(account.publicKey.toString(), 8)}` : 'Connect your wallet'}
      open
    >
      {account ? (
        <ThemedText>
          Go to the{' '}
          <ThemedText type="defaultSemiBold" onPress={() => router.navigate('/(tabs)/account')}>
            Account
          </ThemedText>{' '}
          tab to see more details.
        </ThemedText>
      ) : (
        <ThemedText>
          Use the <ThemedText type="defaultSemiBold">Connect</ThemedText> button to connect your wallet.
        </ThemedText>
      )}
      <ThemedView style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'flex-end', gap: 8 }}>
        {account ? <WalletUiButtonDisconnect /> : <WalletUiButtonConnect />}
      </ThemedView>
    </Collapsible>
  )
}
