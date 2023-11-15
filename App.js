import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { Users } from "./src/Users";
import { FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const display = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedUser && (
              <Text style={styles.modalText}>
                Hello {selectedUser.name.firstname} {selectedUser.name.lastname} from {selectedUser.course} 3A
              </Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Click here to close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.img}>
            <Image
              source={require("./src/cat.png")}
              style={{ width: 110, height: 150, alignSelf: "flex-end" }}
            />
          </View>
        </View>
      </Modal>

      <Text style={styles.headtext}>LIST OF USERS</Text>
      <View style={styles.table}>
        <View style={styles.tables}>
          <Text style={styles.tabletexts}>ID</Text>
        </View>
        <View style={styles.tables}>
          <Text style={styles.tabletexts}>NAME</Text>
        </View>
        <View style={styles.tables}>
          <Text style={styles.tabletexts}>COURSE</Text>
        </View>
      </View>
      <FlatList
        data={Users}
        renderItem={({ item: user }) => (
          <TouchableOpacity
            style={styles.tablerow}
            onPress={() => display(user)}
          >
            <Text style={styles.tabletext}>{user.id}</Text>
            <Text style={styles.tabletext}>{user.name.firstname}</Text>
            <Text style={styles.tabletext}>{user.course}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(user) => user.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 5,
  },
  table: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 0.9,
    backgroundColor: "#fba944",
  },
  tablerow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderColor: "#fba944",
    borderBottomWidth: 0.9,
    borderLeftWidth: 0.9,
    borderRightWidth: 0.9,
  },
  tabletext: {
    fontSize: 23,
  },
  tabletexts: {
    fontSize: 25,
    color: "white",
  },
  headtext: {
    fontSize: 30,
    margin: 10,
    alignSelf: "center",
    color: "#080674",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  modalView: {
    marginRight: 70,
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 280,
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
    color: "#080674",
    fontWeight: "bold",
    width: "100%",
  },
  button: {
    borderRadius: 20,
    width: 150,
    marginTop: 10,
  },
  textStyle: {
    color: "#bdbdbd",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  img: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalTexts: {
    color: "#080674",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
