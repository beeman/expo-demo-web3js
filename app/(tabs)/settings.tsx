import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { SettingCluster } from '@/components/settings/SettingCluster'

export default function SettingsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#9945FF', dark: '#9945FF' }}
      headerImage={
        <Image
          source={require('@/assets/images/solana-gradient.png')}
          style={{
            height: 316,
            width: 518,
            bottom: 0,
            left: 0,
            position: 'absolute',
          }}
        />
      }
    >
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
