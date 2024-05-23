import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Authlayout = () => {
  return (
     <>
       <Stack>
         <Stack.Screen 
           name='sign-in'
           options={{
            headerShown: false
           }}
         />
          <Stack.Screen 
           name='sign-up'
           options={{
            headerShown: false
           }}
         />
       </Stack>
       <StatusBar 
      backgroundColor="#000000"
      style="dark"
      />
     </>
  )
}

export default Authlayout

const styles = StyleSheet.create({})