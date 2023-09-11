import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

import { styles } from "./styles";
import { colors } from "../../src/colors";
import { data } from "./data";

export default function Yugioh() {
  const [password, setPassword] = useState("");
  const [card, setCard] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${password}`;

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCard = data[randomIndex].password;
    setValue(randomCard.toString());
    setPassword(randomCard.toString());
  };

  const getImage = async () => {
    const response = await axios.get(url, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return response.data.data[0].card_images[0].image_url;
  };

  const handleCard = async () => {
    setIsLoading(true);
    const cards = await getImage();
    setCard(cards);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.help} onPress={getRandomCard}>
        <Text style={styles.helpText}>?</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        {!isLoading ? (
          <>
            {card ? (
              <Image
                width={246}
                height={363}
                style={styles.card}
                source={{
                  uri: card,
                }}
              ></Image>
            ) : (
              <Text>Pesquise uma Carta</Text>
            )}
          </>
        ) : (
          <ActivityIndicator color={colors.black} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="ex. 54752875"
          style={styles.textInput}
          keyboardType="number-pad"
          onChangeText={(event) => {
            setPassword(event);
          }}
          maxLength={8}
        >
          {value}
        </TextInput>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleCard}
        >
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
