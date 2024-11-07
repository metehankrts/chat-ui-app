import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

const Message = ({ content, time, isSender }) => {
  const colorScheme = useColorScheme() ?? 'light';

  const messageTextColor = isSender
    ? colorScheme === 'light' ? Colors.light.text : Colors.dark.text
    : '#fff';

  const timeTextColor = isSender
    ? colorScheme === 'light' ? Colors.light.text : Colors.dark.text
    : '#fff';

  return (
    <View
      style={[
        styles.messageView,
        isSender
          ? {
              backgroundColor: colorScheme === 'light' ? Colors.light.rounded : '#8A8A8A',
              alignSelf: 'flex-start',
              marginLeft: 12,
            }
          : {
              backgroundColor: colorScheme === 'light' ? '#007bff' : '#25D366',
              alignSelf: 'flex-end',
              marginRight: 12,
            },
      ]}
    >
      <Text style={[styles.messageText, { color: messageTextColor }]}>
        {content}
      </Text>
      <Text style={[styles.timeText, { color: timeTextColor }]}>
        {time}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageView: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  messageText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
});
