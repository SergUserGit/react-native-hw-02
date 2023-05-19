import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useEffect } from "react";

import * as Font from "expo-font";

export default function RegistrationScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const showDid = Keyboard.addListener("keyboardDidHide", () => {
      setShowKeyBoard(false);
    });

    const keyboardDidShow = Keyboard.addListener("keyboardDidShow", () => {
      setShowKeyBoard(true);
    });

    return () => {
      showDid.remove();
      keyboardDidShow.remove();
    };
  }, []);

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [isShowParolSimbol, setShowParolSimbol] = useState(true);
  const [isShowKeyBoard, setShowKeyBoard] = useState(false);

  function onChangeTextEmail(value) {
    SetEmail(value);
  }

  function onChangeTextPassword(value) {
    SetPassword(value);
  }

  function onSubmitForm() {
    console.log("Email", email);
    console.log("Password", password);
  }

  function onPressShowParolButton() {
    showParolSimbol();
  }

  function showParolSimbol() {
    if (!isShowParolSimbol) {
      setShowParolSimbol(true);
    } else {
      setShowParolSimbol(false);
    }
  }

  function WithoutFeedback() {
    onHideKeyBoard();
  }

  function onHideKeyBoard() {
    if (isShowKeyBoard) {
      Keyboard.dismiss();
      setShowKeyBoard(false);
    }
  }

  useEffect(() => {
    Font.loadAsync({
      "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) return null;

  return (
    <TouchableWithoutFeedback onPress={WithoutFeedback}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/photo_bg.jpg")}
        >
          <View
            style={{
              ...styles.form,
              height: isShowKeyBoard ? 275 : 489,
            }}
          >
            <Text style={styles.title}>Войти</Text>
            <TextInput
              style={{
                color: isShowKeyBoard ? "#212121" : "#BDBDBD",
                ...styles.inputEmail,
              }}
              placeholder="Адрес электронной почты"
              onChangeText={onChangeTextEmail}
              value={email}
            />
            <TextInput
              style={styles.inputParol}
              placeholder="Пароль"
              secureTextEntry={isShowParolSimbol}
              onChangeText={onChangeTextPassword}
              value={password}
            ></TextInput>
            <TouchableOpacity
              style={{
                ...styles.btnLogin,
                bottom: isShowKeyBoard ? 55 : 270,
              }}
              onPress={onPressShowParolButton}
            >
              <Text style={styles.btnLoginText}>Показать</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmitForm}>
              <Text style={styles.btn}>Войти</Text>
            </TouchableOpacity>
            <Text style={styles.textEnter}>
              Нет аккаунта? Зарегистрироваться
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 32,
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
  },
  form: {
    backgroundColor: "#FFFFFF",
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  inputEmail: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 16,
    maxWidth: 343,
    marginHorizontal: 32,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    fontFamily: "Roboto-Regular",
  },

  inputParol: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 15,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 43,
    maxWidth: 343,
    marginHorizontal: 32,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
    fontFamily: "Roboto-Regular",
  },
  btn: {
    fontWeight: 400,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 148.5,
    paddingRight: 148.5,
    borderRadius: 100,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
  },
  textEnter: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  textParol: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnLoginText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  btnLogin: {
    position: "absolute",
    right: 48,
  },
});
