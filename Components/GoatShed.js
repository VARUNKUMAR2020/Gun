import { View, Text, Button } from "react-native";
import styles from "../Styles";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GoatShed = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.firstDetails}>
      <View style={styles.center}>
        <Text style={styles.smallHeadings}>ஆட்டு கொட்டகை </Text>
      </View>

      <View style={styles.button}>
        <Button
          title="கொட்டகை கண்ணக்கு"
          onPress={() => navigation.navigate("ஆடு கொட்டகை கண்ணக்கு")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="கொட்டகை சேர்க்க"
          onPress={() => navigation.navigate("ஆடு கொட்டகை சேர்க்க")}
        />
      </View>
      <View style={styles.button}>
        <Button title="கொட்டகை இருப்பு" />
      </View>
    </View>
  );
};

export default GoatShed;
