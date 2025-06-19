import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native'; 

const CounterApp = () => {
  
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count >= 10) {
      alert("Nilai maksimal tercapai."); 
    } else {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.countText}>Nilai Saat Ini: {count}</Text>

      <View style={styles.buttonContainer}>
        
        <Button
          title="+"
          onPress={handleIncrement}
          color="#4CAF50" 
        />
     
        <Button
          title="-"
          onPress={handleDecrement}
          color="#f44336" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', 
    padding: 20,
  },
  countText: {
    fontSize: 40, 
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
  },
});

export default CounterApp;