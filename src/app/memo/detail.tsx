import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (id: string): void => {
  // 編集画面へ遷移`
  router.push({ pathname: '/memo/edit', params: { id }})
}
 
const Detail = (): React.JSX.Element => {
  const [memo, setMemo] = useState<Memo | null>(null)
  const { id } = useLocalSearchParams()
  
  useEffect(() => {
    if (auth.currentUser === null) return

    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id as string)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt
      })
    })
    return unsubscribe
  }, [id])

  return(
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleString('ja-JP')}</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>

      <CircleButton 
        style={{ top: 60, bottom: 'auto' }}
        onPress={() => handlePress(memo.id)}
      >
        <Icon name="pencil" size={40} color="#fff" />
      </CircleButton>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  memoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32
  },
  memoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingHorizontal: 27
  },
  memoBodyText: {
    paddingVertical:32,
    fontSize: 16,
    lineHeight: 24,
    color: '#000'
  }

})  

export default Detail
