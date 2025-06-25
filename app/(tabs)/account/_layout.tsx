import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="modal-airdrop" options={{ presentation: 'modal' }} />
      <Stack.Screen name="modal-receive" options={{ presentation: 'modal' }} />
      <Stack.Screen name="modal-send" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
