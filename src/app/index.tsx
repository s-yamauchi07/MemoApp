import { View, Text, StyleSheet  } from 'react-native'

const Index = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {/* メモ一覧 */}
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年8月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年8月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2025年8月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* アイコン */}
      <View>
        <Text>＋</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#467fd3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  }
})

export default Index
