import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const newMessage = {
      id: messages.length.toString(), // Unique identifier for each message
      text: message,
      sender: "Anda",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.timestamp}</Text>
          </View>
        )}
      />

      <View style={styles.messageInput}>
        <TextInput
          style={styles.messageInputField}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Ketik pesan..."
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#eee",
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: "#666",
  },
  messageInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  messageInputField: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#DBEFEC",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
});

export default ChatScreen;
