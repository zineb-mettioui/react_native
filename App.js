import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";

const Stack = createNativeStackNavigator();

const products = [
  {
    id: 1,
    type: "product",
    title: "Smart Ring",
    description: "Slimme ring voor gezondheid en tracking",
    price: "EUR 299",
    details:
      "Deze smart ring helpt je met slaap, hartslag en dagelijkse activiteit.",
    image: require("./assets/blue_Of_London.png"),
  },
  {
    id: 2,
    type: "product",
    title: "Smart Ring Pro",
    description: "Geavanceerde ring met extra gezondheidsfuncties",
    price: "EUR 349",
    details: "Een premium model met extra tracking en een luxere afwerking.",
    image: require("./assets/bed.webp"),
  },
];

const blogs = [
  {
    id: 1,
    type: "blog",
    title: "Waarom slimme ringen populair zijn",
    description: "Een korte blog over de groei van wearable technologie.",
    price: "Blog",
    details:
      "Slimme ringen worden populair omdat ze klein, stijlvol en handig zijn voor dagelijkse health tracking.",
    image: require("./assets/bed.webp"),
  },
  {
    id: 2,
    type: "blog",
    title: "Hoe kies je de juiste wearable",
    description: "Tips om een slim product te kiezen dat bij je past.",
    price: "Blog",
    details:
      "Vergelijk batterijduur, design, comfort en functies voordat je beslist welk model het best bij je past.",
    image: require("./assets/bed.webp"),
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ products, blogs }}
        />
        <Stack.Screen name="Details" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
