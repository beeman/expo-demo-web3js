import { ThemedText } from '@/components/ThemedText'
import { ClusterUiDropdown } from '@/components/cluster/cluster-ui'
import { ThemedView } from '@/components/ThemedView'
import { StyleSheet } from 'react-native'
import { useCluster } from '../cluster/cluster-data-access'

export function SettingCluster() {
  const { selectedCluster, clusters, setSelectedCluster } = useCluster()
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Cluster</ThemedText>
      <ClusterUiDropdown clusters={clusters} selectedCluster={selectedCluster} selectCluster={setSelectedCluster} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
  },
})
