import React, { useState } from "react";
import ClickableLogo from "./ClickableLogo";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useSearch } from "../Context/SearchContext";

const Header = ({ children }) => {
  const {setSearchTerm} = useSearch()
  const [input, setInput] = useState("nike");
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const handleChange = (event) => {
    setInput(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mb-5 flex items-center justify-center px-5 !px-0 md:px-5 text-tm-gray sticky top-0 font-semibold !bg-[#f9fbfe] border-b shadow-none z-[51]">
      <div className="w-full max-w-[1240px] !max-w-[1400px] -ml-5">
        <header className="py-2 -mt-5">
          <div className="flex flex-wrap justify-between items-center px-3">
            <div className="sm:col-span-1 py-4 4xl:right-20 flex items-center space-x-2">
              <ClickableLogo width={200} height={100} />
            </div>

            <div className="flex-1 hidden md:block ml-4">
              <form
                name="searchbar_form"
                className="no-ring flex-1 py-4 w-full px-5 md:max-w-[900px] "
              >
                <div className="flex items-center w-full relative justify-center p-3">
                  <div className="flex flex-1 border-[0.5px] bg-white p-4 pr-3 rounded-[14px] items-center justify-between gap-x-2 max-h-[56px] border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="hidden md:flex h-5 w-5 text-gray-400 ml-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <input
                      type="search"
                      style={{ border: "0px" }}
                      role="search"
                      className="flex-1 p-2 rounded text-tm-dark-gray placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
                      placeholder="Search for Owners"
                      value={input}
                      onChange={handleChange}
                    />

                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center cursor-pointer relative h-[24px] w-[24px] sm:h-[32px] sm:w-[32px]">
                        <img
                          alt="upload logo"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Fcamera_icon.png&w=2048&q=75"
                        ></img>
                      </div>
                      <button className="h-[40px] min-w-[40px] max-w-[40px] -mr-[2px] md:hidden self-center bg-orange rounded-base flex items-center justify-center flex-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-5 h-5 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button className="bg-blue-500 py-7 px-8 w-[130px] h-[60px] md:py-3.5 md:px-8 font-bold flex items-center justify-center rounded-2xl relative overflow-hidden h-[54px] disabled:bg-tm-gray-300 disabled:hover:bg-tm-gray-300 disabled:border-tm-gray-300 disabled:!cursor-not-allowed focus-visible:outline-none h-[50px] ml-3 md:block hidden border border-solid border-tm-blue bg-tm-blue hover:bg-tm-royal-blue active:bg-tm-blue-200 text-white ">
                    <span>Search</span>
                  </button>
                  <div></div>
                </div>
              </form>
            </div>

            <div className="sm:col-span-3 flex items-center">
              <Link to="https://www.trademarkia.com/trademark/trademark-registration/step1?mark_name=">
                <button className="bg-orange-500 h-[65px] w-[220px] py-7 px-10 md:py-3.5 md:px-8 font-bold flex items-center justify-center rounded-2xl relative overflow-hidden h-[54px] disabled:bg-tm-gray-300 disabled:hover:bg-tm-gray-300 disabled:border-tm-gray-300 disabled:!cursor-not-allowed focus-visible:outline-none !py-3 !px-5 hidden lg:inline-block xs:whitespace-nowrap border border-solid border-tm-orange bg-tm-orange hover:bg-tm-orange-100 active:bg-tm-orange-200 text-white ">
                  Apply for TradeMark
                </button>
              </Link>
            </div>
          </div>
        </header>
        <form
          name="searchbar_form"
          className="no-ring flex-1 py-2 w-full px-5 md:max-w-[900px] md:hidden"
        >
          <div className="flex items-center w-full relative justify-center">
            <div className="flex flex-1 border-[0.5px] bg-white p-2 pr-3 rounded-[14px] items-center justify-between gap-x-2 max-h-[56px] border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="hidden md:flex h-5 w-5 text-gray-400 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="search"
                role="search"
                class="flex-1 border-0 text-tm-dark-gray placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
                placeholder="Search for Owners"
                value="nike"
              />
              <div className="flex items-center gap-x-4">
                <div className="flex items-center cursor-pointer relative h-[24px] w-[24px] sm:h-[32px] sm:w-[32px]">
                  <img
                    alt="upload logo"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    sizes="100vw"
                    src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Fcamera_icon.png&w=1920&q=75"
                  />
                </div>
                <button className="h-[40px] min-w-[40px] max-w-[40px] -mr-[2px] md:hidden self-center bg-tm-orange rounded-base flex items-center justify-center flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-5 h-5 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <button className="py-6 px-8 md:py-3.5 md:px-8 font-bold flex items-center justify-center rounded-2xl relative overflow-hidden h-[54px] disabled:bg-tm-gray-300 disabled:hover:bg-tm-gray-300 disabled:border-tm-gray-300 disabled:!cursor-not-allowed focus-visible:outline-none h-[50px] ml-3 md:block hidden  border border-solid border-tm-blue bg-tm-blue hover:bg-tm-royal-blue active:bg-tm-blue-200 text-white ">
              <span>Search</span>
            </button>
            <div></div>
          </div>
        </form>
        <div className="px-5">
          <div className="overflow-x-auto overflow-y-clip flex relative">
            <Link to="/trademark">
              <div className="mr-6 flex items-center py-3 font-semibold text-sm relative after:transition-all after:absolute after:inset-0 after:top-[unset] after:rounded-t-full text-gray-500 after:bg-tm-gray-400 after:h-0 after:hover:h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="#60626c"
                  stroke="#60626c"
                  class="mr-2"
                  color="#60626c"
                >
                  <path
                    stroke-width="1.159"
                    d="M10.96.75V2.5H6.978v8.75H4.984V2.5H1V.75h9.96Zm1.993 0h2.49l2.989 4.546L21.42.75h2.49v10.5h-1.992V3.491l-3.486 5.306-3.487-5.304v7.757h-1.992V.75Z"
                  ></path>
                </svg>
                <p class="text-base cursor-pointer whitespace-nowrap">Trademarks</p>
              </div>
            </Link>
            <Link to="/owners">
              <div className="mr-6 flex items-center py-3 font-semibold text-sm relative after:transition-all after:absolute after:inset-0 after:top-[unset] after:rounded-t-full text-gray-500 after:bg-tm-gray-400 after:h-0 after:hover:h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="#60626C"
                  class="mr-2"
                >
                  <path d="M0 14.576c0-1.473.632-2.885 1.758-3.927C2.883 9.61 4.41 9.024 6.002 9.024c1.592 0 3.118.585 4.244 1.627 1.125 1.04 1.758 2.453 1.758 3.926H0Zm6.002-6.247C3.515 8.33 1.5 6.465 1.5 4.165 1.5 1.864 3.515 0 6.002 0c2.487 0 4.501 1.864 4.501 4.165 0 2.3-2.014 4.164-4.501 4.164Z"></path>
                </svg>
                <p class="text-base cursor-pointer whitespace-nowrap">
                  Owners
                </p>
              </div>
            </Link>
            <Link
              to="/trademark"
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              <div className="mr-6 flex items-center py-3 font-semibold text-sm relative after:transition-all after:absolute after:inset-0 after:top-[unset] after:rounded-t-full text-gray-500 after:bg-tm-gray-400 after:h-0 after:hover:h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#60626c"
                  class="mr-2"
                  color="#60626c"
                >
                  <path
                    fill="inherit"
                    d="M16.632 3.304V5.37a5.369 5.369 0 0 1-5.37 5.37H9.199v4.13H7.546V9.085l.015-.826a5.37 5.37 0 0 1 5.354-4.956h3.717ZM3.415 0a5.786 5.786 0 0 1 5.488 3.953 6.176 6.176 0 0 0-2.17 4.307h-.84A5.782 5.782 0 0 1 .112 2.478V0h3.304Z"
                  ></path>
                </svg>
                <p class="text-base cursor-pointer whitespace-nowrap mb-2">
                  Logos
                </p>
              </div>
            </Link>
            <Link to="/brand">
              <div className="mr-6 flex items-center py-3 font-semibold text-sm relative after:transition-all after:absolute after:inset-0 after:top-[unset] after:rounded-t-full text-gray-500 after:bg-tm-gray-400 after:h-0 after:hover:h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  fill="none"
                  class="mr-2"
                  color="#60626c"
                >
                  <path
                    fill="#60626C"
                    d="M8 15A7.5 7.5 0 1 1 8 0a7.5 7.5 0 0 1 0 15Zm4.766-4.536v-.079c0-.691 0-1.007-.489-1.287a5.525 5.525 0 0 0-.483-.244c-.276-.125-.458-.206-.704-.566a8.56 8.56 0 0 1-.087-.13c-.259-.393-.446-.677-1.156-.564-1.4.222-1.503.468-1.564.883l-.01.069c-.09.607-.107.811.146 1.077.949.995 1.518 1.713 1.69 2.133.084.205.3.825.152 1.439a6.138 6.138 0 0 0 2.363-1.678c.082-.28.142-.63.142-1.053ZM8 1.374a6.109 6.109 0 0 0-4.422 1.888.947.947 0 0 1 .328.4c.153.343.153.696.153 1.009 0 .246 0 .48.079.649.107.23.574.33.986.415.147.032.299.063.437.101.38.105.673.447.908.72.098.114.242.281.315.323a.763.763 0 0 0 .218-.373c.046-.166.033-.311-.034-.39-.42-.495-.397-1.448-.267-1.8.204-.554.842-.513 1.308-.483.174.011.338.023.46.007.467-.058.611-.769.712-.907.22-.3.89-.753 1.305-1.032A6.103 6.103 0 0 0 8 1.375Z"
                  ></path>
                </svg>
                <p class="text-base cursor-pointer whitespace-nowrap">
                  Internet Brand Search
                </p>
              </div>
            </Link>
            <Link to="/registration">
              <div className="mr-6 flex items-center py-3 font-semibold text-sm relative after:transition-all after:absolute after:inset-0 after:top-[unset] after:rounded-t-full text-gray-500 after:bg-tm-gray-400 after:h-0 after:hover:h-1">
                <p class="text-xl font-bold h-0 -mt-7 mr-2">©</p>
                <p class="text-base cursor-pointer whitespace-nowrap">Copyrights</p>
              </div>
            </Link>
            <Modal isOpen={modal} onClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
