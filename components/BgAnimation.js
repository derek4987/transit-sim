import React from "react";
import { View, Image, Text, Animated, StyleSheet } from "react-native";

function BgAnimation(props) {

    const letter = props.letter;
    const top = props.top;
    const left = props.left

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
    <View style={{
        width:80, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position:"absolute", top:top, left:left, zIndex: 10}}>
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
    )
}

export default BgAnimation;