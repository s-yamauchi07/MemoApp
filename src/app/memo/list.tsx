import { View, StyleSheet  } from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {/* メモ一覧 */}
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      {/* アイコン */}
      
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
