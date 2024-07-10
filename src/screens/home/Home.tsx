import React, { useCallback, useEffect, useState } from 'react'
import { HomeScreenProps, Recipe as IRecipe } from '../../types/Types'
import axios from 'axios'
import { SafeAreaView, StyleSheet, Text, StatusBar as StatusBarRN, FlatList, View, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Recipe from '../../components/recipe/Recipe'

const Home = ({ navigation, route: _route }: HomeScreenProps) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes')
        if (response.status !== 200) {
          console.log('Error while fetching from API')
          return
        }
        setRecipes(response.data.recipes)
      } catch (error) {
        console.error('Failed to fetch recipes:', error)
      }
    }

    fetchRecipes()
  }, [])

  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const renderItem = useCallback(
    ({ item }: any) => (
      <View style={styles.itemContainer}>
        <Recipe recipe={item} navigation={navigation} />
      </View>
    ),
    [navigation]
  )

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" translucent />
      <Text style={styles.header}>Recipes</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredRecipes}
        renderItem={renderItem}
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
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    margin: 10
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
