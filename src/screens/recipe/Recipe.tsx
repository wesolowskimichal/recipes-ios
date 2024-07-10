import { Text } from 'react-native'
import { RecipeScreenProps } from '../../types/Types'
import { useLayoutEffect } from 'react'

const Recipe = ({ navigation, route }: RecipeScreenProps) => {
  const { recipe } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: recipe.name
    })
  }, [navigation, recipe.name])

  return <Text>Recipe Screen</Text>
}

export default Recipe
