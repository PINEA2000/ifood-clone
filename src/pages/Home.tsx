import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Categories from '../components/Categories';
import Voucher from '../components/Voucher';
import Sponsor from '../components/Sponsor';
import Carousel from '../components/Carousel';
import Famous from '../components/Famous';
import SuggestedRestaurants from '../components/SuggestedRestaurants';

import { Container } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Header />
      <Voucher />
      <Categories />
      <Sponsor />
      <Carousel />
      <Famous />
      <SuggestedRestaurants />
      <MobileMenu />
    </Container>
  )
}