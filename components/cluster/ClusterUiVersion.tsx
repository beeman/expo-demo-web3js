import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Cluster } from './ClusterProvider'
import { useConnection } from '../solana/SolanaProvider'
import { ThemedText } from '@/components/ThemedText'

export function ClusterUiVersion({ selectedCluster }: { selectedCluster: Cluster }) {
  const connection = useConnection()
  const query = useQuery({
    queryKey: ['get-version', { selectedCluster }],
    queryFn: () =>
      connection.getVersion().then((version) => {
        return {
          core: version['solana-core'],
          features: version['feature-set'],
        }
      }),
  })

  return (
    <ThemedText>Version: {query.isLoading ? 'Loading...' : `${query.data?.core} (${query.data?.features})`}</ThemedText>
  )
}
