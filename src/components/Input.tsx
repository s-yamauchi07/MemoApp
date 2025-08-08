import { TextInput, StyleSheet, TextInputProps } from 'react-native'

interface Props {
  inputValue: string
  onChangeText: (text: string) => void
  autoCapitalize: TextInputProps['autoCapitalize']
  keyboardType?: 'email-address' | undefined
  placeholder? : string
  secureTextEntry?: boolean
  textContentType?: 'emailAddress' | 'password'
}
const Input = (props: Props) => {
  const { 
    inputValue, 
    onChangeText,
    autoCapitalize,
    keyboardType,
    placeholder,
    secureTextEntry,
    textContentType
  } = props 

  return (
    <TextInput 
      style={styles.input} 
      value={inputValue} 
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
    />
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