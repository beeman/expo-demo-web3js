import type { PropsWithChildren, ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import { ThemedView } from '@/components/ThemedView'
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground'

export function ParallaxScrollView({
  children,
  header,
  headerHeight = 150,
}: PropsWithChildren<{
  header: ReactElement
  headerHeight?: number
}>) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollRef)
  const bottom = useBottomTabOverflow()
  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-headerHeight, 0, headerHeight],
          [-headerHeight / 2, 0, headerHeight * 0.75],
        ),
      },
      {
        scale: interpolate(scrollOffset.value, [-headerHeight, 0, headerHeight], [2, 1, 1]),
      },
    ],
  }))

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        <Animated.View style={[{ ...styles.header, height: headerHeight }, headerAnimatedStyle]}>
          {header}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
    overflow: 'hidden',
  },
})
