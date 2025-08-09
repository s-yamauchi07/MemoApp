import { View, TextInput, StyleSheet } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config'
import { useState } from 'react'
import  KeyboardSafeView from '../../components/KeyboardAvoidingView'

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) return
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)

  // memo作成をする処理を記載する。
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef) => {
      // 作成後、メモ一覧画面に戻る
     console.log('success', docRef.id)
     router.back()
    })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}

const Create = (): React.JSX.Element => {
  const [bodyText, setBodyText] = useState('')

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          multiline 
          style={styles.input} 
          value={bodyText} 
          onChangeText={(text) => setBodyText(text)}
          autoFocus
        />
      </View>
      <CircleButton onPress={() => handlePress(bodyText)}>
        <Icon name="check" size={40} color="#fff" />
      </CircleButton>
    </KeyboardSafeView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 26
  }
})

export default Create