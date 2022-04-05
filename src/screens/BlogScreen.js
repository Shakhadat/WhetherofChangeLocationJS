import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import {useQuery} from 'react-query';
import { fetchCoinsById } from '../api';
import CoinPage from '../components/RenderBlog';


const Blog = ({route})=> {
    const {params:{id}} = route;
    const {isLoading, error, data} = useQuery(["coinById", id], ()=>fetchCoinsById(id));

   if(isLoading){
       return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
       )
   }

   if(error){
    return <Text>🤷‍♂I guess something went wrong</Text>;
   }

  return (
    <View style={styles.container}>
      <CoinPage 
        name={data.name}
        image={data.image}
        genesis_date={data.genesis_date}
        hashing_algorithm={data.hashing_algorithm}
        symbol={data.symbol}
        description={data.description}
      />
    </View>
  );
}

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});