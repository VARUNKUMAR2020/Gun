import Home from "./Pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CowFarmCount from "./Pages/CowFarmCount";
import AddCowFarm from "./Pages/AddCowFarm";
import GoatFarmCount from "./Pages/GoatFarmCount";
import AddGoatFarm from "./Pages/AddGoatFarm";
import SalaryCalculatorPage from "./Pages/SalaryCalculatorPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {/* Cow Farm Screen */}
        <Stack.Screen
          name="மாட்டு கொட்டகை கண்ணக்கு "
          component={CowFarmCount}
        />
        <Stack.Screen name="மாட்டு கொட்டகை சேர்க்க" component={AddCowFarm} />

        {/* Goat Farm Screen */}
        <Stack.Screen name="ஆடு கொட்டகை கண்ணக்கு" component={GoatFarmCount} />
        <Stack.Screen name="ஆடு கொட்டகை சேர்க்க" component={AddGoatFarm} />

        {/* Calculator */}
        <Stack.Screen name="சம்பள கால்குலேட்டர்" component={SalaryCalculatorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
