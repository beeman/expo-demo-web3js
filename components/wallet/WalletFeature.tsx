import { Button, StyleSheet } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useMobileWallet } from '../solana/useMobileWallet'
import { useAuthorization } from '../solana/useAuthorization'

export function WalletFeature() {
  const { connect, disconnect } = useMobileWallet()
  const { selectedAccount } = useAuthorization()

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Wallet</ThemedText>

      {selectedAccount ? (
        <Button onPress={disconnect} title={'Disconnect'} />
      ) : (
        <Button
          onPress={async () => {
            console.log('connect')
            await connect()
            console.log('connected')
          }}
          title={'Connect'}
        />
      )}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
})
