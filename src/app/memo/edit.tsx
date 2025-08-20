import { View, TextInput, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'

const handlePress = (id: string, bodyText: string): void => {
  if ( auth.currentUser == null) return 
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)

  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('更新に失敗しました')
    })
}

const Edit = (): React.JSX.Element => {
  const { id } = useLocalSearchParams() as { id: string}
  const [bodyText, setBodyText] = useState('')
  
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const remoteBodyText = docRef?.data()?.bodyText
        setBodyText(remoteBodyText)
      })
      .catch((error)=> {
        console.log(error)
      })
  }, [])

  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          multiline 
          style={styles.input} 
          value={bodyText} 
          onChangeText={(text) => setBodyText(text)}
          autoFocus
        />
      </View>
      <CircleButton onPress={() => handlePress(id, bodyText)}>
        <Icon name="check" size={40} color="#fff" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1
  },
  input: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 26
  }
})

export default Edit