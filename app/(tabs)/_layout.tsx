import { Tabs } from 'expo-router'
import React from 'react'
import { UiIconSymbol } from '@/components/ui/ui-icon-symbol'
import { Colors } from '@/constants/colors'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { WalletUiDropdown } from '@/components/solana/wallet-ui-dropdown'
import { View } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerRight: () => (
          <View style={{ paddingRight: 16 }}>
            <WalletUiDropdown />
          </View>
        ),
      }}
    >
      {/* The index redirects to the account screen */}
      <Tabs.Screen name="index" options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <UiIconSymbol size={28} name="wallet.pass.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <UiIconSymbol size={28} name="gearshape.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="dev"
        options={{
          title: 'Development',
          tabBarIcon: ({ color }) => <UiIconSymbol size={28} name="ladybug.fill" color={color} />,
        }}
      />
    </Tabs>
  )
}
