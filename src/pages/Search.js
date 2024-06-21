import React, { useEffect, useState } from 'react';
import { ReactComponent as CancelIcon } from '../assets/cancelIcon.svg';
import { ReactComponent as BackIcon } from '../assets/backArrow.svg';
import { ReactComponent as BuyAirtimeIcon } from '../assets/buyAirtimeIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg';
import { ReactComponent as Kuda } from '../assets/kuda-beneficiaries.svg';
import { ReactComponent as UBA } from '../assets/uba-beneficiaries.svg';
import { ReactComponent as Wema } from '../assets/wema-beneficiaries.svg';
import { ReactComponent as Stanbic } from '../assets/stanbic-beneficiaries.svg';
import { ReactComponent as GTBank } from '../assets/gt-beneficiaries.svg';
import { ReactComponent as NearMeIcon } from '../assets/nearMeIcon.svg';
import { ReactComponent as TransferIcon } from '../assets/transfer-circle.svg';
import { ReactComponent as ArrowIcon } from '../assets/white-chevron-right.svg';
import { Link, useNavigate } from 'react-router-dom';
import {
  getFeatureByCategories,
  getFeatureCategories,
  getFeatures,
} from '../services';
import BottomNav from '../component/BottomNav';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loader from '../component/Loader';

const Search = () => {
  const [searchedData, setSearchedData] = useState(false);
  const [allFeatures, setAllFeatures] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [featCategory, setFeatCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [featByCat, setFeatByCat] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getFeatures();
        setAllFeatures(data);
        console.log(allFeatures)
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchFeatures();
  }, [allFeatures]);

  useEffect(() => {
    const fetchFeatureCategory = async () => {
      setLoading(true);
      try {
        const data = await getFeatureCategories();
        setFeatCategory(data);
        data.forEach((category) => {
          fetchFeatByCat(category.featureCategoryId);
        });
      } catch (error) {
        console.log(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatureCategory();
  }, []);

  const fetchFeatByCat = async (categoryId) => {
    setLoading(true);
    try {
      const data = await getFeatureByCategories(categoryId);
      setFeatByCat((prevFeatByCat) => ({
        ...prevFeatByCat,
        [categoryId]: data,
      }));
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchParam) {
      const filtered = allFeatures.filter((feature) =>
        feature.featureName.toLowerCase().includes(searchParam.toLowerCase())
      );
      setFilteredFeatures(filtered);
      setSearchedData(true);
    } else {
      setSearchedData(false);
      setFilteredFeatures([]);
    }
  }, [searchParam, allFeatures]);

  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };

  return (
    <div className="sm:w-[375px] bg-[#181820]">
      {loading ? (
        <Loader />
      ) : (
        <div className="relative">
          <div className="bg-[#1F2229] px-4 py-[51px] flex items-center gap-[98.5px] w-full pb-[16.48px]">
            <button
              onClick={goBack}
              className="w-[39.5px] h-[35.52px] flex items-center justify-center"
            >
              <BackIcon />
            </button>
            <h2 className="font-semibold text-[20px] text-white w-full">
              Search
            </h2>
          </div>

          <div className="bg-[#181820] pt-[26px] pb-8 min-h-screen">
            <div className="flex items-center mr-[23px] ml-5 bg-[#3A2220] py-2 px-[18px] border border-[#713C34] text-white gap-[23px]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search for anything"
                onChange={handleChange}
                value={searchParam}
                className="w-full bg-transparent text-xs text-white placeholder:text-white outline-none"
              />
              <CancelIcon onClick={() => setSearchParam('')} />
            </div>

            {searchedData ? (
              filteredFeatures.length > 0 ? (
                <div className="pt-[27px] flex flex-col gap-[18.53px] h-full px-5">
                  {filteredFeatures.map((item, index) => (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <div className="flex gap-[13px] items-center">
                        <img src={item.icon} alt='icon' className="h-[48.47px] w-[48.47px]" />
                        <p className="text-white text-xs">{item.featureName}</p>
                      </div>
                      <ArrowIcon />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white text-xs pt-[27px] text-center px-5">
                  No results found
                </p>
              )
            ) : (
              <div className="pt-[22px] h-full">
                <div className="flex flex-col gap-[17px] pr-[23px] pl-5 mb-[22px]">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold text-sm text-white">
                      Beneficiaries
                    </h2>
                    <Link to="/" className="font-bold text-sm text-[#EE5A34]">
                      View all
                    </Link>
                  </div>
                  <div className="flex  gap-[13px] h-full ">
                    <div className="flex flex-col items-center justify-center gap-[5px]">
                      <Kuda className="h-[39px] w-[39px]" />
                      <p className="text-[8px] text-white">Bankole Olu...</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[5px]">
                      <UBA className="h-[39px] w-[39px]" />
                      <p className="text-[8px] text-white">Ayomikun O...</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[5px]">
                      <Wema className="h-[39px] w-[39px]" />
                      <p className="text-[8px] text-white">Sulieman Sh...</p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[5px]">
                      <Stanbic className="h-[39px] w-[39px]" />
                      <p className="text-[8px] text-white">Ayomide Al....</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[5px]">
                      <GTBank className="h-[39px] w-[39px]" />
                      <p className="text-[8px] text-white">Ayomide Al....</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pr-[23px] pl-5 mb-[15px]">
                  <div className="flex items-center gap-2">
                    <NearMeIcon className="h-[57.17px] w-[57.17px]" />

                    <div className="text-white">
                      <p className="text-[10px] leading-none">Near me</p>
                      <p className="text-[8px] font-light">
                        Send to any GTB account near you
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <TransferIcon className="h-[57.17px] w-[57.17px]" />

                    <div className="text-white">
                      <p className="text-[10px] leading-none">Transfer</p>
                      <p className="text-[8px] font-light">
                        Send to other banks{' '}
                      </p>
                    </div>
                  </div>
                </div>

                {featCategory.map((featItem) => (
                  <div
                    key={featItem.id}
                    className="mb-3 flex flex-col gap-4 w-full"
                  >
                    <p className="bg-[#1F2229] w-full text-sm font-semibold text-white pl-[22px] py-2">
                      {featItem.featureCategoryName}
                    </p>
                    <div className="pl-[18px] w-full">
                      <Swiper
                        spaceBetween={13}
                        slidesPerView={3.5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        {featByCat[featItem.featureCategoryId]?.map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="flex flex-col items-center justify-center gap-1">
                              <div className="h-[48.47px] w-[48.47px]">
                                <img
                                  src={item.icon}
                                  alt='icon'
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <p className="text-[#8F8F99] text-[10.54px] text-wrap w-[87px] text-center">
                                {item.featureName}
                              </p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <BottomNav />
        </div>
      )}
    </div>
  );
};

export default Search;
