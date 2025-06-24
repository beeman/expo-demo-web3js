import { AppView } from '@/components/app-view'
import { AppText } from '@/components/app-text'
import { PublicKey } from '@solana/web3.js'

export function AccountUiModalReceive({ address }: { address: PublicKey }) {
  return (
    <AppView>
      <AppText type="subtitle">Send assets to</AppText>
      <AppText type="defaultSemiBold">{address.toString()}</AppText>
      <AppText type="link" style={{ textAlign: 'center' }}>
        TODO: Add QR code
      </AppText>
    </AppView>
  )
}
