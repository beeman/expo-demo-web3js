import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { SettingCluster } from '@/components/settings/SettingCluster'
import { GradientHeader } from '@/components/GradientHeader'
import { ThemedText } from '@/components/ThemedText'
import { SettingApp } from '@/components/settings/setting-app'

export default function SettingsScreen() {
  return (
    <ParallaxScrollView header={<GradientHeader title="Settings" subtitle="Manage your app settings here." />}>
      <SettingApp />
      <SettingCluster />
      <ThemedText type="default" style={{ opacity: 0.5, fontSize: 14 }}>
        Configure app info and clusters in{' '}
        <ThemedText type="defaultSemiBold" style={{ fontSize: 14 }}>
          app/app-config.tsx
        </ThemedText>
        .
      </ThemedText>
    </ParallaxScrollView>
  )
}
