import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
// import images from "@/constants/images";
import axios from "axios";
import { useAuth, API_URL } from "../context/AuthContext";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();

  useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(`${API_URL}/`);
        console.log(result.data);
    }
    testCall();
    }
    , []);

  const login = async () => {
    const result = await onLogin(email, password);
    if (result && result.error) {
      alert(result.msg);
    } else {
      router.push("/home");
    }
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <FormField
            title="Email"
            value={email}
            otherStyles={styles.formField}
            keyboardType="email-address"
            placeholder="Email Address"
            handleChangeText={setEmail}
          />
          <FormField
            title="Password"
            value={password}
            otherStyles={styles.formField}
            placeholder={"Password"}
            handleChangeText={setPassword}
            secureTextEntry={true}
          />

          <Link href="/forgot-password" style={styles.forgotPasswordLink}>
            Forgot Password?
          </Link>
          <CustomButton
            title="Sign In"
            containerStyles={styles.signInButton}
            // handlePress={() => router.push("/home")}
            handlePress={login}
          />
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Link href="/sign-up" style={styles.signUpLink}>
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
    minHeight: Dimensions.get("window").height - 100,
  },

  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "700",
    color: "#1F41BB",
    textAlign: "center",
  },
  formField: {
    marginTop: 16,
  },
  signInButton: {
    marginTop: 16,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  signUpText: {
    fontSize: 18,
    color: "#000",
    // fontFamily: "pregular",
  },
  signUpLink: {
    fontSize: 18,
    // fontFamily: "psemibold",
    color: "#1F41BB",
    marginLeft: 4,
  },
  forgotPasswordLink: {
    fontSize: 18,
    // fontFamily: "psemibold",
    color: "#1F41BB",
    textAlign: "right",
    marginTop: 4,
  },
});
