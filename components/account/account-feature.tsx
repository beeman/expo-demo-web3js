import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { AppText } from '@/components/app-text'
import { ellipsify } from '@/utils/ellipsify'
import { WalletUiButtonConnect } from '@/components/solana/wallet-ui-button-connect'
import { AppView } from '@/components/app-view'
import { AppPage } from '@/components/app-page'
import { AccountUiButtons } from './account-ui-buttons'
import { AccountUiBalance } from '@/components/account/account-ui-balance'
import { AccountUiTokenAccounts } from '@/components/account/account-ui-token-accounts'

export function AccountFeature() {
  const { account } = useWalletUi()

  return account ? (
    <AppPage>
      <AppView style={{ alignItems: 'center', gap: 4 }}>
        <AccountUiBalance address={account.publicKey} />
        <AppText style={{ opacity: 0.7 }}>{ellipsify(account.publicKey.toString(), 8)}</AppText>
      </AppView>
      <AppView style={{ marginTop: 16, alignItems: 'center' }}>
        <AccountUiButtons />
      </AppView>
      <AppView style={{ marginTop: 16, alignItems: 'center' }}>
        <AccountUiTokenAccounts address={account.publicKey} />
      </AppView>
    </AppPage>
  ) : (
    <AppView style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
      <AppText>Connect your wallet.</AppText>
      <WalletUiButtonConnect />
    </AppView>
  )
}
