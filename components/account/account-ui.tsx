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
import { AppText } from '@/components/app-text'
import { AppModal } from '../app-modal'
import { ellipsify } from '@/utils/ellipsify'
import { lamportsToSol } from '@/utils/lamports-to-sol'
import { Button } from '@react-navigation/elements'
import { WalletUiButtonDisconnect } from '@/components/solana/wallet-ui-button-disconnect'
import { AppView } from '@/components/app-view'

export function AccountBalance({ address }: { address: PublicKey }) {
  const query = useGetBalance({ address })

  return (
    <View style={styles.accountBalance}>
      <AppText type="title">
        {query.isLoading ? <ActivityIndicator /> : query.data ? lamportsToSol(query.data) : '0'} SOL
      </AppText>
    </View>
  )
}

export function AccountUiButtonGroup({ address }: { address: PublicKey }) {
  const requestAirdrop = useRequestAirdrop({ address })
  const [showModalAirdrop, setShowModalAirdrop] = useState(false)
  const [showModalReceive, setShowModalReceive] = useState(false)
  const [showModalSend, setShowModalSend] = useState(false)

  return (
    <>
      <ModalAirdropRequest hide={() => setShowModalAirdrop(false)} show={showModalAirdrop} address={address} />
      <ModalTransferSol hide={() => setShowModalSend(false)} show={showModalSend} address={address} />
      <ModalReceiveSol hide={() => setShowModalReceive(false)} show={showModalReceive} address={address} />
      <AppView style={styles.accountButtonGroup}>
        <Button disabled={requestAirdrop.isPending} onPress={() => setShowModalAirdrop(true)}>
          Airdrop
        </Button>
        <Button onPress={() => setShowModalSend(true)}>Send</Button>
        <Button onPress={() => setShowModalReceive(true)}>Receive</Button>
        <WalletUiButtonDisconnect />
      </AppView>
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
        <AppText>Request an airdrop of 1 SOL to your connected account.</AppText>
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
        <AppText>Amount (SOL)</AppText>
        <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" style={{ marginBottom: 20 }} />
        <AppText>Destination Address</AppText>
        <TextInput value={destinationAddress} onChangeText={setDestinationAddress} />
      </View>
    </AppModal>
  )
}

export function ModalReceiveSol({ hide, show, address }: { hide: () => void; show: boolean; address: PublicKey }) {
  return (
    <AppModal title="Receive assets" hide={hide} show={show}>
      <View style={{ padding: 4 }}>
        <AppText selectable={true} type="default">
          You can receive assets by sending them to your public key:{'\n\n'}
          <AppText type="defaultSemiBold">{address.toBase58()}</AppText>
        </AppText>
      </View>
    </AppModal>
  )
}

export function AccountTokens({ address }: { address: PublicKey }) {
  let query = useGetTokenAccounts({ address })
  const items = query.data ?? []

  return (
    <>
      <AppText type="subtitle" style={{ marginBottom: 8 }}>
        Token Accounts
      </AppText>
      {query.isLoading && <ActivityIndicator animating={true} />}
      {query.isError && (
        <AppText style={{ padding: 8, backgroundColor: 'red' }}>Error: {query.error?.message.toString()}</AppText>
      )}
      {query.isSuccess && (
        <View style={{ padding: 0 }}>
          <AppView style={{ flexDirection: 'row', paddingHorizontal: 8, width: '100%' }}>
            <AppText style={{ flex: 1, fontWeight: 'bold' }}>Public Key</AppText>
            <AppText style={{ flex: 1, fontWeight: 'bold' }}>Mint</AppText>
            <AppText style={{ flex: 1, fontWeight: 'bold', textAlign: 'right' }}>Balance</AppText>
          </AppView>
          {query.data.length === 0 && (
            <View style={{ marginTop: 12 }}>
              <AppText>No token accounts found.</AppText>
            </View>
          )}

          {items.map((item) => (
            <AppView
              key={item.pubkey.toString()}
              style={{
                flexDirection: 'row',
                padding: 8,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            >
              <AppText style={{ flex: 1 }}>{ellipsify(item.pubkey.toString())}</AppText>
              <AppText style={{ flex: 1 }}>{ellipsify(item.account.data.parsed.info.mint)}</AppText>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <AccountTokenBalance address={item.pubkey} />
              </View>
            </AppView>
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
    <AppText>{query.data?.value.uiAmount}</AppText>
  ) : (
    <AppText>Error</AppText>
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
