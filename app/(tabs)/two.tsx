import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import { useNavigation } from 'expo-router';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, useColorScheme } from 'react-native';

export default function ProfileScreen() {

  const colorScheme = useColorScheme() ?? 'light';
  const navigation = useNavigation();

  const settings = [
    { icon: Icons.profile, label: 'Profile', onPress: () => {} },
    { icon: Icons.saved, label: 'Saved Messages', onPress: () => navigation.navigate('screens/Saved/index') },
    { icon: Icons.notifications, label: 'Notifications', onPress: () => navigation.navigate('screens/Notifications/index') },
    { icon: Icons.privacy, label: 'Privacy and Security', onPress: () => navigation.navigate('screens/Privacy/index') },
    { icon: Icons.language, label: 'Language', onPress: () => navigation.navigate('screens/Languages/index') },
    { icon: Icons.themes, label: 'Themes', onPress: () => navigation.navigate('screens/Themes/index') },
    { icon: Icons.logout, label: 'Logout', onPress: () => {} },
  ];


  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: Colors[colorScheme].background }]}>
      <View style={styles.container}>
        <View style={[styles.profileView, { backgroundColor: Colors[colorScheme].rounded }]}>
          <Image source={Images.metehan} style={styles.profileImg} />
          <View style={styles.profileRight}>
            <Text style={[styles.name, {color: Colors[colorScheme].text}]}>Metehan Karataş</Text>
            <Text style={[styles.number, {color: Colors[colorScheme].text}]}>+90 555 123 24 24</Text>
          </View>
        </View>

        {settings.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.settingView, {backgroundColor: Colors[colorScheme].rounded}]} onPress={item.onPress}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={[styles.iconText, { color: Colors[colorScheme].text}]}>{item.label}</Text>
            <Image source={Icons.next} style={[styles.next, {tintColor:Colors[colorScheme].tint}]} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    /* paddingTop: 48, //kaldırmayı unutma, sadece gösteriş için koydum */
    padding: 16,
  },
  profileImg: {
    width: 86,
    height: 86,
    borderRadius: 100,
  },
  profileView: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 4,
  },
  number: {
    fontSize: 14,
    fontWeight: '300',
  },
  profileRight: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  settingView: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 20,
  },
  icon: {
    height: 32,
    width: 32,
    borderRadius: 8,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginLeft: 16,
  },
  next: {
    width: 24,
    height: 24,
  },
});
