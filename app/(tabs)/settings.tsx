import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { SettingCluster } from '@/components/settings/SettingCluster'
import { GradientHeader } from '@/components/GradientHeader'

export default function SettingsScreen() {
  return (
    <ParallaxScrollView header={<GradientHeader title="Settings" subtitle="Manage your app settings here." />}>
      <SettingCluster />
    </ParallaxScrollView>
  )
}
