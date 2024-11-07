import { StyleSheet, Text, View, SafeAreaView, useColorScheme, StatusBar, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import Message from '@/components/Message';
import { useNavigation } from 'expo-router';

const index = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const navigation = useNavigation();
  const [name, setname] = useState("");

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: 'transparent' }]}>
        
    <ImageBackground source={Images.background3} style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={[styles.topView, { backgroundColor: Colors[colorScheme].rounded }]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={Icons.back}
                style={[styles.icon, { tintColor: Colors[colorScheme].tint }]}
              />
            </TouchableOpacity>
            <Text style={[styles.name, { color: Colors[colorScheme].text }]}>Metehan Karataş</Text>
            <TouchableOpacity onPress={() => navigation.navigate('screens/ChatProfile/index')}>
              <Image
                source={Images.metehan}
                style={[styles.icon, { borderRadius: 100 }]}
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.midView}>
            <Message content="Are you alive? Hello there." time="12.00 am" isSender={true} />
            <Message content={"Yes. What about you?"} time={"12.05 am"} isSender={false} />
            <Message content={"Yes, me too."} time={"12.05 am"} isSender={true} />
            <Message content="Actually I wanted to plan a date with you." time="12.09 am" isSender={true} />
            <Message content="That sounds perfect." time="12.09 am" isSender={false} />
            <Message content={"I will get you at 5 then, is it ok?"} time={"12.10 am"} isSender={true} />
            <Message content={"Ok, I will be ready."} time={"12.12 am"} isSender={false} />
          </ScrollView>

          <View style={[styles.bottomView, { backgroundColor: Colors[colorScheme].rounded }]}>
            <TextInput
              value={name}
              placeholder="Type a message..."
              onChangeText={setname}
              style={[styles.input, { backgroundColor: Colors[colorScheme].background }]}
            />
            <TouchableOpacity>
              <Image
                source={Icons.send}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>

      </SafeAreaView>
  );
}

export default index;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'transparent',
  },
  safeView: {
    flex: 1,
  },
  icon: {
    height: 32,
    width: 32,
    marginHorizontal: 8,
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 18,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  midView: {
    flex: 1,
    width: '100%',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.light.rounded,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.light.background,
  },
});
