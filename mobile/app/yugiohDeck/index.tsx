import { View, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { CardObject } from "../yugioh/interface";

export default function App() {
  const { bottom, top } = useSafeAreaInsets();
  const [data, setData] = useState<CardObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("deck");
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setData(parsedData);
      } catch (e) {
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
    >
      <View style={styles.container}>
        {data.map((item, index) => {
          return (
            <Image
              key={index}
              width={246}
              height={363}
              style={styles.card}
              source={{
                uri: item.data[0].card_images[0].image_url,
              }}
            ></Image>
          );
        })}
      </View>
    </ScrollView>
  );
}
