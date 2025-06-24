import React from 'react'
import { Alert, Modal, StyleSheet, View, ViewStyle } from 'react-native'
import { Button } from '@react-navigation/elements'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'

interface AppModalProps {
  children: React.ReactNode
  title: string
  hide: () => void
  show: boolean
  submit?: () => void
  submitDisabled?: boolean
  submitLabel?: string
  contentContainerStyle?: ViewStyle
}

export function AppModal({ children, title, hide, show, submit, submitLabel, submitDisabled }: AppModalProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            hide()
          }}
        >
          <View style={styles.centeredView}>
            <AppView style={styles.modalView}>
              <AppText type="default" style={{ marginBottom: 20 }}>
                {title}
              </AppText>
              {children}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                {submit ? (
                  <Button variant="filled" onPress={submit} disabled={submitDisabled}>
                    {submitLabel ?? 'Submit'}
                  </Button>
                ) : (
                  <View />
                )}

                <Button onPress={() => hide()} disabled={submitDisabled}>
                  Close
                </Button>
              </View>
            </AppView>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    margin: 20,
    // backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 35,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
