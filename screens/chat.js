import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Contoh pesan awal
  const initialMessages = [
    { id: '1', text: 'Hi there!' },
    { id: '2', text: 'Hello! How can I help you?' },
    // ...pesan-pesan lainnya
  ];

  useEffect(() => {
    // Set pesan awal saat komponen dipasang
    setMessages(initialMessages);
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() === '') return; // Pastikan pesan tidak kosong

    const newMessage = {
      id: String(messages.length + 1),
      text: inputMessage,
    };

    // Tambah pesan baru ke daftar pesan
    setMessages([...messages, newMessage]);
    setInputMessage(''); // Reset input setelah mengirim pesan
  };

  const renderChatBubble = ({ item }) => {
    return (
      <View style={styles.messageBubble}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderChatBubble}
        keyExtractor={(item) => item.id}
        style={styles.chatContainer}
        inverted // Untuk mengatur tampilan chat dari bawah ke atas
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
          onSubmitEditing={sendMessage}
          style={styles.input}
        />
        {/* Button kirim pesan */}
        <Text style={styles.sendButton} onPress={sendMessage}>
          Send
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 16,
  },
  messageBubble: {
    backgroundColor: '#DCF8C6',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '80%', // Maksimum lebar pesan agar tidak terlalu lebar
    alignSelf: 'flex-start', // Untuk pesan yang diterima
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default Chat;
