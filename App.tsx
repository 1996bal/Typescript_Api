import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import { data } from './declare'
import api from './apiaxios'


function App(): React.JSX.Element {
  const [title, setTitle] = useState<string | null>(null);
  const fetchingData = async () => {
    try {
      await api.get<data[]>('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
          // handle success
          setTitle(response.data[99].title)

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    } catch (error) {
      console.log(error);
    }

  }
  fetchingData();
  return (
    <View
      style={{
        backgroundColor: 'green', flex: 0.5
      }}>
      <Text style={{ marginLeft: '20%', marginTop: '20%', color: 'black' }}>{title}</Text>
    </View>
  );
}

export default App;
