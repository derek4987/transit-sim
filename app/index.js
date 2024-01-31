import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View
				style={{
					height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
				}}>
				<StatusBar
				barStyle="light-content"
				hidden={false}
        translucent={false}
			/>
			</View>
      <View style={styles.main}>
        <Text style={styles.title}>Transit Sim</Text>
        <Text style={styles.subtitle}>Simulate your ticket</Text>
        
        <View style={styles.linkView}>
          <Link href="/home" style={styles.link}>Start</Link>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#244A9F",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    color: "white",
  },
  linkView: {
    height: "auto",
    width: 80,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    paddingTop: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 2,
    backgroundColor: "#fff",
    flex: 0,
    alignItems: "center",
  },
  link: {
    fontSize: 25,
  }
});
