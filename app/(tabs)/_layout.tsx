import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import { UiIconSymbol } from '@/components/ui/ui-icon-symbol'
import UiTabBarBackground from '@/components/ui/ui-tab-bar-background'
import { Colors } from '@/constants/colors'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { WalletUiHeaderIcon } from '@/components/solana/wallet-ui-header-icon'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerRight: () => <WalletUiHeaderIcon />,
        tabBarBackground: UiTabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
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
