import { Image } from 'expo-image'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { WalletFeature } from '@/components/wallet/WalletFeature'

export default function HomeScreen() {
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
      <WalletFeature />
    </ParallaxScrollView>
  )
}
