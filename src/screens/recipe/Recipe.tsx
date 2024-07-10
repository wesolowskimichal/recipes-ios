import { Text } from 'react-native'
import { RecipeScreenProps } from '../../types/Types'

const Recipe = ({ navigation, route }: RecipeScreenProps) => {
  const { recipe } = route.params ?? null

  return <Text>Recipe Screen</Text>
}

export default Recipe
