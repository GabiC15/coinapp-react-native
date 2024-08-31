import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { OperationCard } from "./components/Card";

export default function App() {
  const [operations, setOperations] = useState();
  useEffect(() => {
    fetch(
      "https://rest.coinapi.io/v1/exchanges?apikey=aed9a733-8c6a-4427-b6b3-2b15d64fcf90"
    ).then((data) => data.json().then(setOperations));
  }, []);

  console.log(typeof operations);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Coin App</Text>

      {operations ? (
        <ScrollView style={styles.scrollView}>
          {operations?.map((operation) => (
            <OperationCard
              key={operation.exchange_id}
              name={operation.name}
              porHora={operation.volume_1hrs_usd}
              porDia={operation.volume_1day_usd}
            />
          ))}
        </ScrollView>
      ) : (
        <ActivityIndicator paddingTop={100} size="large" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  scrollView: {
    width: "100%",
  },
  title: {
    color: "black",
    paddingTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
});
