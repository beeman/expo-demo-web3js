import { useAppConfig } from '@/app/app-config'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ExternalLink, ExternalLinkProps } from '@/components/ExternalLink'

export function SettingApp() {
  const { name, url } = useAppConfig()
  return (
    <ThemedView style={{ gap: 8, marginBottom: 8 }}>
      <ThemedText type="subtitle">App</ThemedText>
      <ThemedText type="default">
        Name <ThemedText type="defaultSemiBold">{name}</ThemedText>
      </ThemedText>
      <ThemedText type="default">
        URL{' '}
        <ThemedText type="link">
          <ExternalLink href={url as ExternalLinkProps['href']}>{url}</ExternalLink>
        </ThemedText>
      </ThemedText>
    </ThemedView>
  )
}
