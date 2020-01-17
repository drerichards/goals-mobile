import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = text => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    props.setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }])
    setEnteredGoal('')
    props.onAddGoal(false)
  }

  return (
    <Modal
      visible={props.modalVisible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          placeholderTextColor="#aaa"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    color: 'black',
    borderColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%'
  }
})

export default GoalInput