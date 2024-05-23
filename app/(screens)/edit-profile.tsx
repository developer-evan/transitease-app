import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { Link } from 'expo-router'
import { icons, images } from '@/constants'

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [currentpassword, setCurrentPassword] = useState("");
  
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      {/* add image here  */}
      <View style={styles.container}>
        <Image source={icons.profile} style={styles.logo} />
        
        </View>

      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <FormField
          title="Full Name"
          value={fullname}
          otherStyles={styles.formField}
          keyboardType="default"
          placeholder="Full Name"
          handleChangeText={setFullname}
        />
        <FormField
          title="Email"
          value={email}
          otherStyles={styles.formField}
          keyboardType="email-address"
          placeholder="Email Address"
          handleChangeText={setEmail}
        />
        <FormField
          title="Phone Number"
          value={phone}
          otherStyles={styles.formField}
          keyboardType="default"
          placeholder="Phone Number"
          handleChangeText={setPhone}
        />

        <FormField
          title="Current Password"
          value={currentpassword}
          otherStyles={styles.formField}
          placeholder={"Password"}
          handleChangeText={setCurrentPassword}
          secureTextEntry={true}
        />
        <FormField
          title="Password"
          value={password}
          otherStyles={styles.formField}
          placeholder={"Password"}
          handleChangeText={setPassword}
          secureTextEntry={true}
        />
        <FormField
          title="Repeat Password"
          value={repeatPassword}
          otherStyles={styles.formField}
          placeholder={"Repeat Password"}
          handleChangeText={setRepeatPassword}
          secureTextEntry={true}
        />
        <CustomButton
            title="Update Password"
            containerStyles={styles.signUpButton} handlePress={function (): void {
              throw new Error('Function not implemented.')
            } }          // handlePress={register}
        />
        <CustomButton
          title="Update Profile"
          containerStyles={styles.signUpButton}
          handlePress={function (): void {
            throw new Error('Function not implemented.')
          } }          // handlePress={register}
        />

        
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    // marginBottom: 2,
    borderRadius: 100,

  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formField: {
    marginBottom: 3,
  },
  signUpButton: {
    width: '100%',
    // marginBottom: 20,
    marginTop: 20,
  },
  signInLink: {
    color: '#1F41BB',
    textAlign: 'center',
  },


})