import { useAppConfig } from '@/constants/app-config'
import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'
import { AppExternalLink, AppExternalLinkProps } from '@/components/app-external-link'

export function SettingsAppConfig() {
  const { name, url } = useAppConfig()
  return (
    <AppView>
      <AppText type="subtitle">App Config</AppText>
      <AppText type="default">
        Name <AppText type="defaultSemiBold">{name}</AppText>
      </AppText>
      <AppText type="default">
        URL{' '}
        <AppText type="link">
          <AppExternalLink href={url as AppExternalLinkProps['href']}>{url}</AppExternalLink>
        </AppText>
      </AppText>
    </AppView>
  )
}
