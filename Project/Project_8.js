import { SectionList, Text, View, StyleSheet, SafeAreaView } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
  row: { paddingHorizontal: 10, paddingVertical: 10 },
  name: { fontSize: 16 },
  separator: { backgroundColor: "rgba(0, 0, 0, 0.5)", height: 1 },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(170, 170, 170)",
  },
});

const PEOPLE = [
  { name: { title: "Ms", first: "Maeva", last: "Scott" } },
  { name: { title: "Ms", first: "Maelle", last: "Henry" } },
  { name: { title: "Mr", first: "Mohamoud", last: "Faaij" } },
  { name: { title: "Mr", first: "John", last: "Doe" } },
  { name: { title: "Mrs", first: "Alice", last: "Smith" } },
  { name: { title: "Ms", first: "Emily", last: "Johnson" } },
  { name: { title: "Mr", first: "Michael", last: "Williams" } },
  { name: { title: "Mrs", first: "Emma", last: "Brown" } },
  { name: { title: "Ms", first: "Olivia", last: "Jones" } },
  { name: { title: "Mr", first: "William", last: "Garcia" } },
  { name: { title: "Mrs", first: "Sophia", last: "Martinez" } },
  { name: { title: "Ms", first: "Ava", last: "Hernandez" } },
];

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = { title: group, data: [item] };
    }
    return accumulator;
  }, {});
  const sections = Object.keys(groupedData).map((key) => {
    return groupedData[key];
  });
  return sections.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
};

const Project_8 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)} // Assuming PEOPLE is defined
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

export default Project_8;