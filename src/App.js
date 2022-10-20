import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import LandingScreen from './screen/LandingScreen'
import AccessorieScreen from './screen/AccessorieScreen'
import AboutScreen from './screen/AboutScreen'
import CostumeScreen from './screen/CostumeScreen'
import ShowScreen from './screen/ShowScreen'
import ShopScreen from './screen/shop/ShopScreen'
import WeddingScreen from './screen/WeddingScreen'
import NavItem from './components/Navbar/NavItem';
import BarrettesShopScreen from './screen/shop/categories/BarrettesShopScreen'
import BijouxShopScreen from './screen/shop/categories/BijouxShopScreen'
import ParruresShopScreen from './screen/shop/categories/ParruresShopScreen'
import PincesShopScreen from './screen/shop/categories/PincesShopScreen'
import TiaresShopScreen from './screen/shop/categories/TiaresShopScreen'

function App() {
  return (
  <>
    <NavBar>
      <NavItem title={'Accesoires'} to={'/accessories'}/>
      <NavItem title={'Mariage'} to={'/weddings'}/>
      <NavItem title={'Costumes'} to={'/costumes'}/>
      <NavItem title={'Spectacles'} to={'/shows'}/>
      <NavItem title={'A propos'} to={'/abouts'}/>
      <NavItem title={'Boutique'} to={'/shop'}/>
    </NavBar>

      <Routes>
        <Route path='/' element={<LandingScreen />}/>
        <Route path='/accessories' element={<AccessorieScreen/>}/>
        <Route path='/weddings' element={<WeddingScreen/>}/>
        <Route path='/costumes' element={<CostumeScreen/>}/>
        <Route path='/shows' element={<ShowScreen/>}/>
        <Route path='/abouts' element={<AboutScreen/>}/>
        <Route path='/shop' element={<ShopScreen/>}>
          <Route path='/shop/pinces' element={<BarrettesShopScreen/>}/>
          {/* <Route path='/shop/pinces/:id' element={<BarrettesShopScreen/>}/> */}
          <Route path='/shop/tiares' element={<BijouxShopScreen/>}/>
          <Route path='/shop/parrures' element={<ParruresShopScreen/>}/>
          <Route path='/shop/barrettes' element={<PincesShopScreen/>}/>
          <Route path='/shop/bijoux' element={<TiaresShopScreen/>}/>
        </Route>
        {/* TODO Prevoir une route 404 */}
      </Routes>
  </>


  );
}

export default App;
