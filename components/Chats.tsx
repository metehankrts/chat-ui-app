import { Image, StyleSheet, Text, View, useColorScheme, ImageStyle } from 'react-native';
import React from 'react';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import Colors from '@/constants/Colors';

interface ChatsProps {
  avatar: any;
  name: string;
  sentText?: string;
  time: string;
  sentIcon?: any;
  unreadCount?: number; // Okunmamış mesaj sayısı
  avatarStyle?: ImageStyle; // Avatar stilini props olarak alıyoruz
}

const Chats: React.FC<ChatsProps> = ({ avatar, name, sentText, time, sentIcon, unreadCount, avatarStyle }) => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View style={[styles.chatView, { backgroundColor: Colors[colorScheme].rounded }]}>
      <Image source={avatar} style={[styles.avatar, avatarStyle]} />
      <View style={styles.chatInfo}>
        <View style={styles.chatLeft}>
          <Text style={[styles.name, { color: Colors[colorScheme].text }]}>{name}</Text>
          {sentText && <Text style={styles.text}>{sentText}</Text>}
        </View>
        <View style={styles.chatRight}>
          <Text style={[styles.time, { color: Colors[colorScheme].text }]}>{time}</Text>
          {sentIcon ? (
            <Image source={sentIcon} style={[styles.sentIcon, { tintColor: Colors[colorScheme].tint }]} />
          ) : unreadCount && unreadCount > 0 ? (
            <View style={styles.unreadCircle}>
              <Text style={styles.unreadText}>{unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chatView: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 8,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 100,
  },
  chatInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  chatLeft: {
    alignItems: 'flex-start',
  },
  chatRight: {
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 8,
  },
  sentIcon: {
    width: 20,
    height: 20,
  },
  unreadCircle: {
    backgroundColor: '#36C65C',
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 10,
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
