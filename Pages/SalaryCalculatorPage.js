import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../Styles";

const SalaryCalculatorPage = () => {
  const [perShiftSalary, setPerShiftSalary] = useState("");
  const [shifts, setShifts] = useState("");
  const [advance, setAdvance] = useState("");
  const [balance, setBalance] = useState("");
  const [totalSalary, setTotalSalary] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSalary = () => {
    const perShiftSalaryValue = parseFloat(perShiftSalary);
    const shiftsValue = parseInt(shifts);
    const advanceValue = parseFloat(advance);
    const balanceValue = parseFloat(balance);

    if (
      !isNaN(perShiftSalaryValue) &&
      !isNaN(shiftsValue) &&
      !isNaN(advanceValue) &&
      !isNaN(balanceValue)
    ) {
      const weekSalary = perShiftSalaryValue * shiftsValue;
      const salary = weekSalary - advanceValue;
      setTotalSalary(salary + balanceValue);
    }
  };

  const handleClear = () => {
    setPerShiftSalary("");
    setShifts("");
    setAdvance("");
    setBalance("");
    setTotalSalary(0);
    setButtonDisabled(true);
  };

  useEffect(() => {
    setButtonDisabled(!(perShiftSalary && shifts && advance && balance));
  }, [perShiftSalary, shifts, advance, balance]);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.salaryContainer}>
        <Text style={styles.salaryText}>ஒரு ஷிப்ட் சம்பளம்(per Shift) :-</Text>
        <TextInput
          onChangeText={(text) => setPerShiftSalary(text)}
          style={styles.salaryInput}
          keyboardType="numeric"
          value={perShiftSalary}
        />
      </View>

      <View style={styles.salaryContainer}>
        <Text style={styles.salaryText}>மொத்த ஷிப்ட்(Total Shift) :-</Text>
        <TextInput
          onChangeText={(text) => setShifts(text)}
          style={styles.salaryInput}
          keyboardType="numeric"
          value={shifts}
        />
      </View>

      <View style={styles.salaryContainer}>
        <Text style={styles.salaryText}>முன்தொகை(Advance) :-</Text>
        <TextInput
          onChangeText={(text) => setAdvance(text)}
          style={styles.salaryInput}
          keyboardType="numeric"
          value={advance}
        />
      </View>

      <View style={styles.salaryContainer}>
        <Text style={styles.salaryText}>கடந்த வார இருப்பு(Balance) :-</Text>
        <TextInput
          onChangeText={(text) => setBalance(text)}
          style={styles.salaryInput}
          keyboardType="numeric"
          value={balance}
        />
      </View>

      <View style={styles.salaryContainer}>
        <Button title="Clear" color={"red"} onPress={handleClear} />
        <Button
          title="மொத்த சம்பளம் (Total Salary)"
          onPress={handleSalary}
          disabled={buttonDisabled}
        />
      </View>

      <View style={styles.salaryContainer}>
        <Text style={styles.salaryText}>Salary = {totalSalary}</Text>
      </View>
    </View>
  );
};

export default SalaryCalculatorPage;
