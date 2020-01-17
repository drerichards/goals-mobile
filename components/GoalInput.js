import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = text => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    props.setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }])
    setEnteredGoal('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="ADD" onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default GoalInput