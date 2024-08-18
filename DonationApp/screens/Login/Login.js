import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Pressable} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            keyboardType={'email-address'}
            label={'Password'}
            placeholder={'********'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title="Login"></Button>
        </View>
        <Pressable style={style.registrationButton}>
          <Pressable
            style={style.registrationButton}
            onPress={() => navigation.navigate(Routes.Registration)}>
            <Header
              color={'#156CF7'}
              type={3}
              title={"Don't have an account?"}
            />
          </Pressable>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
