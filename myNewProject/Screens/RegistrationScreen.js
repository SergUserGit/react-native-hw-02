import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

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

  const [isShowKeyBoard, setShowKeyBoard] = useState(false);
  const [isShowParolSimbol, setShowParolSimbol] = useState(true);
  const [login, SetLogin] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  function onPresBtnKeyBoard() {
    showKeyBoard();
    onHideKeyBoard();
  }

  function onHideKeyBoard() {
    if (isShowKeyBoard) {
      Keyboard.dismiss();
      setShowKeyBoard(false);
    }
  }

  function WithoutFeedback() {
    onHideKeyBoard();
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

  function showKeyBoard() {
    if (!isShowKeyBoard) {
      setShowKeyBoard(true);
    } else {
      setShowKeyBoard(false);
    }
  }

  function onChangeTextLogin(value) {
    SetLogin(value);
  }

  function onChangeTextEmail(value) {
    SetEmail(value);
  }

  function onChangeTextPassword(value) {
    SetPassword(value);
  }

  function onSubmitForm() {
    console.log("Login", login);
    console.log("Email", email);
    console.log("Password", password);
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
              height: isShowKeyBoard ? 400 : 549,
            }}
          >
            <TouchableOpacity
              onPress={onPresBtnKeyBoard}
              style={{
                ...styles.btnKeyBoard,
                borderColor: isShowKeyBoard ? "#BDBDBD" : "#FF6C00",
              }}
            >
              <Image
                style={styles.imageOpen}
                source={
                  isShowKeyBoard
                    ? require("../images/button_close.png")
                    : require("../images/button_open.png")
                }
              />
            </TouchableOpacity>
            <Image
              style={styles.imgReg}
              source={
                isShowKeyBoard
                  ? require("../images/photo_two.jpg")
                  : require("../images/photo_one.jpg")
              }
            />
            <Text style={styles.title}>Регистрация</Text>
            <TextInput
              style={{
                ...styles.input,
                color: isShowKeyBoard ? "#212121" : "#BDBDBD",
                backgroundColor: isShowKeyBoard ? "#FFFFFF" : "#F6F6F6",
                borderColor: isShowKeyBoard ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Логин"
              onFocus={() => setShowKeyBoard(true)}
              onChangeText={onChangeTextLogin}
              value={login}
            />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={() => setShowKeyBoard(true)}
              onChangeText={onChangeTextEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              onFocus={() => setShowKeyBoard(true)}
              secureTextEntry={isShowParolSimbol}
              onChangeText={onChangeTextPassword}
              value={password}
            />
            <TouchableOpacity
              style={styles.btnParol}
              onPress={onPressShowParolButton}
            >
              <Text style={styles.btnParolTxt}>Показать</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSubmitForm}
              style={{ display: isShowKeyBoard ? "none" : "flex" }}
            >
              <Text style={styles.btn}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <Text
              style={{
                ...styles.textEnter,
                display: isShowKeyBoard ? "none" : "flex",
              }}
            >
              Уже есть аккаунт? Войти
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
    marginBottom: 30,
    marginTop: 92,
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
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
  },
  textEnter: {
    marginHorizontal: 94,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },

  btnParolTxt: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },

  btnParol: {
    position: "absolute",
    right: 48,
    top: 334,
  },

  imgReg: {
    height: 120,
    width: 120,
    borderRadius: 16,
    position: "absolute",
    left: 140,
    top: -54,
  },

  imageOpen: {
    width: 13,
    height: 13,
  },

  btnKeyBoard: {
    width: 25,
    height: 25,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    left: 260,
  },
});
