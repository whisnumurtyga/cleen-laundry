import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleUpdateProfile = () => {
    console.log("Updating profile...");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/profile.png")} />
      <Text style={styles.title}>Ganti Foto</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChange={handleChangeName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChange={handleChangeEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChange={handleChangePhone}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChange={handleChangePassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChange={handleChangeAddress}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#2E6B60",
          padding: 10,
          borderRadius: 10, // Adjust the value to control the amount of curve
          alignSelf: "center", // Center the button horizontally
          marginTop: 10, // Add margin at the top if needed
          height: 50,
          width: 315,
        }}
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Update
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#2E6B60",
          padding: 10,
          borderRadius: 10, // Adjust the value to control the amount of curve
          alignSelf: "center", // Center the button horizontally
          marginTop: 10, // Add margin at the top if needed
          height: 50,
          width: 350,
        }}
        onPress={() => navigation.navigate("DriverScreen")}
      >
        <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
          Lacak Driver
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E6B60",
  },
  inputContainer: {
    width: "80%",
    margin: 10,
  },
  label: {
    fontSize: 16,
    color: "#2E6B60",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
    margin: 10,
  },
});

export default ProfileScreen;
