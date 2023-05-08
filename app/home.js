import React, { useState } from "react";
import { View, Text, SafeAreaView, Button, StatusBar, StyleSheet, TextInput } from "react-native";
import { Link, useRouter } from "expo-router";

const home = () => {
  const router = useRouter();

	const [letter, setLetter] = useState('');
	const [color, setColor] = useState('');

	// date and time inputs
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yy = String(today.getFullYear()).slice(-2);
	let hours = today.getHours() + 2;
	let minutes = String(today.getMinutes()).padStart(2, '0');

	const todaysDate = `${mm}/${dd}/${yy}`;

	function getTime() {
		if (hours > 23) {
			hours = `0${hours - 24}`;
		} else if (hours < 10) {
			hours = `0${hours}`;
		} else return
	}
	getTime();
	const time = `${hours}:${minutes}`

  const goBack = () => {
    return (
      router.back()
    )
  };

	// onPress for create ticket button
	const onPressCreateTicket = () => {
		console.log([letter, color, todaysDate, time]);
	}

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
			<View style={styles.homeContainer}>
				{/* Status bar */}
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
				
				{/* back button */}
				<View style={styles.backButtonView}>
					<Link href="/" style={styles.backButton}>Back</Link>
				</View>
				
				{/* page inputs */}
				<View>
					<View>
						<Text style={styles.ticketInputs}>Letter:</Text>
						<TextInput
							style={styles.heading}
							onChangeText={(text) => setLetter(`${text}`)}
						/>
						<Text style={styles.ticketInputs}>Color:</Text>
						<TextInput
							style={styles.heading}
							onChangeText={(text) => setColor(`${text}`)}
						/>
						<Text style={styles.ticketInputs}>Date:</Text>
						<Text style={styles.heading}>{todaysDate}</Text>
						<Text style={styles.ticketInputs}>Expires:</Text>
						<Text style={styles.heading}>{time}</Text>
					</View>
				</View>

				{/* go to created ticket */}
				<View style={styles.createTicketView}>
          <Link href={`/ticket?letter=${letter}&color=${color}&date=${todaysDate}&time=${time}`} style={styles.createTicketButton}>Create Ticket</Link>
        </View>

			</View>
    </SafeAreaView>
  )
}

export default home;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#244A9F",
  },
	homeContainer: {
		paddingLeft: 20,
		paddingRight: 20,
	},

	// back button
	backButtonView: {
		flex: 0,
		width: 60,
		marginBottom: 30,
	},
	backButton: {
		color: "white",
		fontSize: 18,
	},

	// ticket inputs
	ticketInputs: {
		fontSize: 18,
		color: "#FFFFFF"
	},
	heading: {
		fontSize: 18,
		height: 40,
		margin: 12,
		padding: 10,
		borderWidth: 1,
		backgroundColor: "#FFFFFF"
	},

	// create ticket button
	createTicketView: {
		marginTop: 15,
		borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
		backgroundColor: "#fff",
		padding: 7,
		width: 130,
		flex: 0,
		alignItems: "center",
	},
	createTicketButton: {
		fontSize: 18,
	},

});