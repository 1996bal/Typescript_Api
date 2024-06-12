






import React from 'react';
import { Text,View,} from 'react-native';
import axios  from 'axios';

function App() {
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // handle success
    console.log(response.data[9]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  return (
    <View
      style={{
        backgroundColor: 'green', flex: 0.5
      }}>

    </View>
  );
}

export default App;
