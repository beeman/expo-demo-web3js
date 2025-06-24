import { useThemeColor } from '@/hooks/use-theme-color'
import { View, type ViewProps } from 'react-native'
import React from 'react'

export type UiViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export function AppView({ style, lightColor, darkColor, ...otherProps }: UiViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

  return <View style={[{ backgroundColor, gap: 8 }, style]} {...otherProps} />
}
