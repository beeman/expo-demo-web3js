import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { StyleSheet } from 'react-native'
import { useCluster } from '../cluster/ClusterProvider'
import { ClusterUiVersion } from '@/components/cluster/ClusterUiVersion'
import { ThemedDropdown } from '@/components/ThemedDropdown'
import { ClusterUiGenesisHash } from '@/components/cluster/cluster-ui-genesis-hash'

export function SettingCluster() {
  const { selectedCluster, clusters, setSelectedCluster } = useCluster()
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Cluster</ThemedText>
      <ClusterUiVersion selectedCluster={selectedCluster} />
      <ClusterUiGenesisHash selectedCluster={selectedCluster} />
      <ThemedDropdown
        items={clusters.map((c) => c.name)}
        selectedItem={selectedCluster.name}
        selectItem={(name) => setSelectedCluster(clusters.find((c) => c.name === name)!)}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
  },
})
