import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, useColorScheme } from 'react-native';
import { useNavigation } from 'expo-router';

export default function ChatProfile() {

  const colorScheme = useColorScheme() ?? 'light';
  const navigation = useNavigation();

  const settings = [
    { icon: Icons.profile, label: 'Add to Contacts' },
    { icon: Icons.saved, label: 'Saved Messages' },
    { icon: Icons.notifications, label: 'Notifications' },
    { icon: Icons.themes, label: 'Themes' },
    { icon: Icons.privacy, label: 'Block' },
  ];

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: Colors[colorScheme].background }]}>
      <View style={styles.container}>

        {/* Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backView}>
          <Image
            source={Icons.back}
            style={[styles.back, { tintColor: Colors[colorScheme].tint }]}
          />
        </TouchableOpacity>

        {/* Profile View */}
        <View style={styles.profileView}>
          <Image source={Images.metehan} style={styles.profileImg} />
            <Text style={[styles.name, {color: Colors[colorScheme].text}]}>Metehan Karataş</Text>
            <Text style={[styles.number, {color: Colors[colorScheme].text}]}>+90 555 123 24 24</Text>
        </View>

        {/* Settings List */}
        {settings.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.settingView, {backgroundColor: Colors[colorScheme].rounded}]}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={[styles.iconText, { color: Colors[colorScheme].text}]}>{item.label}</Text>
            <Image source={Icons.next} style={[styles.next, {tintColor: Colors[colorScheme].tint}]} />
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
    padding: 16,
  },
  backView: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  back: {
    height: 32,
    width: 32,
  },
  profileImg: {
    width: 132,
    height: 132,
    borderRadius: 100,
  },
  profileView: {
    width: '100%',
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 8,
    textAlign: 'center'
  },
  number: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center'
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
