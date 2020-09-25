import React from 'react';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import {useAuth} from '../../../contexts/auth';

export default function LoginEditInfo({navigation}) {
  const {
    user,
    bio,
    setBio,
    city,
    setCity,
    st,
    setSt,
    phone,
    setPhone,
  } = useAuth();

  const width = useWindowDimensions().width;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, textStyles.font]}>
            Cadastre-se para começar!
          </Text>
          <View style={styles.avatarView}>
            <BorderlessButton>
              <Image
                source={{
                  uri:
                    user != undefined || null
                      ? user.picture.data.url
                      : 'https://i.pinimg.com/564x/c5/69/99/c569990f2af94daa7a4543d9a726d01b.jpg',
                }}
                style={styles.avatar}
              />
            </BorderlessButton>
          </View>
        </View>
        <KeyboardAvoidingView behavior={'position'}>
          <View style={[styles.card, {width: width - 55}]}>
            <View style={styles.form}>
              <View style={styles.inputView}>
                <Icon
                  name={'user'}
                  size={24}
                  color={'#7e57c2'}
                  style={styles.icon}
                />
                <TextInput
                  style={[styles.input, {width: width - 150}]}
                  value={
                    user != undefined || null ? user.name : 'Nome completo'
                  }
                  placeholder={'Nome completo'}
                  editable={false}
                  underlineColorAndroid={'#3F3F3F'}
                />
              </View>
              <View style={styles.inputView}>
                <Icon
                  name={'feather'}
                  size={24}
                  color={'#7e57c2'}
                  style={styles.icon}
                />
                <TextInput
                  style={[styles.input, {width: width - 150}]}
                  value={bio}
                  placeholder={'Descrição (opcional)'}
                  editable={true}
                  onChangeText={(text) => setBio(text)}
                  underlineColorAndroid={'#3F3F3F'}
                  multiline
                  maxLength={500}
                />
              </View>
              <View style={styles.inputView}>
                <Icon
                  name={'phone'}
                  size={24}
                  color={'#7e57c2'}
                  style={styles.icon}
                />
                <TextInput
                  style={[styles.input]}
                  onChangeText={(text) => setPhone(text)}
                  value={phone != undefined || null ? phone : '(XX) XXXXX-XXXX'}
                  placeholder={'Telefone (Opcional)               '}
                  underlineColorAndroid={'#000'}
                  keyboardType={'phone-pad'}
                />
              </View>
              <View
                style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <View style={styles.inputView}>
                  <Icon
                    name={'feather'}
                    size={24}
                    color={'#7e57c2'}
                    style={styles.icon}
                  />
                  <TextInput
                    style={[styles.inputLocation, {width: width - 300}]}
                    value={st}
                    placeholder={'Estado'}
                    editable={true}
                    onChangeText={(text) => setSt(text)}
                    underlineColorAndroid={'#3F3F3F'}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={[
                      styles.inputLocation,
                      {width: width - 260, paddingLeft: 10},
                    ]}
                    value={city}
                    placeholder={'Cidade'}
                    editable={true}
                    onChangeText={(text) => setCity(text)}
                    underlineColorAndroid={'#3F3F3F'}
                  />
                </View>
              </View>
            </View>
            <RectButton
              style={[styles.button, {width: width - 150}]}
              onPress={() => {
                navigation.navigate('LoginOK');
              }}>
              <Text style={[styles.buttonText, textStyles.font]}>
                Tudo pronto!
              </Text>
            </RectButton>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
