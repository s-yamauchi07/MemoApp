import { View, StyleSheet, FlatList  } from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import LogOutButton from '../../components/LogOutButton'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db, auth } from '../../config'
import { Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): React.JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])

  // Expo RouterのuseNavigationフックを使用してナビゲーションオブジェクトを取得
  const navigation = useNavigation()
  // 画面が表示された時初回だけheaderをカスタマイズする
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])

  useEffect(() => {
    // Firestoreのコレクションを監視する
    if (auth.currentUser === null) return 

    // ユーザーのmemoコレクションの参照先を指定
    const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)
    // クエリを指定する(日付の新しい順に取得する)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    // onSnapshotでリアルタイムにデータを取得
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={memos}
        renderItem={({item})=> <MemoListItem memo={item} />}
      />
      {/* MemoListItemコンポーネントにmemoを渡す */}
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#fff"/>
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})  

export default List
