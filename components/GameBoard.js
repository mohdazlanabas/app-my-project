import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View } from 'react-native'
import Square from './Square.js'
import {connect} from 'react-redux'

const GameBoard = (props) => {
    const [timeLeft, setTimeLeft] = useState(10)

    useEffect(() => {
      if(!timeLeft) return
      const timerId = setInterval(() => {
        // happens every 1000 miliseconds
        setTimeLeft(timeLeft -1)
      },1000)
      return () => clearInterval(timerId)
    }, [timeLeft])
    

    return (
        <View style={styles.container}>
        <Text>Azlan whatchamacallit App what have you!</Text>
        <Text> {timeLeft} </Text>
        <Text> {props.score} </Text>
          <View style = {styles.game}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      margin: 100,
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
    }
  });

  const mapStateToProps = state => {
    return {
      score: state.score
    }
  }

export default GameBoard