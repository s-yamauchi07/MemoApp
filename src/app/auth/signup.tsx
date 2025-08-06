import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, router } from 'expo-router'

const handlePress = (): void => {
  // 会員登録
  router.push('/memo/list')
}

const SignUp = (): React.JSX.Element => {
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>SignUp</Text>
        <Input inputValue="Email address" />
        <Input inputValue="Password" />
        <Button label="Submit" onPress={handlePress}/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href="auth/login" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4fb'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBlock: 24
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'    
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#666'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3'
  }
})

export default SignUp