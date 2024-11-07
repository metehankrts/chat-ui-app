import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import { Link, useNavigation } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, useColorScheme, Switch, ScrollView, TouchableOpacity } from 'react-native';

const Index = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  const themes = [
    Images.theme1, Images.theme2, Images.theme3,
    Images.theme4, Images.theme5, Images.theme6,
    Images.theme7, Images.theme8, Images.theme9,
  ];

  const getThemeRows = () => {
    const rows = [];
    for (let i = 0; i < themes.length; i += 3) {
      rows.push(themes.slice(i, i + 3));
    }
    return rows;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded }]}>
        <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Light/Dark Mode</Text>
        <Switch
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

    <Link href={'screens/Themes/two'} style={{marginTop:8,}}>
      <View style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded }]}>
        <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Font Size</Text>
        <Image source={Icons.next} style={[styles.next, { tintColor: Colors[colorScheme].tint }]} />
      </View>
    </Link>

      <View>
        <Text style={[styles.header, { color: Colors[colorScheme].text }]}>Recent Chats</Text>
        <View style={[styles.themeView, { backgroundColor: Colors[colorScheme].rounded }]}>
          {getThemeRows().map((row, rowIndex) => (
            <View key={rowIndex} style={styles.mapping}>
              {row.map((theme, index) => (
                <Image key={index} source={theme} style={styles.themeImages} />
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingView: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
    borderRadius: 20,
  },
  iconText: {
    fontSize: 18,
    fontWeight: '400',
    flex: 1,
    marginLeft: 8,
  },
  switch: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
  next: {
    width: 24,
    height: 24,
  },
  header: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 8,
  },
  themeView: {
    width: '100%',
    padding: 8,
    borderRadius: 20,
  },
  mapping: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  themeImages: {
    width: '30%',
    height: 150,
    borderRadius: 8,
  },
});
