import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = text => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals, {key: Math.random().toString(), item: enteredGoal}])
    setEnteredGoal('')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.viewContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoals} renderItem={goalData => (
        <View style={styles.listItem}>
          <Text>{goalData.item.item}</Text>
        </View>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 15
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    padding: 10,
    marginBottom: 5,
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
