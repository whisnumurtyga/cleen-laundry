import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image , TouchableOpacity} from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const newMessage = {
      text: message,
      sender: "Anda",
    };


    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageList}>
        {messages.map((message) => (
          <View key={message.id} style={styles.message}>
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.messageTime}>{message.timestamp}</Text>
          </View>
        ))}
      </View>
      <View style={styles.messageInput}>
        <TextInput
          style={styles.messageInputField}
          value={message}
          onChangeText={(event) => setMessage(event.target.value)}
          placeholder="Ketik pesan..."
        />
        <Button
          title="Send"
          onPress={handleSendMessage}
          style={styles.messageButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
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
  messageButton: {
    marginLeft: 10,
    backgroundColor: "#2E6B60", // Change the background color here
    borderRadius: 5,
    padding: 10,
    color : "white",
  },
});

export default ChatScreen;
