import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { RecipeScreenProps } from '../../types/Types'
import { useLayoutEffect } from 'react'
import { Image } from 'expo-image'

const Recipe = ({ navigation, route }: RecipeScreenProps) => {
  const { recipe } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: recipe.name
    })
  }, [navigation, recipe.name])

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.info}>Cuisine: {recipe.cuisine}</Text>
      <Text style={styles.info}>Difficulty: {recipe.difficulty}</Text>
      <Text style={styles.info}>Prep Time: {recipe.prepTimeMinutes} mins</Text>
      <Text style={styles.info}>Cook Time: {recipe.cookTimeMinutes} mins</Text>
      <Text style={styles.info}>Servings: {recipe.servings}</Text>
      <Text style={styles.info}>Calories per Serving: {recipe.caloriesPerServing}</Text>
      <Text style={styles.info}>
        Rating: {recipe.rating} ({recipe.reviewCount} reviews)
      </Text>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <View key={index} style={styles.bulletContainer}>
          <Text style={styles.bulletPoint}>{'\u2022'}</Text>
          <Text style={styles.bulletText}>{ingredient}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Instructions</Text>
      {recipe.instructions.map((instruction, index) => (
        <View key={index} style={styles.bulletContainer}>
          <Text style={styles.stepNumber}>{index + 1}.</Text>
          <Text style={styles.bulletText}>{instruction}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Tags</Text>
      <View style={styles.tagsContainer}>
        {recipe.tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  info: {
    fontSize: 16,
    marginBottom: 4
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4
  },
  bulletPoint: {
    fontSize: 24,
    lineHeight: 24
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4
  },
  bulletText: {
    fontSize: 16,
    marginLeft: 8,
    flex: 1
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    padding: 4,
    margin: 4
  }
})

export default Recipe
