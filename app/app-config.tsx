import { Cluster, ClusterNetwork } from '@/components/cluster/cluster-provider'
import { clusterApiUrl } from '@solana/web3.js'

export interface AppConfig {
  name: string
  url: string
  clusters: Cluster[]
}

export function useAppConfig(): AppConfig {
  return {
    name: 'expo-demo-web3js',
    url: 'https://example.com',
    clusters: [
      {
        id: 'solana:devnet',
        name: 'Devnet',
        endpoint: clusterApiUrl('devnet'),
        network: ClusterNetwork.Devnet,
      },
      {
        id: 'solana:testnet',
        name: 'Testnet',
        endpoint: clusterApiUrl('testnet'),
        network: ClusterNetwork.Testnet,
      },
    ],
  }
}
