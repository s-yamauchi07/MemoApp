import { TextInput, StyleSheet } from 'react-native'

interface Props {
  inputValue: string
}

const Input = (props: Props) => {
  const { inputValue } = props 

  return (
    <TextInput style={styles.input} value={inputValue} />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  }
})

export default Input