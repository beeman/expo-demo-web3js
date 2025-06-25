import React, { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppView, AppViewProps } from '@/components/app-view'

export function AppPage({ children, ...props }: PropsWithChildren<AppViewProps>) {
  return (
    <AppView style={{ flex: 1 }} {...props}>
      <SafeAreaView style={{ flex: 1, gap: 16, paddingHorizontal: 16 }}>{children}</SafeAreaView>
    </AppView>
  )
}
