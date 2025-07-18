// app/signup.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen() {
  const [form, setForm] = useState({
    fullName: '',
    idNumber: '',
    dob: '',
    device: '',
    insurer: '',
    policyNumber: '',
    policyValue: '',
  });

  const handleInput = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const connectWallet = () => {
    // Placeholder for WalletConnect logic
    Alert.alert('Wallet Connect', 'This will open WalletConnect modal in final version.');
  };

  const submitForm = () => {
    console.log('Submitted:', form);
    Alert.alert('Form Submitted', JSON.stringify(form, null, 2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>ProofPulse Sign Up</Text>

        <TextInput style={styles.input} placeholder="Full Name" onChangeText={v => handleInput('fullName', v)} />
        <TextInput style={styles.input} placeholder="ID Number" onChangeText={v => handleInput('idNumber', v)} />
        <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" onChangeText={v => handleInput('dob', v)} />
        <TextInput style={styles.input} placeholder="Preferred Fitness Device" onChangeText={v => handleInput('device', v)} />
        <TextInput style={styles.input} placeholder="Insurer" onChangeText={v => handleInput('insurer', v)} />
        <TextInput style={styles.input} placeholder="Policy Number" onChangeText={v => handleInput('policyNumber', v)} />
        <TextInput style={styles.input} placeholder="Policy Value" keyboardType="numeric" onChangeText={v => handleInput('policyValue', v)} />

        <TouchableOpacity style={styles.walletButton} onPress={connectWallet}>
          <Text style={styles.walletButtonText}>🔐 Connect Wallet</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <Button title="Submit" onPress={submitForm} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  walletButton: {
    backgroundColor: '#111',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  walletButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  spacer: {
    height: 20,
  },
});
