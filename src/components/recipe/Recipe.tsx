import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Recipe as IRecipe } from '../../types/Types'
import { Image } from 'expo-image'

type RecipeProps = {
  recipe: IRecipe
}

const Recipe = ({ recipe }: RecipeProps) => {
  const getColor = () => {
    if (recipe.difficulty === 'Easy') {
      return 'green'
    } else if (recipe.difficulty === 'Medium') {
      return 'orange'
    }
    return 'red'
  }

  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.name}>{recipe.name}</Text>
      <View style={styles.infoWrapper}>
        <Text>{recipe.rating}/5</Text>
        <Text style={{ color: getColor() }}>{recipe.difficulty}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  image: {
    aspectRatio: 3 / 4,
    width: '100%',
    borderRadius: 5
  },
  name: {
    textAlign: 'center',
    paddingTop: 1,
    marginBottom: 5
  },
  infoWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#000',
    borderTopWidth: 1,
    padding: 2
  }
})

export default Recipe
