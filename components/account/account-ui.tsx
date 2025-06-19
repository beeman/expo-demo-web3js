import { PublicKey } from '@solana/web3.js'
import {
  useGetBalance,
  useGetTokenAccountBalance,
  useGetTokenAccounts,
  useRequestAirdrop,
  useTransferSol,
} from './account-data-access'
import { ActivityIndicator, StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { AppModal } from '../AppModal'
import { ThemedView } from '@/components/ThemedView'
import { ellipsify } from '@/utils/ellipsify'
import { lamportsToSol } from '@/utils/lamports-to-sol'
import { Button } from '@react-navigation/elements'
import { WalletUiButtonDisconnect } from '@/components/solana/wallet-ui-button-disconnect'

export function AccountBalance({ address }: { address: PublicKey }) {
  const query = useGetBalance({ address })

  return (
    <View style={styles.accountBalance}>
      <ThemedText type="title">{query.data ? lamportsToSol(query.data) : '...'} SOL</ThemedText>
    </View>
  )
}

export function AccountButtonGroup({ address }: { address: PublicKey }) {
  const requestAirdrop = useRequestAirdrop({ address })
  const [showModalAirdrop, setShowModalAirdrop] = useState(false)
  const [showModalReceive, setShowModalReceive] = useState(false)
  const [showModalSend, setShowModalSend] = useState(false)

  return (
    <>
      <ModalAirdropRequest hide={() => setShowModalAirdrop(false)} show={showModalAirdrop} address={address} />
      <ModalTransferSol hide={() => setShowModalSend(false)} show={showModalSend} address={address} />
      <ModalReceiveSol hide={() => setShowModalReceive(false)} show={showModalReceive} address={address} />
      <ThemedView style={styles.accountButtonGroup}>
        <Button disabled={requestAirdrop.isPending} onPress={() => setShowModalAirdrop(true)}>
          Airdrop
        </Button>
        <Button onPress={() => setShowModalSend(true)}>Send</Button>
        <Button onPress={() => setShowModalReceive(true)}>Receive</Button>
        <WalletUiButtonDisconnect />
      </ThemedView>
    </>
  )
}

export function ModalAirdropRequest({ hide, show, address }: { hide: () => void; show: boolean; address: PublicKey }) {
  const requestAirdrop = useRequestAirdrop({ address })

  return (
    <AppModal
      title="Request Airdrop"
      hide={hide}
      show={show}
      submit={() => {
        requestAirdrop.mutateAsync(1).catch((err) => console.log(err))
      }}
      submitLabel="Request"
      submitDisabled={requestAirdrop.isPending}
    >
      <View style={{ padding: 4 }}>
        <ThemedText>Request an airdrop of 1 SOL to your connected account.</ThemedText>
      </View>
    </AppModal>
  )
}

export function ModalTransferSol({ hide, show, address }: { hide: () => void; show: boolean; address: PublicKey }) {
  const transferSol = useTransferSol({ address })
  const [destinationAddress, setDestinationAddress] = useState('')
  const [amount, setAmount] = useState('')
  return (
    <AppModal
      title="Send SOL"
      hide={hide}
      show={show}
      submit={() => {
        transferSol
          .mutateAsync({
            destination: new PublicKey(destinationAddress),
            amount: parseFloat(amount),
          })
          .then(() => hide())
      }}
      submitLabel="Send"
      submitDisabled={!destinationAddress || !amount}
    >
      <View style={{ padding: 20 }}>
        <ThemedText>Amount (SOL)</ThemedText>
        <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" style={{ marginBottom: 20 }} />
        <ThemedText>Destination Address</ThemedText>
        <TextInput value={destinationAddress} onChangeText={setDestinationAddress} />
      </View>
    </AppModal>
  )
}

export function ModalReceiveSol({ hide, show, address }: { hide: () => void; show: boolean; address: PublicKey }) {
  return (
    <AppModal title="Receive assets" hide={hide} show={show}>
      <View style={{ padding: 4 }}>
        <ThemedText selectable={true} type="default">
          You can receive assets by sending them to your public key:{'\n\n'}
          <ThemedText type="defaultSemiBold">{address.toBase58()}</ThemedText>
        </ThemedText>
      </View>
    </AppModal>
  )
}

export function AccountTokens({ address }: { address: PublicKey }) {
  let query = useGetTokenAccounts({ address })
  const items = query.data ?? []

  return (
    <>
      <ThemedText type="subtitle" style={{ marginBottom: 8 }}>
        Token Accounts
      </ThemedText>
      {query.isLoading && <ActivityIndicator animating={true} />}
      {query.isError && (
        <ThemedText style={{ padding: 8, backgroundColor: 'red' }}>Error: {query.error?.message.toString()}</ThemedText>
      )}
      {query.isSuccess && (
        <View style={{ padding: 0 }}>
          <ThemedView style={{ flexDirection: 'row', paddingHorizontal: 8, width: '100%' }}>
            <ThemedText style={{ flex: 1, fontWeight: 'bold' }}>Public Key</ThemedText>
            <ThemedText style={{ flex: 1, fontWeight: 'bold' }}>Mint</ThemedText>
            <ThemedText style={{ flex: 1, fontWeight: 'bold', textAlign: 'right' }}>Balance</ThemedText>
          </ThemedView>
          {query.data.length === 0 && (
            <View style={{ marginTop: 12 }}>
              <ThemedText>No token accounts found.</ThemedText>
            </View>
          )}

          {items.map((item) => (
            <ThemedView
              key={item.pubkey.toString()}
              style={{
                flexDirection: 'row',
                padding: 8,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            >
              <ThemedText style={{ flex: 1 }}>{ellipsify(item.pubkey.toString())}</ThemedText>
              <ThemedText style={{ flex: 1 }}>{ellipsify(item.account.data.parsed.info.mint)}</ThemedText>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <AccountTokenBalance address={item.pubkey} />
              </View>
            </ThemedView>
          ))}
        </View>
      )}
    </>
  )
}

export function AccountTokenBalance({ address }: { address: PublicKey }) {
  const query = useGetTokenAccountBalance({ address })
  return query.isLoading ? (
    <ActivityIndicator animating={true} />
  ) : query.data ? (
    <ThemedText>{query.data?.value.uiAmount}</ThemedText>
  ) : (
    <ThemedText>Error</ThemedText>
  )
}

const styles = StyleSheet.create({
  accountBalance: {
    marginTop: 12,
  },
  accountButtonGroup: {
    borderColor: 'red',
    gap: 4,
    flexDirection: 'row',
  },
  error: {
    color: 'red',
    padding: 8,
  },
})
