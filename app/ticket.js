import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, Button, StatusBar, StyleSheet, Animated, Platform } from "react-native";
import { Link, useRouter, useGlobalSearchParams } from "expo-router";
import BgAnimation from "../components/BgAnimation";

const ticket = () => {
  const router = useRouter();
	const [lightBgColor, setLightBgColor] = useState('#338ED1');
	const [darkBgColor, setDarkBgColor] = useState('#0072C6');

	let toggleLightColor = [];
	let toggleDarkColor = [];

	// de structure search params from home.js
	const {letter, color, date, time} = useGlobalSearchParams();

	// set color change toggle on tap
	const changeColor =() => {
		if (color === 'Green') {
			toggleLightColor = ["#338ED1", "#37FF77"];
			toggleDarkColor = ["#0072C6", "#05FF55"];
		} else if (color === 'Purple') {
			toggleLightColor = ["#338ED1", "#DE39FF"];
			toggleDarkColor = ["#0072C6", "#D608FF"];
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
			toggleLightColor = ["#338ED1", "#334EFF"];
			toggleDarkColor = ["#0072C6", "#0022FF"];
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
				toValue:{x:780, y:-540},
				useNativeDriver: true,
				duration: 9000,
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
							<Text style={{color:"white", fontSize:17, fontWeight:"600" }}>Ticket</Text>
						</View>

						{/* yellow section with "metro" text */}
						<View style={styles.yellowSection}>
							<View style={{backgroundColor:"#FDD068", width:"100%", height:92}}></View>
							<View style={{backgroundColor:"#FCC442", width:"100%", height:92, borderBottomWidth:2, borderBottomColor:"white"}}></View>
							<Text style={styles.metroText}>METRO</Text>
						</View>

						{/* tap for color change section withi animations */}
						<View style={styles.tapSection}>
							<View style={{backgroundColor:`${lightBgColor}`, width:"100%", height:207}}></View>
							<View style={{backgroundColor:`${darkBgColor}`, width:"100%", height:207, borderBottomWidth:2, borderBottomColor:"white"}}></View>
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
							<Image source={require('../assets/qrCode.jpeg')} style={{width:55, height:55, position:"absolute", top:357, left:355}} />
							<Text style={{color:"black", fontSize:10, fontWeight:"600", width:34, position:"absolute", top:372, left:320}}>SHOW CODE</Text>
						</View>

						{/* date and time */}
						<View style={styles.dateTimeSection}>
							<Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>{date} {time}</Text>
							<Text style={{fontSize:21, fontWeight:"bold", color:"white", padding:3}}>Expiration Date & Time</Text>
						</View>
					</View>

				</View>		
				
				{/* Animations x 6, animation resets after changing ticket color and I don't know how to stop that. not using component so it renders quicker*/}
				{/* <BgAnimation letter={letter} top={230} left={340} />
				<BgAnimation letter={letter} top={365} left={145} />
				<BgAnimation letter={letter} top={500} left={-50} />
				<BgAnimation letter={letter} top={635} left={-245} />
				<BgAnimation letter={letter} top={770} left={-440} />
				<BgAnimation letter={letter} top={905} left={-635} />
				<BgAnimation letter={letter} top={1040} left={-830} />
				<BgAnimation letter={letter} top={1175} left={-1025} />
				<BgAnimation letter={letter} top={1310} left={-1220} />	 */}

				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:340, left:340, zIndex: 10}}>
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
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:475, left:145, zIndex: 10}}>
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
						]
					}}>
						<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
						<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
					</Animated.View>
				</View>		

				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:610, left:-50, zIndex: 10}}>
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
						]
					}}>
						<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
						<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
					</Animated.View>
				</View>	

				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:745, left:-245, zIndex: 10}}>
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
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:880, left:-440, zIndex: 10}}>
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
						]
					}}>
						<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
						<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
					</Animated.View>
				</View>		

				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:1015, left:-635, zIndex: 10}}>
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
						]
					}}>
						<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
						<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
					</Animated.View>
				</View>	

				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:1150, left:-830, zIndex: 10}}>
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
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:1285, left:-1025, zIndex: 10}}>
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
						]
					}}>
						<Text style={{color:"#F2F2F2", fontSize:65, fontWeight:"500", opacity:0.5}}>{letter}</Text>
						<Image source={require('../assets/busLogo.png')} style={{width:50, height:50, opacity:0.5}} />
					</Animated.View>
				</View>		

				<View style={{
					width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:1420, left:-1220, zIndex: 10}}>
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
		// negative margin added to make ticket look correct after weird white bars that showed up after update.
		marginTop: "-12%"
	},

	// ticket background
	ticketBg: {
		alignItems: "center",
		zIndex: 1,
		width: "90%",
		height: "100%",
		backgroundColor: "#20418C",
		borderRadius: 12,
		marginTop: "6.5%",
	},

	// main ticket area
	mainTicketContainer: {
		zIndex: 2,
		marginTop: "3%",
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
		left: 13,
		flex: 0,
		alignItems: "center",
		width: 50,
	},
	backButton: {
		color: "white",
		fontSize: 17,
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
		top: 60,
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
		top: 182,
	},

	// date and time section 
	dateTimeSection: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingTop: 45,
		paddingBottom: 5,
		gap: 55,
	},

});