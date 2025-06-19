import { AccountBalance, AccountButtonGroup, AccountTokens } from './account-ui'
import { ThemedView } from '@/components/ThemedView'
import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { ThemedText } from '@/components/ThemedText'
import { ellipsify } from '@/utils/ellipsify'
import { WalletUiButtonConnect } from '@/components/solana/wallet-ui-button-connect'

export function AccountDetailFeature() {
  const { account } = useWalletUi()

  return account ? (
    <>
      <ThemedView style={{ alignItems: 'center', gap: 4 }}>
        <AccountBalance address={account.publicKey} />
        <ThemedText style={{ opacity: 0.7 }}>{ellipsify(account.publicKey.toString(), 8)}</ThemedText>
      </ThemedView>
      <ThemedView style={{ marginTop: 16, alignItems: 'center' }}>
        <AccountButtonGroup address={account.publicKey} />
      </ThemedView>
      <ThemedView style={{ marginTop: 16, alignItems: 'center' }}>
        <AccountTokens address={account.publicKey} />
      </ThemedView>
    </>
  ) : (
    <WalletUiButtonConnect />
  )
}
