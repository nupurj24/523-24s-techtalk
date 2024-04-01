import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, SectionList, Button, Pressable } from 'react-native';

export default function App() {
  return (
    <ScrollView accessible={true}>
      <StatusBar style="auto" />
      <Text>Some text That's not ideal</Text>  
      <View>
        <Text>Some new text that starts where we want </Text>
        <Text> React Native Core Components </Text>
        <Text> View, StatusBar, Text, Image, Button, ScrollView, TextInput </Text>
        <Image
          source={require ('./assets/uterus.png')
          }
          style={{width: 350, height: 200, }}
        />
      </View>
      <TextInput
        
        defaultValue="You can type in me"
      />
      <Pressable style={styles.button}>
      {/* style={({pressed}) => [
        {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'pink',}]}> */}
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});