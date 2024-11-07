import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, useColorScheme, ScrollView, TouchableOpacity } from 'react-native';

const BlacklistItem = ({ name, avatar }) => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <TouchableOpacity style={styles.sizeOptionButton}>
      <Image source={avatar} style={styles.optionAvatar} />
      <Text style={[styles.optionText, { color: Colors[colorScheme].text }]}>{name}</Text>
      <Image source={Icons.next} style={[styles.optionIcon, { tintColor: '#0066FF' }]} />
    </TouchableOpacity>
  );
};

const Two = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const sizeOptions = [
    { name: 'Metehan Karataş', avatar: Images.metehan },
    { name: 'Jalime Güler', avatar: Images.avatar1 },
    { name: 'Melissa Williams', avatar: Images.avatar2 },
    { name: 'Abdul Karim', avatar: Images.avatar3 },
  ];

  return (
    <ScrollView style={styles.pageContainer} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={[styles.wishlistButton, { backgroundColor: Colors[colorScheme].rounded }]}>
        <Text style={[styles.wishlistText, { color: Colors[colorScheme].text }]}>Add someone to wishlist</Text>
        <Image source={Icons.add} style={styles.wishlistIcon} />
      </TouchableOpacity>

      <Text style={[styles.subtitleText, { color: Colors[colorScheme].text }]}>Second chance for them.</Text>

      <Text style={[styles.sectionHeader, { color: Colors[colorScheme].text }]}>Your Blacklist</Text>

      <View style={[styles.optionsContainer, { backgroundColor: Colors[colorScheme].rounded }]}>
        {sizeOptions.map((option) => (
          <BlacklistItem key={option.name} name={option.name} avatar={option.avatar} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Two;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 16,
  },
  wishlistButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    marginVertical: 8,
  },
  wishlistText: {
    fontSize: 18,
    fontWeight: '400',
  },
  wishlistIcon: {
    width: 24,
    height: 24,
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: '300',
    marginVertical: 8,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
  },
  optionsContainer: {
    width: '100%',
    padding: 8,
    borderRadius: 20,
  },
  sizeOptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 4,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '400',
    flex: 1,
    marginLeft: 8,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
