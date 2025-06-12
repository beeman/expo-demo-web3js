import { PublicKey } from '@solana/web3.js'
import { AccountBalance, AccountButtonGroup, AccountTokens } from './account-ui'
import { ThemedView } from '@/components/ThemedView'

export function AccountDetailFeature({ address }: { address: PublicKey }) {
  return (
    <>
      <ThemedView style={{ marginTop: 24, alignItems: 'center' }}>
        <AccountBalance address={address} />
      </ThemedView>
      <ThemedView style={{ marginTop: 24, alignItems: 'center' }}>
        <AccountButtonGroup address={address} />
      </ThemedView>
      <ThemedView style={{ marginTop: 24, alignItems: 'center' }}>
        <AccountTokens address={address} />
      </ThemedView>
    </>
  )
}
