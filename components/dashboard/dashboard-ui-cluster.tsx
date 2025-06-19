import { useCluster } from '@/components/cluster/ClusterProvider'
import { useRouter } from 'expo-router'
import { Collapsible } from '@/components/Collapsible'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { ClusterUiVersion } from '@/components/cluster/ClusterUiVersion'
import { ClusterUiGenesisHash } from '@/components/cluster/cluster-ui-genesis-hash'
import { Button } from '@react-navigation/elements'

export function DashboardUiCluster() {
  const { selectedCluster } = useCluster()
  const router = useRouter()

  return (
    <Collapsible title={`Connected to ${selectedCluster.name}`}>
      <ThemedText>
        Go to the{' '}
        <ThemedText type="defaultSemiBold" onPress={() => router.navigate('/(tabs)/settings')}>
          Settings
        </ThemedText>{' '}
        tab to change the cluster.
      </ThemedText>

      <ThemedView style={{ marginTop: 16 }}>
        <ClusterUiVersion selectedCluster={selectedCluster} />
        <ClusterUiGenesisHash selectedCluster={selectedCluster} />
      </ThemedView>
      <ThemedView style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'flex-end', gap: 8 }}>
        <Button onPress={() => router.navigate('/(tabs)/settings')}>Settings</Button>
      </ThemedView>
    </Collapsible>
  )
}