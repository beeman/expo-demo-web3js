import { Cluster } from '@/components/cluster/ClusterProvider'
import { useConnection } from '@/components/solana/SolanaProvider'
import { useQuery } from '@tanstack/react-query'
import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { ellipsify } from '@/utils/ellipsify'

export function ClusterUiGenesisHash({ selectedCluster }: { selectedCluster: Cluster }) {
  const connection = useConnection()
  const query = useQuery({
    queryKey: ['get-genesis-hash', { selectedCluster }],
    queryFn: () => connection.getGenesisHash(),
  })

  return <ThemedText>Genesis Hash: {query.isLoading ? 'Loading...' : `${ellipsify(query.data, 8)}`}</ThemedText>
}
