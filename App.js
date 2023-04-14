import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Utils
import screenOptions from "./utils/tabScreenOptions";
// Screens
import SOS from "./screens/sos/Sos";
import Map from "./screens/map/Map";
import Menu from "./screens/menu/Menu";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Group
              screenOptions={{ headerStyle: { backgroundColor: "yellow" } }}
            >
              <Tab.Screen name="SOS" component={SOS} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Menu" component={Menu} />
              {/* <Tab.Screen
                name="Contact"
                component={Contact}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Account"
                component={Account}
                options={{ headerStyle: { backgroundColor: "red" } }}
              /> */}
            </Tab.Group>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
