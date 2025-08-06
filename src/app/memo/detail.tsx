import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

import { router } from 'expo-router'

const handlePress = (): void => {
  // 編集画面へ遷移`
  router.push('/memo/edit')
}
 
const Detail = (): React.JSX.Element => {
  return(
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025年8月1日 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          門分用なので使い方を待ちあえると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>

      <CircleButton 
        style={{ top: 60, bottom: 'auto' }}
        onPress={handlePress}
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
    paddingVertical:32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000'
  }

})  

export default Detail
