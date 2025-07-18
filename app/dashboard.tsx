import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Character Card */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' }}
            style={styles.avatar}
          />
          <Text style={styles.title}>Character Status</Text>
          <Text style={styles.text}><Text style={styles.bold}>Level:</Text> 7 - "Sweat Slayer"</Text>
          <Text style={styles.text}><Text style={styles.bold}>XP:</Text> 540 / 1000</Text>
          <ProgressBar progress={0.54} color="#FF00B4" style={styles.progress} />
          <Text style={styles.text}><Text style={styles.bold}>Badges:</Text> Early Bird, 10K Champion</Text>
        </View>

        {/* Blockchain Proof */}
        <View style={styles.card}>
          <Text style={styles.title}>Blockchain Proof</Text>
          <Text>HealthID NFT: ✅ Issued</Text>
          <Text>Verification Hash: 0x47d...a98e</Text>
          <Text style={styles.link}>View on Etherscan</Text>
          <Text style={styles.link}>Explorer</Text>
        </View>

        {/*Body Card */}
        <View style={styles.card}>
          <Text style={styles.bold}>Body Metrics</Text>
          <Text>Height: 169 cm</Text>
        </View>
        {/* Daily Activity Card */}
        <View style={styles.card}>
          <Text style={styles.bold}>Daily Activity</Text>
          <Text>Steps: 8,123</Text>
        </View>
        {/* Points & Rewards Card */}
        <View style={styles.card}>
          <Text style={styles.bold}>Points & Rewards</Text>
          <Text>Total Points: 1,250</Text>
        </View>
        {/* Daily Quests Card */}
        <View style={styles.card}>
          <Text style={styles.bold}>Daily Quests</Text>
          <View style={styles.smallCard}>
            <Text>Quest 1: Complete 5 steps</Text>
          </View>
          <View style={styles.smallCard}>
            <Text>Quest 2: Achieve 1000 XP</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>);
  }

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#3b3eff", // background matches the screenshot
    },
    content: {
      alignItems: "center",
      paddingVertical: 20, // spacing so it doesn’t stick to the top
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 20,
      marginVertical: 10,
      width: "90%",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
      alignItems: "center",
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginBottom: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 6,
    },
    text: {
      fontSize: 14,
      marginVertical: 2,
    },
    bold: {
      fontWeight: 'bold',
    },
    progress: {
      width: '100%',
      height: 6,
      borderRadius: 3,
      marginVertical: 8,
    },
    link: {
      color: '#5C6EFF',
      textDecorationLine: 'underline',
      marginTop: 4,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallCard: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 4,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
  });
