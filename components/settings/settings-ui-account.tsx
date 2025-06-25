import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { ellipsify } from '@/utils/ellipsify'
import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'
import { WalletUiConnectButton, WalletUiDisconnectButton } from '@/components/solana/wallet-ui-dropdown'

export function SettingsUiAccount() {
  const { account } = useWalletUi()
  return (
    <AppView>
      <AppText type="subtitle">Account</AppText>
      {account ? (
        <AppView style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <AppText>Connected to {ellipsify(account.publicKey.toString(), 8)}</AppText>
          <WalletUiDisconnectButton />
        </AppView>
      ) : (
        <AppView style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <AppText>Connect your wallet.</AppText>
          <WalletUiConnectButton />
        </AppView>
      )}
    </AppView>
  )
}
