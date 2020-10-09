import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../Component/Div';
import styles from './styles';

import api from '../../services/api';

export default function EditResidenceConfig({route}) {
  function handleResidenceDeletion(residence_id) {
    api
      .delete(`/residences/${residence_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleUpdateAvailability(residence_id, available) {
    api
      .patch(`/residences/${residence_id}/available`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.section}>
          <View style={styles.infoView}>
            <Text style={styles.title}>Disponibilidade: </Text>
            <Text style={styles.status}>disponível</Text>
            <View>
              <RectButton
                onPress={() =>
                  handleUpdateAvailability(route.params.residence.id, true)
                }
                style={styles.button}>
                <Icon
                  style={styles.powerIcon}
                  name={'power'}
                  size={40}
                  color={'#26E07C'}
                />
              </RectButton>
            </View>
          </View>
          <View>
            <Text style={styles.description}>
              Se isso estiver desligado, a residência constará como ocupada e
              não será mostrada aos usuários.
            </Text>
          </View>
        </View>
        <Div threshold={32} height={1.6} />
        <RectButton>
          <View style={styles.section}>
            <View style={styles.headerView}>
              <Text style={styles.title}>Alterar anúncio</Text>
              <Icon
                style={styles.icon}
                name={'edit-3'}
                size={28}
                color={'#3f3f3f'}
              />
            </View>
            <View>
              <Text style={styles.description}>
                Clique aqui para alterar as informações dessa residência.
              </Text>
            </View>
          </View>
        </RectButton>
        <Div threshold={32} height={1.5} />
        <RectButton
          onPress={() => handleResidenceDeletion(route.params.residence.id)}>
          <View style={styles.section}>
            <View style={styles.headerView}>
              <Text style={styles.title}>Excluir anúncio</Text>
              <Icon
                style={styles.icon}
                name={'trash-2'}
                size={28}
                color={'#3f3f3f'}
              />
            </View>
            <View>
              <Text style={styles.description}>
                Clique aqui para excluir o seu anúncio permanentemente.
              </Text>
            </View>
          </View>
        </RectButton>
        <Div threshold={32} height={1.5} />
        <View>
          <View style={styles.section}>
            <View style={styles.headerView}>
              <Text style={styles.title}>Interessados</Text>
              <Icon
                style={styles.icon}
                name={'edit-3'}
                size={28}
                color={'#3f3f3f'}
              />
            </View>
            <View>
              <Text style={styles.description}>
                Clique aqui para alterar as informações dessa residência.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
