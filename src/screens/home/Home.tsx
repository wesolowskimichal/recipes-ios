import { useEffect, useState } from 'react'
import { HomeScreenProps, Recipe } from '../../types/Types'
import axios from 'axios'
import { SafeAreaView, StyleSheet, Text, StatusBar as StatusBarRN } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Home = ({ navigation, route }: HomeScreenProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('https://dummyjson.com/recipes')
      if (response.status !== 200) {
        console.log('error while fetching from api')
        return
      }
      setRecipes(response.data)
    }

    fetchRecipes()
  }, [])

  return (
    <>
      <StatusBar style="auto" translucent />
      <SafeAreaView style={styles.root}>
        <Text>hello</Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBarRN.currentHeight
  }
})

export default Home
