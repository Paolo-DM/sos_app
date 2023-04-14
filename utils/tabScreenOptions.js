import Ionicons from "react-native-vector-icons/Ionicons";

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "SOS") {
      iconName = focused ? "alert-circle" : "alert-circle-outline";
    } else if (route.name === "Map") {
      iconName = focused ? "map" : "map-outline";
    } else if (route.name === "Menu") {
      iconName = focused ? "menu" : "menu-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "black",
  tabBarInactiveTintColor: "gray",
});

export default screenOptions;
