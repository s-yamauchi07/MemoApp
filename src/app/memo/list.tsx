import { View, StyleSheet  } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const List = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <Header />
      {/* メモ一覧 */}
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      {/* アイコン */}
      <CircleButton>
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
