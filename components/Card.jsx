import { StyleSheet, View, Text } from "react-native";

export const OperationCard = ({ name, porHora, porDia }) => {
  return (
    <View style={cardStyles.card}>
      <Text style={cardStyles.title}>{name}</Text>
      <View style={cardStyles.operationContainer}>
        <Text style={cardStyles.operationLabel}>Operaciones 1hs:</Text>
        <Text style={cardStyles.operationValue}>$ {porHora}</Text>
      </View>
      <View style={cardStyles.operationContainer}>
        <Text style={cardStyles.operationLabel}>Operaciones 1 día:</Text>
        <Text style={cardStyles.operationValue}>$ {porDia}</Text>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
    color: "#333",
  },
  operationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  operationLabel: {
    fontSize: 16,
    color: "#777",
  },
  operationValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
