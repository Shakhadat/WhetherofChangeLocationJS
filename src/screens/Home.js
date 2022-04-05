import { StatusBar } from "expo-status-bar";
import {
  Image,
  FlatList,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import { fetchCoinsMarket } from "../api";
import RenderMarketList from "../components/RenderMarketList";
// import { ActivityIndicator } from "react-native-web";

const Home = () => {
  const { navigate } = useNavigation();
  const { isloading, data, error } = useQuery("dataList", fetchCoinsMarket);
  // qayta qayta tortilgan narsa name bilan birga sqqlab qoyiladi; va bu usul lokal storajga o'xshaydi; key sifatida cashiga saqlaydi; serverga borib kelmaydi saqlab qo'ygan joyidan oladi;
  // bu bizga reduxdan qutulishga yordam beradi( useQuery);

  //react nativeda asinxronlik ishlamaydi orqasidan boshqa button bosib yuborsak birga ketuvradi;
  //Flat listlarni o'tgazsak orqaga qaytyotganda yangi ma'lumotlar bn to'qnashadi;
  //100 data bn ishlaganda ishlamay qotib qoladi;

  //   console.log(data);

  if (isloading) {
    return (
      <View>
        <ActivityIndicator size="small" />
      </View>
    );
  }
  if (error) {
    return <Text>🤷‍♂️I guess something went wrong</Text>;
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Button onPress={() => navigate("Blog")} title="Blog" /> */}
      <StatusBar style="auto" />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            //hohlagan komponentni bossa boladigan kampanentga o'zgartirib beradi;
            onPress={() => navigate("Blog", { id: item.id })}
          >
            <RenderMarketList
              name={item?.name}
              image={item?.image}
              low_24h={item?.low_24h}
              high_24h={item?.high_24h}
              date={item?.data}
              symbol={item?.symbol}
              current_price={item?.current_price}
            />
            <View style={styles.separator}></View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    flex: 1,
    alignSelf: "flex-end",
    width: "71%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginRight: 10,
  },
});

export default Home;
