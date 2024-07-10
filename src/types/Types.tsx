import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationProp, RouteProp } from '@react-navigation/native'

//#region Navigation Types
export type RootStackParamList = {
  Home: undefined
  Recipe: { recipe?: Recipe | null }
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type RecipeScreenProps = NativeStackScreenProps<RootStackParamList, 'Recipe'>

export type NavProps = {
  navigation: NavigationProp<any>
  route: RouteProp<RootStackParamList, keyof RootStackParamList>
}

//#endregion

//#region Api Types
export type Recipe = {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}
//#endregion
