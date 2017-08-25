import { Navigation } from 'react-native-navigation';

import HomeScreen from '../components/screens/home/HomeScreen';
import ProductsScreen from '../components/screens/products/ProductsScreen';
import DrawerMenu from '../components/drawers/menu/Menu';


// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('home.screen', () => HomeScreen);
    Navigation.registerComponent('products.screen', () => ProductsScreen);

    Navigation.registerComponent('app.drawer.Menu', () => DrawerMenu);
}