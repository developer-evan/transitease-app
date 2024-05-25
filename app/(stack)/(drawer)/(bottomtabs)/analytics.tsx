import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Analytics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={[styles.summaryBox, styles.transactionsBox]}>
          <Text style={styles.summaryText}>Transactions</Text>
          <Text style={styles.summaryAmount}>Ksh.1400</Text>
        </View>
        <View style={[styles.summaryBox, styles.expensesBox]}>
          <Text style={styles.summaryText}>Expenses</Text>
          <Text style={styles.summaryAmount}>Ksh.400</Text>
        </View>
        {/* <View style={[styles.summaryBox, styles.expensesBox]}>
          <Text style={styles.summaryText}>Expenses</Text>
          <Text style={styles.summaryAmount}>Ksh.400</Text>
        </View>  */}
      </View>

      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>THIS MONTH</Text>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <View style={styles.iconContainer}>
                <View style={[styles.icon, styles.iconUser]}></View>
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>City hoppers</Text>
                <Text style={styles.itemDate}>May 24, 2024</Text>
              </View>
              <Text style={styles.itemAmount}>- Ksh.280</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.iconContainer}>
                <View style={[styles.icon, styles.iconShop]}></View>
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>Uber</Text>
                <Text style={styles.itemDate}>May 24, 2024</Text>
              </View>
              <Text style={styles.itemAmount}>- Ksh.780</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.iconContainer}>
                <View style={[styles.icon, styles.iconCar]}></View>
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>Rembo</Text>
                <Text style={styles.itemDate}>May 24, 2024</Text>
              </View>
              <Text style={styles.itemAmount}>- Ksh.80</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>LAST MONTH</Text>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <View style={styles.iconContainer}>
                <View style={[styles.icon, styles.iconShopping]}></View>
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>Super Metro</Text>
                <Text style={styles.itemDate}>April 24, 2024</Text>
              </View>
              <Text style={styles.itemAmount}>- Ksh.280</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  summaryBox: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    width: '45%',
  },
  transactionsBox: {
    backgroundColor: '#4caf50',
  },
  expensesBox: {
    backgroundColor: '#f44336',
  },
  summaryText: {
    fontSize: 16,
    color: '#fff',
  },
  summaryAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  iconUser: {
    backgroundColor: '#6200ea',
  },
  iconShop: {
    backgroundColor: '#009688',
  },
  iconCar: {
    backgroundColor: '#ff9800',
  },
  iconShopping: {
    backgroundColor: '#3f51b5',
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 14,
    color: '#888',
  },
  itemAmount: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
  },
});

export default Analytics;
