import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import { CardObject } from "./interface";
import { YugiohCard } from "../../src/components/YugiohCard";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { colors } from "../../src/colors";
import { data } from "./data";

export default function Yugioh() {
  const [password, setPassword] = useState("");
  const [card, setCard] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [deck, setDeck] = useState<CardObject[]>([]);

  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${password}`;

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCard = data[randomIndex].password;
    setValue(randomCard.toString());
    setPassword(randomCard.toString());
    console.log(deck);
  };

  const getCard = async () => {
    try {
      const response = await axios.get<CardObject>(url);
      if (response.status === 200) {
        const { data } = response;
        return data;
      } else {
      }
    } catch (error) {}
  };

  const handleCard = async () => {
    setIsLoading(true);
    const image = await getCard().then((data) => {
      return data?.data[0].card_images[0].image_url ?? "";
    });
    setCard(image);
    setIsLoading(false);
  };

  const storeData = async (value: CardObject[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("deck", jsonValue);
    } catch (e) {}
  };

  const addToDeck = async () => {
    try {
      const newCard: CardObject | undefined = await getCard();

      if (newCard) {
        setDeck((prevDeck) => [...prevDeck, newCard]);
        await storeData([...deck, newCard]);
      }
    } catch (error) {}
  };

  const handleSelectedCard = async () => {
    setIsLoading(true);
    await addToDeck();
    setCard("");
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.help} onPress={getRandomCard}>
        <Text style={styles.helpText}>?</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        {!isLoading ? (
          <YugiohCard card={card} />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.black} />
          </View>
        )}
      </View>
      <View style={styles.formContainer}>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}
            onPress={handleCard}
          >
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
          {card && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={handleSelectedCard}
            >
              <Text style={styles.buttonText}>Escolher</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
