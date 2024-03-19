import { View, Button } from "react-native";
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";

const SalaryCalculator = () => {
  const Navigate = useNavigation();
  return (
    <View style={styles.Billing}>
        <Button title="சம்பள கால்குலேட்டர்" color={"red"} onPress={()=>Navigate.navigate("சம்பள கால்குலேட்டர்")}/>
    </View>
  );
};

export default SalaryCalculator;

