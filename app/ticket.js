import React from "react";
import { View, Text, SafeAreaView, Button, StatusBar, StyleSheet } from "react-native";
import { Link, useRouter, useSearchParams } from "expo-router";

const ticket = () => {
  const router = useRouter();

	// de structure search params from home.js
	const {letter, color, date, time} = useSearchParams();

  return (
    <View style={styles.safeAreaContainer}>
			<View style={styles.ticketContainer}>
				{/* status bar */}
				<View
					style={{
						height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
					}}>
					<StatusBar
					barStyle="light-content"
					hidden={false}
      	  translucent={true}
				/>
				</View>
				
				{/* ticket background */}
				<View style={styles.ticketBg}>

					{/* main ticket area */}
				  <View style={styles.mainTicketContainer}>
						{/* Back button and Ticket text */}
						<View style={styles.headingView}>
							{/* back button */}
							<View style={styles.backButtonView}>
								<Link href="/home" style={styles.backButton}>Back</Link>
							</View>
							{/* ticket text */}
							<Text style={{color:"white", fontSize:18, fontWeight:"bold" }}>Ticket</Text>
						</View>

						{/* yellow section with "metro" text */}
						<View style={styles.yellowSection}>
							<View style={{backgroundColor:"#FDD068", width:"100%", height:60}}></View>
							<View style={{backgroundColor:"#FCC442", width:"100%", height:60, borderBottomWidth:2, borderBottomColor:"white"}}></View>
							<Text style={styles.metroText}>METRO</Text>
						</View>

						{/* tap for color change section withi animations */}
						<View style={styles.tapSection}>
							<View style={{backgroundColor:"#338ED1", width:"100%", height:185}}></View>
							<View style={{backgroundColor:"#0072C6", width:"100%", height:185, borderBottomWidth:2, borderBottomColor:"white"}}></View>
							<Text style={styles.tapText}>ADULT ($2.75)</Text>
						</View>

						{/* date and time */}
						<View style={styles.dateTimeSection}>
							<Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>{date} {time}</Text>
							<Text style={{fontSize:18, fontWeight:"bold", color:"white", padding:3}}>Expiration Date & Time</Text>
						</View>
					</View>

				</View>				
			</View>
    </View>
  )
}

export default ticket;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
		alignItems: "center",
		backgroundColor: "black",
  },

	// ticket container
	ticketContainer: {
		backgroundColor: "black",
		zIndex: 0,
		width: "100%",
		height: "100%",
		flex: 1,
		alignItems: "center",
	},

	// ticket background
	ticketBg: {
		alignItems: "center",
		zIndex: 1,
		width: "90%",
		height: "100%",
		backgroundColor: "#20418C",
		borderRadius: 12,
		marginTop: "3%",
	},

	// main ticket area
	mainTicketContainer: {
		zIndex: 2,
		marginTop: "4%",
		width: "110%",
		height: "100%",
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#AB2525",
	},

	// heading section
	headingView: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 18,
		paddingBottom: 18,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#244A9F",
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
	},
	// back button
	backButtonView: {
		position: "absolute",
		left: 10,
		flex: 0,
		alignItems: "center",
		width: 50,
	},
	backButton: {
		color: "white",
		fontSize: 18,
	},

	// yellow "metro" section
	yellowSection: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	metroText: {
		fontSize: 50,
		fontWeight: "bold",
		color: "white",
		position: "absolute",
		top: 30,
	},

	// tap section for color change and animation
	tapSection: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	tapText: {
		fontSize: 40,
		fontWeight: "bold",
		color: "white",
		position: "absolute",
		top: 160,
	},

	// date and time section 
	dateTimeSection: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 5,
	},

});