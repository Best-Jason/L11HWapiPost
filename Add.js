import React,{useState} from 'react';
import {StatusBar, View, Button, Text, TextInput, Alert, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Title: {
        fontSize: 18,
        marginBottom: 30,
        color:"blue",
        fontWeight: "bold"
    },
    inputBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 15,
    },
});

const Add = ({navigation, route}) => {
  const[username,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phonenumber,setPhoneNumber] = useState("");

  return (
    <View>
        <Text style={styles.Title}> Registration</Text>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={styles.inputBox} onChangeText={(text)=>setName(text)}/>

        <Text>Email:</Text>
        <TextInput style={styles.inputBox} onChangeText={(text) => setEmail(text)} />

        <Text>Phone Number:</Text>
        <TextInput style={styles.inputBox} onChangeText={(text) => setPhoneNumber(text)} keyboardType="numeric" />

        <Button title='Submit'
              onPress={()=>{
                  let mydata = JSON.parse(route.params.datastr);
                  let item = {username:username, email:email, phonenumber:phonenumber};
                  mydata.push(item); // adding item details to "mydata" list
                  fetch("https://31f07fc6f7914dc1bcfb39cc6e36f748.api.mockbin.io/",
                      {method: 'POST',
                          headers:{
                              "Content-Type": "application/json",
                              "Authorization": "bajdnsxhn"
              },
              body:JSON.stringify(mydata)
              }
              )
          .then((response) => {
              navigation.navigate('Home');
          })
      }
      }
      />
    </View>
  );
};

export default Add;