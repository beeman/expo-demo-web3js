import { View } from 'react-native'
import { ThemedText } from '@/components/ThemedText'

export function HeaderTitle({ subtitle, title }: { subtitle?: string; title: string }) {
  return (
    <View style={{ justifyContent: 'flex-end', height: '100%', padding: 16 }}>
      <ThemedText type="title" style={{ lineHeight: 42 }}>
        {title}
      </ThemedText>
      {subtitle ? <ThemedText type="default">{subtitle}</ThemedText> : null}
    </View>
  )
}
