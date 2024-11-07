import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, useColorScheme, Switch, ScrollView, TouchableOpacity } from 'react-native';

const Index = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const navigation = useNavigation();
  const [isChatNotificationsEnabled, setIsChatNotificationsEnabled] = useState(true);
  const [isGroupNotificationsEnabled, setIsGroupNotificationsEnabled] = useState(true);

  const toggleChatSwitch = () => setIsChatNotificationsEnabled(previousState => !previousState);
  const toggleGroupSwitch = () => setIsGroupNotificationsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={[styles.header, { color: Colors[colorScheme].text }]}>Chat Notifications</Text>
      <View style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded }]}>
        <View style={styles.notificationView}>
          <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Show Notifications</Text>
          <Switch
            style={styles.switch}
            onValueChange={toggleChatSwitch}
            value={isChatNotificationsEnabled}
          />
        </View>
        <TouchableOpacity style={styles.ringtoneView} onPress={() => navigation.navigate('screens/Notifications/two')}>
          <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Ringtones</Text>
          <Image source={Icons.next} style={[styles.next, { tintColor: Colors[colorScheme].tint }]} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.definition, { color: Colors[colorScheme].text }]}>Change ringtones and notification status of all chats.</Text>

      <View style={{ height: 24 }}/>

      <Text style={[styles.header, { color: Colors[colorScheme].text }]}>Group Notifications</Text>
      <View style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded }]}>
        <View style={styles.notificationView}>
          <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Show Notifications</Text>
          <Switch
            style={styles.switch}
            onValueChange={toggleGroupSwitch}
            value={isGroupNotificationsEnabled}
          />
        </View>
        <TouchableOpacity style={styles.ringtoneView}>
          <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Ringtones</Text>
          <Image source={Icons.next} style={[styles.next, { tintColor: Colors[colorScheme].tint }]} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.definition, { color: Colors[colorScheme].text }]}>Change ringtones and notification status of all groups.</Text>

      <View style={{ height: 24 }}/>

      <TouchableOpacity>
        <View style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded, flexDirection: 'row' }]}>
          <Text style={[styles.iconText, { color: 'red' }]}>Change to default settings</Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.definition, { color: Colors[colorScheme].text }]}>Restore default settings.</Text>
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
    borderRadius: 20,
    marginVertical: 4,
  },
  notificationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ringtoneView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    width: '100%',
  },
  iconText: {
    fontSize: 18,
    fontWeight: '400',
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
  definition: {
    fontSize: 12,
    fontWeight: '300',
    margin: 8,
    paddingLeft: 8,
  },
});
