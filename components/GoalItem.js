import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.listItem} >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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