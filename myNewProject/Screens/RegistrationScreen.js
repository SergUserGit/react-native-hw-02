import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
  KeyboardAvoidingView,
} from "react-native";
//<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//
//<KeyboardAvoidingView behavior="height"></KeyboardAvoidingView></KeyboardAvoidingView>
export default function RegistrationScreen() {
  const [isShowKeyBoard, setShowKeyBoard] = useState(false);

  function onPresBtnKeyBoard() {
    if (!isShowKeyBoard) {
      setShowKeyBoard(true);
    } else {
      setShowKeyBoard(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/photo_bg.jpg")}
        >
          <View
            style={{
              ...styles.form,
              height: isShowKeyBoard ? 378 : 549,
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
              style={styles.input}
              placeholder="Логин"
              onFocus={() => setShowKeyBoard(true)}
            />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={() => setShowKeyBoard(true)}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              onFocus={() => setShowKeyBoard(true)}
            />
            <TouchableOpacity style={styles.btnParol}>
              <Text style={styles.btnParolTxt}>Показать</Text>
            </TouchableOpacity>
            <TouchableOpacity
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
  },
  form: {
    backgroundColor: "#FFFFFF",
    // height: 549,
    //height: 374,
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
    //   borderColor: "#FF6C00",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    left: 260,
  },
});
