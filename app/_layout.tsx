import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? Colors.dark.rounded : Colors.light.background,
          },
          headerTintColor: '#0066FF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text,
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="screens/ChatDetail/index" options={{ headerShown: false, title: 'Chat Detail' }} />
        <Stack.Screen name="screens/ChatProfile/index" options={{ headerShown: false, title: 'Chat Profile' }} />

        <Stack.Screen name="screens/Themes/index" options={{ headerShown: true, title: 'Themes' }} />
        <Stack.Screen name="screens/Themes/two" options={{ headerShown: true, title: 'Font Size' }} />

        <Stack.Screen name="screens/Saved/index" options={{ headerShown: true, title: 'Saved Messages' }} />

        <Stack.Screen name="screens/Privacy/index" options={{ headerShown: true, title: 'Privacy and Security' }} />
        <Stack.Screen name="screens/Privacy/two" options={{ headerShown: true, title: 'Blocked Accounts' }} />

        <Stack.Screen name="screens/Languages/index" options={{ headerShown: true, title: 'Languages' }} />

        <Stack.Screen name="screens/Notifications/index" options={{ headerShown: true, title: 'Notifications' }} />
        <Stack.Screen name="screens/Notifications/two" options={{ headerShown: true, title: 'Ringtones' }} />
      </Stack>
    </ThemeProvider>
  );
}
