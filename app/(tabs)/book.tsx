import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import BookScreenTmp from "../../components/bookComponent/BookScreenTmp";
import DateTimeScreen from "../../components/dateTimeComponent/DateTimeScreen";
import React, {useState} from "react";
import BookScreen from "../../components/bookComponent/BookScreen";

export default function TabBookScreen() {

  return (
    <View style={styles.container}>
        <BookScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
