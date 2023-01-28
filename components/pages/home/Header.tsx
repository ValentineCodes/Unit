import HomeHeader from "../../headers/HomeHeader";
import HomeHeaderMobile from "../../headers/HomeHeaderMobile";

type Props = {};

function Header({}: Props) {
  return (
    <>
      <HomeHeader />
      <HomeHeaderMobile />
    </>
  );
}

export default Header;
