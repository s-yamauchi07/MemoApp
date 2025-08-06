import { Stack } from 'expo-router'

const Layout = (): React.JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467fd3'
    },
    headerTintColor: '#fff',
    headerTitle: 'Memo App',
    headerBackTitle: 'Back',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }}/>
}

export default Layout