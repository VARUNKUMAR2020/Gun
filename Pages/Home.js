import { ImageBackground, SafeAreaView, StatusBar,View} from "react-native";
import styles from "../Styles";
import CowShed from "../Components/CowShed";
import GoatShed from "../Components/GoatShed";
import SalaryCalculator from "../Components/SalaryCalculator";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
const img = require("../assets/v.webp");

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={img} style={{ flex: 1 }}>
        <View style={styles.backgroundImage}>
          {/* Header */}
          <Header />

          {/* Cow shed Detail */}
          <CowShed />

          {/* Goat shed Detail */}
          <GoatShed />

          {/* Billing */}
          <SalaryCalculator />

          {/* Contact */}
          <Contact />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
