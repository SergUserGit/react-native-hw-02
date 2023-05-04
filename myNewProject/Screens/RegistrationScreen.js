import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../images/photo_bg.jpg")}
      ></ImageBackground>
      <View style={styles.form}>
        <Image
          style={styles.imgReg}
          source={require("../images/photo_two.jpg")}
        />
        <Text style={styles.title}>Регистрация</Text>
        <TextInput style={styles.input} placeholder="Логин" />
        <TextInput style={styles.input} placeholder="Адрес электронной почты" />
        <TextInput style={styles.input} placeholder="Пароль" />
        <TouchableOpacity style={styles.btnParol}>
          <Text style={styles.btnParolTxt}>Показать</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.textEnter}>Уже есть аккаунт? Войти</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 30,
    marginTop: 92,
  },
  form: {
    backgroundColor: "#FFFFFF",
    height: 549,
    position: "relative",
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 16,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    maxWidth: 343,
    marginHorizontal: 32,
  },
  btn: {
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 93.5,
    paddingRight: 93.5,
    borderRadius: 100,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 28,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  textEnter: {
    marginHorizontal: 94,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },

  btnParolTxt: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
  },

  btnParol: {
    position: "absolute",
    right: 48,
    top: 332,
  },

  imgReg: {
    height: 120,
    width: 120,
    borderRadius: 16,
    position: "absolute",
    left: 150,
    top: -54,
  },
});
