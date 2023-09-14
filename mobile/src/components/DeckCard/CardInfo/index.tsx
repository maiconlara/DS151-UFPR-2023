import React from "react";
import { View, Modal, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { CardObject } from "../../../../app/yugioh/interface";

interface CardInfoProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cardInfo: CardObject;
}

export function CardInfo({
  isModalVisible,
  toggleModal,
  setModalVisible,
  cardInfo,
}: CardInfoProps) {
  const { name, atk, def } = cardInfo.data[0];
  const { image_url, image_url_cropped } = cardInfo.data[0].card_images[0];

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={{ uri: image_url_cropped }}
              alt=""
              width={624}
              height={624}
              style={styles.modalCard}
            ></Image>
            <Text style={styles.modalText}>
              {name} atk:{atk} def:{def}
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={toggleModal}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
