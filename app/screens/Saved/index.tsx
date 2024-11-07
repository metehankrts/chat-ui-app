import Message from '@/components/Message';
import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';

const Index = () => {
    const colorScheme = useColorScheme() ?? 'light';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.messageView}>

        <Image source={Images.avatar1} style={styles.avatar} />

        <View style={styles.leftView}>
          <Text style={[styles.name, {color: Colors[colorScheme].text}]}>Jalime Güler</Text>
          <Message content="Did you make the homework?" time="09.08 PM" isSender={true} />
        </View>

        <View style={styles.rightView}>
          <Image source={Icons.next} style={[styles.icon, {tintColor: Colors[colorScheme].tint}]} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.messageView}>

        <Image source={Images.metehan} style={styles.avatar} />

        <View style={styles.leftView}>
        <Text style={[styles.name, {color: Colors[colorScheme].text}]}>Metehan Karataş</Text>
          <Message content="Are you alive? Hello there." time="17:51 AM" isSender={true} />
        </View>

        <View style={styles.rightView}>
        <Image source={Icons.next} style={[styles.icon, {tintColor: Colors[colorScheme].tint}]} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageView: {
    flexDirection: 'row',
   /*  alignItems: 'center', */
    paddingVertical: 4,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  leftView: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 4,
  },
  rightView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  date: {
    fontSize: 12,
    fontWeight: '300'
  },
  icon: {
    height: 32,
    width: 32,
  },
});
