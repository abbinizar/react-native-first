import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, Icon, TextInput, ActivityIndicator, SafeAreaView, SectionList, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Logo from './assets/man.jpeg'
import axios from "axios"

//data
const Data = [
  {
    title: 'main',
    data: ['eat', 'sleep', 'code']
  },
  {
    title: 'secondary',
    data: ['colaborate', 'ideate', 'design']
  },
  {
    title: 'main',
    data: ['eat', 'sleep', 'code']
  },
  {
    title: 'secondary',
    data: ['colaborate', 'ideate', 'design']
  }
]

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

//list of navigation
const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.list}>
      <SectionList
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const SettingScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://api.kawalcorona.com/indonesia');
        setData(response.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchdata()
  }, [])
  return (
    <View style={styles.container}>
        {data.map(item => (
          <Text>Data Covid 19 di {item.name}, Positif {item.positif}, sembuh {item.sembuh}, meninggal {item.meninggal}</Text>
      ))}
      </View>
  );
}

const AccountScreen = () => {
  return (
    <ImageBackground source={Logo} style={{ width: '100%', height: '100%' }}>
      <Text>Me</Text>
    </ImageBackground>
  );
}

const HomeScreen = () => {

  const _onPressButton = () => {
    alert('You tapped the button!')
  }

  return (
    <View style={styles.container}>
      <Text> This is my Home screen </Text>
      <ActivityIndicator size="large" color="#0000ff" />
      <TextInput style={styles.input} placeholder="input disini!"></TextInput>
      <Button
        onPress={_onPressButton}
        title="Press Me"
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Explore" component={ExploreScreen}></Tab.Screen>
        <Tab.Screen name="Setting" component={SettingScreen}></Tab.Screen>
        <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 5,
    borderRadius: 5
  },
  list: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
