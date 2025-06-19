import { ThemedView } from '@/components/ThemedView'
import { DashboardUiCluster } from '@/components/dashboard/dashboard-ui-cluster'
import { DashboardUiAccount } from '@/components/dashboard/dashboard-ui-account'

export function DashboardFeature() {
  return (
    <ThemedView style={{ gap: 16 }}>
      <DashboardUiCluster />
      <DashboardUiAccount />
    </ThemedView>
  )
}
