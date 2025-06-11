import { ReactNode } from 'react'
import { ClusterProvider } from './cluster/cluster-data-access'

export function AppProviders({ children }: { children: ReactNode }) {
  return <ClusterProvider>{children}</ClusterProvider>
}
