import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { ellipsify } from '@/utils/ellipsify'
import { AppText } from '@/components/app-text'
import { WalletUiButtonDisconnect } from '@/components/solana/wallet-ui-button-disconnect'
import { WalletUiButtonConnect } from '@/components/solana/wallet-ui-button-connect'
import { AppView } from '@/components/app-view'

export function SettingsUiAccount() {
  const { account } = useWalletUi()
  return (
    <AppView>
      <AppText type="subtitle">Account</AppText>
      {account ? (
        <AppView style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <AppText>Connected to {ellipsify(account.publicKey.toString(), 8)}</AppText>
          <WalletUiButtonDisconnect />
        </AppView>
      ) : (
        <AppView style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <AppText>Connect your wallet.</AppText>
          <WalletUiButtonConnect />
        </AppView>
      )}
    </AppView>
  )
}
