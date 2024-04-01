import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, SectionList } from 'react-native';

export default function App() {
  return (
    <View accessible={true}>
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
    </View>
  );
}