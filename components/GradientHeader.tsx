import { LinearGradient } from 'expo-linear-gradient'
import { HeaderTitle } from '@/components/HeaderTitle'

export const solanaPurple = '#9945FF'
export const solanaGreen = '#14F195'

export function GradientHeader({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <LinearGradient
      colors={[solanaPurple, solanaGreen]}
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      {title ? <HeaderTitle subtitle={subtitle} title={title} /> : null}
    </LinearGradient>
  )
}
