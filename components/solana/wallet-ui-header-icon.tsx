// import { Button } from 'expo-router'
import { useWalletUi } from '@/components/solana/use-wallet-ui'
import React from 'react'
import { AppText } from '@/components/app-text'
import { UiIconSymbol } from '@/components/ui/ui-icon-symbol'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/core'
import { ellipsify } from '@/utils/ellipsify'

export function WalletUiHeaderIcon() {
  const { colors } = useTheme()
  const { account, connect, disconnect } = useWalletUi()

  return (
    <TouchableOpacity
      onPress={() => (account ? disconnect() : connect())}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 50,
      }}
    >
      <UiIconSymbol name="wallet.pass.fill" color="white" />
      <AppText>{account ? ellipsify(account.publicKey.toString()) : 'Connect'}</AppText>
    </TouchableOpacity>
  )
}
