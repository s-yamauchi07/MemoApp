import { Redirect, router }  from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config'
import { useEffect } from 'react'

const Index = (): React.JSX.Element => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        // ユーザーがログインしている場合、メモ一覧画面にリダイレクト
        router.replace('/memo/list')
      } else {
        // ユーザーがログインしていない場合、サインアップ画面にリダイレクト
        router.replace('/auth/signup')
      }
    })
  }, [])
  
  return <Redirect href="auth/signup" />
}

export default Index
