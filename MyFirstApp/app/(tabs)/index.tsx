import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function App() {
return (
  <View style={s.screen}>
    <Image
      source={{ uri: 'https://i.pinimg.com/736x/e3/be/30/e3be3081d56e8f0e31dbef11a83273ea.jpg' }}
      style={s.photo}
    />

    // Name input
    <TextInput
      style={s.input}
      placeholder="Enter your name..."
      value={name}
      onChangeText={setName}
    />

    // Greeting
    <Text style={s.greeting}>
      Hello, {name || 'Guest'}!
    </Text>
  </View>
  );
}

// Changed stylesheet to make profile screen look better - 05/23/26
const s = StyleSheet.create({
  screen: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#151515', padding:20 },
  photo: { width:120, height:120, borderRadius:60 },
  input: { width:'100%', backgroundColor:'#474747', borderWidth:1, borderColor:'#878787', padding:12, marginBottom:15 }
});

// Basic Scripting Submission - already in react-app repository
const myName = "Sei";

const greet = (name) => {
return `Hi, I know who you are. ${name}, right?`;
};

const classmates = ["Cyrus", "Jero", "Julia", "Kristel", "Marga"];

classmates.map(name => greet(name));