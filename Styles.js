import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginVertical: 10,
    fontSize: 25,
    paddingLeft: 30,
    color: "red",
    textDecorationLine: "underline",
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
  smallHeadings: {
    fontSize: 20,
    paddingHorizontal: 30,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "#39FF14",
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
  button: {
    marginVertical: 10,
  },
  firstDetails: {
    marginVertical: 30,
  },
  phone: {
    color: "white",
    fontSize: 17,
  },
  Billing: {
    marginHorizontal: 100,
    color:"red"
  },
  contact: {
    flex: 1,
    justifyContent: "center",
  },
  MainTable: {
    marginTop: 20,
    margin: 3,
  },
  tables: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableText: {
    color: "blue",
    flex:1,
    textAlign:"center"
  },
  text:{
   fontWeight:"800",
   flex:1,
    textAlign:"center"
  },
  tablesData: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop: 4,
    borderRadius: 5,
    borderStyle: "solid",
    padding: 5,
    elevation: 1,
    borderBottomWidth: 3,
  },
  addFarm: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
  input:{
    height:35,
    padding:10,
    borderColor:"black",
    borderWidth:2,
    color:"black"
  },
  inputField:{
     margin:30
  },
  inputText:{
    marginVertical:10,
    textDecorationLine:"underline",
    fontWeight:"bold"
  },
  salaryInput:{
    height:30,
    width:100,
    borderWidth:2,
    textAlign:"center",
  },
  salaryText:{
    fontWeight:"bold"
  },
  salaryContainer:{
    marginVertical:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  MainContainer:{
    marginVertical:100
  }
});

export default styles;
