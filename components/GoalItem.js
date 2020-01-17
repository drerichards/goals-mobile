import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderColor: 'black',
    borderWidth: 1
  },
  input: {
    borderColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%'
  }
})

export default GoalItem