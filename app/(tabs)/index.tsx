import Chats from '@/components/Chats';
import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';


export default function ChatsScreen() {

  const colorScheme = useColorScheme() ?? 'light';
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: Colors[colorScheme].background }]}>
    <View style={styles.container}>

      <View style={[styles.topView, {backgroundColor: Colors[colorScheme].rounded}]}>
        <Image source={Icons.contact} style={[styles.icon, {tintColor: Colors[colorScheme].tint}]}/>
        <Text style={[styles.topViewText, {color: Colors[colorScheme].text}]}>Chats</Text>
        <Image source={Icons.add} style={styles.icon}/>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={[styles.chatsView, {backgroundColor: Colors[colorScheme].rounded}]}>
      <Text style={[styles.header, { color: Colors[colorScheme].text }]}>Recent Chats</Text>
      <TouchableOpacity onPress={() => navigation.navigate('screens/ChatDetail/index')}>
      <Chats
        avatar={Images.metehan}
        name="Metehan Karataş"
        sentText="I am ready for..."
        time="11:01"
        unreadCount={2}
      />
      </TouchableOpacity>
      <Chats
        avatar={Images.avatar1}
        name="Jalime Güler"
        sentText="Are you sure?"
        time="11:01"
        unreadCount={2}
      />
      <Chats
        avatar={Images.avatar2}
        name="Melissa Williams"
        sentText="Abdul is typing..."
        time="11:00"
        sentIcon={Icons.seen}
      />
      <Chats
        avatar={Images.avatar3}
        name="Abdul Karim"
        sentText="Abdul is typing..."
        time="10:55"
        sentIcon={Icons.sent}
      />
      </View>

      <View style={[styles.chatsView, {backgroundColor: Colors[colorScheme].rounded}]}>
      <Text style={[styles.header, { color: Colors[colorScheme].text }]}>Recent Chats</Text>
      <Chats
        avatar={Images.group1}
        name="Study Group"
        sentText="I have not seen you f..."
        time="11:01"
        unreadCount={3}
        avatarStyle={{borderRadius: 16}}
      />
      <Chats
        avatar={Images.group2}
        name="Workplace"
        sentText="Abdul and Melissa is typing..."
        time="11:00"
        sentIcon={Icons.seen}
        avatarStyle={{borderRadius: 16}}
      />
      </View>
      </ScrollView>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 8,
  },
  safeView: {
    flex: 1,
  },
  topView:{
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 18,
    /* borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20, */
    borderRadius: 20,
    marginVertical: 4,
  },
  topViewText:{
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
  icon: {
    height: 32,
    width: 32,
  },
  chatsView:{
    width:'100%',
    flexDirection: 'column',
    padding: 18,
    borderRadius: 20,
    marginVertical: 4,
  },
  header:{
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  }
});