import { ParallaxScrollView } from '@/components/ParallaxScrollView'
import { WalletFeature } from '@/components/wallet/WalletFeature'
import { LinearGradient } from '@/components/LinearGradient'

export default function HomeScreen() {
  return (
    <ParallaxScrollView headerImage={<LinearGradient />}>
      <WalletFeature />
    </ParallaxScrollView>
  )
}
