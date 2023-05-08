import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, Button, StatusBar, StyleSheet, Animated } from "react-native";
import { Link, useRouter, useSearchParams } from "expo-router";

const ticket = () => {
  const router = useRouter();
	const [lightBgColor, setLightBgColor] = useState('#338ED1');
	const [darkBgColor, setDarkBgColor] = useState('#0072C6');

	let toggleLightColor = [];
	let toggleDarkColor = [];

	// de structure search params from home.js
	const {letter, color, date, time} = useSearchParams();

	// set color change toggle on tap
	const changeColor =() => {
		if (color === 'Green') {
			toggleLightColor = ["#338ED1", "#37FF77"];
			toggleDarkColor = ["#0072C6", "#05FF55"];
		} else if (color === 'Purple') {
			// toggleLightColor = ["#338ED1", "#B8A6C0"];
			// toggleDarkColor = ["#0072C6", "#B286B7"];
		} else if (color === 'Black') {
			toggleLightColor = ["#338ED1", "#393333"];
			toggleDarkColor = ["#0072C6", "#080000"];
		} else if (color === 'Orange') {
			toggleLightColor = ["#338ED1", "#FF9233"];
			toggleDarkColor = ["#0072C6", "#FF7700"];
		} else if (color === 'Pink') {
			toggleLightColor = ["#338ED1", "#FF43E0"];
			toggleDarkColor = ["#0072C6", "#FF14D8"];
		} else if (color === 'Blue') {
			// toggleLightColor = ["#338ED1", "#37FF77"];
			// toggleDarkColor = ["#0072C6", "#05FF55"];
		} else return;

		// light color
		if (lightBgColor === toggleLightColor[0]) {
			setLightBgColor(toggleLightColor[1]);
		} else if (lightBgColor === toggleLightColor[1]) {
			setLightBgColor(toggleLightColor[0]);
		}

		// dark color
		if (darkBgColor === toggleDarkColor[0]) {
			setDarkBgColor(toggleDarkColor[1]);
		} else if (darkBgColor === toggleDarkColor[1]) {
			setDarkBgColor(toggleDarkColor[0]);
		}
	}

	// background animations
	// const position = new Animated.ValueXY({x:0,y:0});
	// Animated.timing(position, {
	// 	toValue:{x:300, y:-310},
	// 	useNativeDriver: true,
	// 	duration: 5000
	// }).start();

	// const position = new Animated.ValueXY({x:0,y:0});
	// Animated.loop(
	// 	Animated.sequence([
	// 		Animated.timing(position, {
	// 			toValue:{x:300, y:-310},
	// 			useNativeDriver: true,
	// 			duration: 5000
	// 		})
	// 	]),
	// 	{
	// 		iterations: 10
	// 	}
	// ).start()

	// animation addition not great but works if you time it right
	const position = new Animated.ValueXY({x:0,y:0});
	Animated.loop(
		Animated.sequence([
			Animated.timing(position, {
				toValue:{x:520, y:-372},
				useNativeDriver: true,
				duration: 5000
			})
		]),
		{
			iterations: 10
		}
	).start()

	const position1 = new Animated.ValueXY({x:0,y:0});
	Animated.loop(
		Animated.sequence([
			Animated.timing(position1, {
				toValue:{x:785, y:-565},
				useNativeDriver: true,
				duration: 7500
			})
		]),
		{
			iterations: 10
		}
	).start()

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
							<View style={{backgroundColor:`${lightBgColor}`, width:"100%", height:185}}></View>
							<View style={{backgroundColor:`${darkBgColor}`, width:"100%", height:185, borderBottomWidth:2, borderBottomColor:"white"}}></View>
							<Text style={styles.tapText} onPress={changeColor}>ADULT ($2.75)</Text>

							{/* bus logos with letter */}
							{/* <View style={{width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:260, left:50}}>
								<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
								<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
							</View>

							<View style={{width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:80, left:230}}>
								<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
								<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
							</View>									 */}
							
							{/* QR code in corner and show code text */}
							<Image source={require('../assets/qrCode.jpeg')} style={{width:55, height:55, position:"absolute", top:313, left:316}} />
							<Text style={{color:"black", fontSize:10, fontWeight:"600", width:34, position:"absolute", top:327, left:280}}>SHOW CODE</Text>
						</View>

						{/* date and time */}
						<View style={styles.dateTimeSection}>
							<Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>{date} {time}</Text>
							<Text style={{fontSize:18, fontWeight:"bold", color:"white", padding:3}}>Expiration Date & Time</Text>
						</View>
					</View>

				</View>		
				
				{/* Animation, having trouble with it */}
				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:560, left:-125, zIndex: 10}}>
					<Animated.View style={{
						display:"flex",
						flexDirection:"row",
						alignItems:"center",
						justifyContent:"center",
						height:80,
						width:80,
						transform:[
							{translateY:position.y},
							{translateX:position.x}
						],
					}}>
						<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
						<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
					</Animated.View>
				</View>	

				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:768, left:-405, zIndex: 10}}>
					<Animated.View style={{
						display:"flex",
						flexDirection:"row",
						alignItems:"center",
						justifyContent:"center",
						height:80,
						width:80,
						transform:[
							{translateY:position1.y},
							{translateX:position1.x}
						]
					}}>
						<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
						<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
					</Animated.View>
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