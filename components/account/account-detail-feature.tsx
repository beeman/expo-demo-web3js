import { AccountBalance, AccountTokens, AccountUiButtonGroup } from './account-ui'
import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { AppText } from '@/components/app-text'
import { ellipsify } from '@/utils/ellipsify'
import { WalletUiButtonConnect } from '@/components/solana/wallet-ui-button-connect'
import { AppView } from '@/components/app-view'

export function AccountDetailFeature() {
  const { account } = useWalletUi()

  return account ? (
    <>
      <AppView style={{ alignItems: 'center', gap: 4 }}>
        <AccountBalance address={account.publicKey} />
        <AppText style={{ opacity: 0.7 }}>{ellipsify(account.publicKey.toString(), 8)}</AppText>
      </AppView>
      <AppView style={{ marginTop: 16, alignItems: 'center' }}>
        <AccountUiButtonGroup address={account.publicKey} />
      </AppView>
      <AppView style={{ marginTop: 16, alignItems: 'center' }}>
        <AccountTokens address={account.publicKey} />
      </AppView>
    </>
  ) : (
    <AppView style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
      <AppText>Connect your wallet.</AppText>
      <WalletUiButtonConnect />
    </AppView>
  )
}
