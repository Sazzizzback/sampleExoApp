import {View,Text, StyleSheet} from 'react-native'

export function Test ( props:any ) {
    return (
        <View>
            <Text>{ props.greeting }</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    text:{
        color:"white",
    }
})