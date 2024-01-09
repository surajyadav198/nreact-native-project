import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Detail Screen</Text>
      <Button
        title="Go to New Screen"
        onPress={() => navigation.navigate('New')}
        color="red"
      />
    </View>
  );
};

export default DetailScreen;
