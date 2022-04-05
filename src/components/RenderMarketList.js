import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import moment from "moment";

// expo bu engine react native ishlatadi;

const RenderMarketList = ({
  name,
  image,
  low_24h,
  high_24h,
  current_price,
  date,
  symbol,
}) => {
  // const {image}=props.image;
  return (
    <View style={mobileStyle.container}>
      <View style={mobileStyle.contentView}>
        <Image style={mobileStyle.imageStyle} source={{ uri: `${image}` }} />
        <View style={mobileStyle.textView}>
          <Text style={mobileStyle.titleStyle}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={mobileStyle.categoryStyle}>#{symbol}</Text>
          </View>

          <Text numberOfLines={2} style={mobileStyle.paragraphStyle}>
            <FontAwesome size={18} name="euro" style={{ color: "#3c560" }} />
            {current_price}
          </Text>

          <Text numberOfLines={2} style={mobileStyle.paragraphStyle}>
            <AntDesign size={18} name="caretup" style={{ color: "#3c560" }} />
            {high_24h}
          </Text>

          <Text numberOfLines={2} style={mobileStyle.paragraphStyle}>
            <AntDesign size={18} name="caretdown" style={{ color: "#3c560" }} />
            {low_24h}
          </Text>

          <View style={mobileStyle.dataView}>
            <Text style={mobileStyle.dateStyle}>
              {moment(date)?.format("DD.MMMM.YYYY").toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RenderMarketList;

const mobileStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
  },
  contentView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 20,
    backgroundColor: "purple",
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  textView: {
    flexDirection: "column",
    width: Dimensions.get("window").width - 60,
    paddingRight: 10,
    marginLeft: 5,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3c4560",
  },
  categoryStyle: {
    fontSize: 10,
    fontWeight: "600",
    color: "#3c3560",
    marginTop: 2,
    marginRight: 4,
  },
  paragraphStyle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#b8bece",
    marginTop: 5,
  },
  dataView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  dateStyle: {
    fontSize: 10,
    fontWeight: "600",
    color: "red",
  },
});
