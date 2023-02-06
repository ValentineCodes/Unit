import PageLayout from "../components/layouts/PageLayout";
import NFTInfo from "../components/pages/nft/NFTInfo";
import { Tab } from "@headlessui/react";
import Slider from "react-slick";
import NFT from "../components/pages/home/TrendingCategories/modules/NFT";
import CategoryMenu from "../components/pages/home/TrendingCategories/CategoryMenu";
import { MusicalNoteIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { IoIosExpand } from "react-icons/io";
import { BsJournalBookmark } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";

interface MenuTabProps {
  title: string;
}

const categories = [
  {
    name: "Blockchain",
    icon: null,
  },
  {
    name: "Category",
    icon: <MusicalNoteIcon className="w-3 mr-1" />,
  },
  {
    name: "Properties",
    icon: <VscSymbolColor className="w-3 mr-1" />,
  },
  {
    name: `Sale${"\u00A0"}type`,
    icon: <GlobeAltIcon className="w-3 mr-1" />,
  },

  {
    name: `Price${"\u00A0"}range`,
    icon: <AiOutlineCamera className="w-3 mr-1" />,
  },
];

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white inline-block rounded-full absolute top-[45%] left-[-.8em] z-20 shadow-lg p-[10px]"
    >
      <ChevronLeftIcon className="w-5" />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white inline-block rounded-full absolute top-[45%] right-[-.8em] z-20 shadow-lg p-[10px]"
    >
      <ChevronRightIcon className="w-5" />
    </div>
  );
}

const MenuTab = ({ title }: MenuTabProps) => {
  return (
    <Tab as="span">
      {({ selected }) => (
        <div
          className={`${
            selected ? "border-b-2 border-blue-500" : "text-gray-400"
          } px-4 py-1 font-bold cursor-pointer`}
        >
          {title}
        </div>
      )}
    </Tab>
  );
};

export default () => {
  const sliderItems = [1, 2, 3, 4, 5, 6, 7, 8];
  const sliderConfig = {
    dots: false,
    infinite: sliderItems.length > 3,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          vertical: false,
          infinite: false,
        },
      },
    ],
  };
  return (
    <PageLayout title="NFT Funny Cat">
      <NFTInfo />

      {/* <div className=" bg-gray-500"> */}
      <Tab.Group as="div" className="max-w-[992px] mx-auto my-16">
        <Tab.List className="border-b flex justify-center">
          <MenuTab title="Items" />
          <MenuTab title="Activity" />
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="my-10">
              <CategoryMenu
                categories={categories}
                onSelectCategory={(category) => console.log(category)}
              />
            </div>

            <div className="grid max-md:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
              {sliderItems.map((_) => (
                <NFT key={_} />
              ))}
            </div>

            <Slider {...sliderConfig} className="w-full md:hidden mt-8">
              {sliderItems.map((_) => (
                <NFT key={_} />
              ))}
            </Slider>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* </div> */}
    </PageLayout>
  );
};
