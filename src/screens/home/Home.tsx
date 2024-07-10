import { useCallback, useEffect, useState } from 'react'
import { HomeScreenProps, Recipe as IRecipe } from '../../types/Types'
import axios from 'axios'
import { SafeAreaView, StyleSheet, Text, StatusBar as StatusBarRN, FlatList, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Recipe from '../../components/recipe/Recipe'

const Home = ({ navigation, route }: HomeScreenProps) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('https://dummyjson.com/recipes')
      if (response.status !== 200) {
        console.log('error while fetching from api')
        return
      }
      setRecipes(response.data.recipes)
    }

    fetchRecipes()
  }, [])

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" translucent />
      <Text style={styles.header}>Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Recipe recipe={item} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBarRN.currentHeight
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    padding: 4,
    marginBottom: 5
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  row: {
    justifyContent: 'space-between'
  },
  itemContainer: {
    flex: 1,
    margin: 5
  }
})

export default Home
