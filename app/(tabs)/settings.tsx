import { StyleSheet } from 'react-native'
import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { SettingCluster } from '@/components/settings/SettingCluster'
import { LinearGradient } from '@/components/LinearGradient'

export default function SettingsScreen() {
  return (
    <ParallaxScrollView headerImage={<LinearGradient />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
      <ThemedText>Manage your app settings here.</ThemedText>
      <SettingCluster />
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
