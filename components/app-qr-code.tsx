import React from 'react'
import QRCode from 'react-qr-code'
import { AppView, AppViewProps } from '@/components/app-view'

export function AppQrCode({ value, style = {}, ...props }: AppViewProps & { value: string }) {
  return (
    <AppView style={{ backgroundColor: 'white', marginHorizontal: 'auto', padding: 16 }} {...props}>
      <QRCode value={value} />
    </AppView>
  )
}
