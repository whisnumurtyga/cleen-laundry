import AsyncStorage from '@react-native-async-storage/async-storage';

// Fungsi untuk mendaftar (sign up)
const signUp = async (userData) => {
    try {
      // Mendapatkan data user yang sudah ada (jika ada)
      const existingUsers = await AsyncStorage.getItem('users');
      let users = [];
      if (existingUsers !== null) {
        // Jika ada data user sebelumnya, ambil dan ubah menjadi array
        users = JSON.parse(existingUsers);
      }
  
      // Tambahkan user baru ke array
      users.push(userData);
  
      // Simpan data user baru ke AsyncStorage
      await AsyncStorage.setItem('users', JSON.stringify(users));
      return { success: true, message: 'Sign up successful' };
    } catch (error) {
      return { success: false, message: 'Sign up failed' };
    }
};

// Fungsi untuk login
const signIn = async (userData) => {
	console.log(userData)
    try {
      // Mendapatkan data user dari AsyncStorage
      const existingUsers = await AsyncStorage.getItem('users');
      if (existingUsers !== null) {
        const users = JSON.parse(existingUsers);
        console.log(users)

        const user = users.find((u) => u.email == userData.email);
        console.log("=> USER", user)
        console.log("=> USER DATA", userData)
        if (user && user.password === userData.password) {
          console.log(user.password === userData.password)
          // Update properti isSignIn pada objek user yang ditemukan
          user.isSignIn = true;

          // Simpan kembali data yang sudah diperbarui ke AsyncStorage
          await AsyncStorage.setItem('users', JSON.stringify(users));          
          return { success: true, message: 'Login successful', user };
      }
        return { success: false, message: 'Invalid email or password' };
      } 
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

export { signUp, signIn };
