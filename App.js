import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([])

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId))
  }

  return (
    <View style={styles.screen}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={goalData => <GoalItem id={goalData.item.id} title={goalData.item.value} onDelete={removeGoalHandler} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 15
  }
})

export default App
