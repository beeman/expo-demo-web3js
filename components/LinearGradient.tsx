import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient'
import { type PropsWithChildren } from 'react'

export function LinearGradient({ children }: PropsWithChildren) {
  return (
    <ExpoLinearGradient
      colors={['#9945FF', '#14F195']}
      style={{
        height: '100%',
        width: '100%',
      }}
      start={{ x: 0, y: 1 }} // Bottom-left corner
      end={{ x: 1, y: 0 }} // Top-right corner
    >
      {children}
    </ExpoLinearGradient>
  )
}
