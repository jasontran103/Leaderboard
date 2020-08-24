import React,{useState} from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes}
  from 'react-native'
import PropTypes from "prop-types";
import Constants from 'expo-constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Cody Fischer', id: '1' },
    { name: 'Eleanor Pena', id: '2' },
    { name: 'Jerome Bell', id: '3' },
    { name: 'Teresa Webb', id: '4' },
    { name: 'Wade Warren', id: '5' },
    { name: 'Floyd Miles', id: '6' },
    { name: 'Kyle Stark', id: '7' },
    { name: 'Jason Tran', id: '8' },
  ]);

  const pressHandler = (id) => {
  console.log(id);
}

return (
    <View style={styles.container}>

      <Image style = {styles.Top_Panel_Leaderboard} source={require('./assets/Top_Panel_Leaderboard.png')}
      />

        <Text style={styles.title}>Leaderboards</Text>

          <Image style = {styles.Bell} source={require('./assets/bell.png')}
          />

            <Image style = {styles.WeeklyUserSpotlight} source={require('./assets/WeeklyUserSpotlight.png')}
              />

              <Image style = {styles.Settings} source={require('./assets/settings.png')}
                />

          <Text style={styles.RankingList}>Rankings List</Text>

          <Image style = {styles.ContainerList} source={require('./assets/Container_List.png')}
          />

        <View style={styles.statTab}>

        <FlatList
            keyExtractor = {(item) => item.id}
            data = {people}
            renderItem = {({ item }) => (

          <TouchableOpacity onPress = {() => pressHandler(item.id)}>
            <Text style = {styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    backgroundColor: 'black',
  },

  linearGradient: {
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 5,
   height: 200,
   width: 350,
 },

  Top_Panel_Leaderboard: {
      width: 475,
      height: 167,
      justifyContent: 'center',
  },

   WeeklyUserSpotlight: {
     position: 'absolute',
     width: 130,
     height: 177,
     left: 214,
     top: 172,

     borderRadius: 13,
 },

  title: {
      position: 'absolute',
      width: 198,
      height: 34,
      left: 24.63,
      top: 39.22,

      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: -0.3,

    color: 'white',

  },

  Bell: {
    position: 'absolute',
    width: 41,
    height: 39,
    left: 320,
    top: 33,

  },

  Settings: {
    position: 'absolute',
    width: 31,
    height: 31,
    left: 370,
    top: 41,

  },

  RankingList: {
    fontFamily: 'Montserrat Alternates',
    fontSize: 22,
    lineHeight: 27,
    letterSpacing: -0.3,
  },

  ContainerList: {
    position: 'absolute',
    width: 500,
    height: 457,
    left: 0,
    top: 355,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },

  item: {
    flex: 1,
    paddingLeft: 99,
    marginHorizontal: 10,
    marginTop: 20,
    padding: 25,

    backgroundColor: 'white',

    fontSize: 24,
    fontWeight:"500",
    fontStyle: "normal",

    lineHeight: 29,
    letterSpacing: -0.3,
  },

});
