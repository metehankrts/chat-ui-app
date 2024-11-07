import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, useColorScheme, TouchableOpacity, SafeAreaView } from 'react-native';

const index = () => {
  const sizeOptions = ['Turkish', 'German', 'English',];
  const colorScheme = useColorScheme() ?? 'light';
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.header, { color: Colors[colorScheme].text }]}>Interface Language</Text>
        <View style={[styles.roundedView, { backgroundColor: Colors[colorScheme].rounded }]}>
          {sizeOptions.map(size => (
            <TouchableOpacity
              key={size}
              style={[styles.fontView]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.iconText, { color: Colors[colorScheme].text }]}>{size}</Text>
              {selectedSize === size && (
                <Image
                  source={Icons.sent}
                  style={[styles.icon, { tintColor: '#0066FF' }]}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
  },
  container: {
    padding: 16,
  },
  fontView: {
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
  icon: {
    width: 24,
    height: 24,
  },
  header: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  },
  roundedView: {
    width: '100%',
    padding: 8,
    borderRadius: 20,
  },
});
