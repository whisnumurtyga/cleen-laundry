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
const login = async (email, password) => {
    try {
      // Mendapatkan data user dari AsyncStorage
      const existingUsers = await AsyncStorage.getItem('users');
      if (existingUsers !== null) {
        const users = JSON.parse(existingUsers);
  
        // Cek apakah ada user dengan email yang cocok
        const user = users.find((u) => u.email === email);
  
        if (user && user.password === password) {
          return { success: true, message: 'Login successful', user };
        }
      }
      return { success: false, message: 'Invalid email or password' };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

export { signUp, login };
