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
      <TouchableOpacity style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded }]} onPress={() => navigation.navigate('screens/Privacy/two')}>
          <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Blocked Accounts</Text>
          <Image source={Icons.next} style={[styles.next, { tintColor: Colors[colorScheme].tint }]} />
      </TouchableOpacity>
      <Text style={[styles.definition, { color: Colors[colorScheme].text }]}>See your blocked fans.</Text>

      <View style={{ height: 24 }}/>

      <View style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded }]}>
          <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>Muted Accounts</Text>
          <Image source={Icons.next} style={[styles.next, { tintColor: Colors[colorScheme].tint }]} />
      </View>
      <Text style={[styles.definition, { color: Colors[colorScheme].text }]}>See your muted fans.</Text>

      <View style={{ height: 24 }}/>

      <TouchableOpacity>
        <View style={[styles.settingView, { backgroundColor: Colors[colorScheme].rounded, flexDirection: 'row' }]}>
          <Text style={[styles.iconText, { color: 'red' }]}>Delete this account</Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.definition, { color: Colors[colorScheme].text }]}>Delete this account.</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
