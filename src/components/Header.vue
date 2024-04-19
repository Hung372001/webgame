<script>
export default {
  name: "Header",
  computed: {
    widthBrowser() {
      return window.innerWidth;
    },
  },
};
</script>

<template>
  <header
      class="top-0 fixed w-full isolate z-[20]"
      style="font-family: Eurostile, sans-serif"
  >
    <div class="css-59iqvk">
      <div id="background-menu" class="w-screen absolute h-20">
        <svg :width="widthBrowser" height="74">
          <polygon
              fill="rgb(23, 23, 23)"
              points="0,0 90,0 100,0 2452,0 2462,0 2552,0 2552,74 2552,74 2462,74 2452,64 100,64 90,74 0,74 0,74"
          ></polygon>
        </svg>
        <router-link
            class="fixed w-52 tablet:w-full top-1 mt-1 tablet:mt-3 z-10 translate-x-7 tablet:translate-x-0 h-12 tablet:h-9"
            to="/"
        ><img
            alt="Shrapnel logo"
            class="h-full m-auto"

            src="/Logo.svg"
            style="color: transparent"
            width="150"
        /></router-link>
        <div
            class="fixed mt-1 top-3.5 right-2 phone:right-4 z-[1000] hover:orange-filter cursor-pointer"
        >
          <img
              alt="login icon"
              class="hidden phone:block mr-2"
              data-nimg="1"
              decoding="async"
              height="35"
              loading="lazy"
              src="https://www.shrapnel.com/_next/static/media/shrapnel_account_icon.4828c457.svg"
              style="color: transparent"
              width="30"
          />
          <li class="h-full flex" style="list-style-type: none">
            <div class="inline-block m-auto">
              <span
                  class="cursor-pointer glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-extrabold mx-5 whitespace-nowrap block phone:hidden top-1.5 hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                  data-content="Sign In"
              >
                <span class=""> CONNECT WALLET</span>
              </span>
            </div>
          </li>
        </div>
      </div>
      <div class="w-full h-16 main-menu-desktop top-0 fixed">
        <ul class="h-full flex justify-center tablet:hidden">
          <li class="h-full flex" style="list-style-type: none">
            <div class="inline-block mt-5 glowingEffect">
              <router-link
                  class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg laptop:text-sm font-extrabold mt-1 mx-5 top-0 laptop:top-1 whitespace-nowrap hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"

                  to="/game"

              ><span class="">Game</span></router-link
              >
            </div>
          </li>
          <li class="h-full flex group" style="list-style-type: none">
            <div class="inline-block mt-5 glowingEffect">
              <span
                  class="cursor-pointer glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg laptop:text-sm font-extrabold mt-1 mx-5 top-0 laptop:top-1 whitespace-nowrap hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                  data-content="Blockchain"
              ><span class="">Blockchain</span><span>▾</span></span
              >
            </div>
            <div
                id="background-menu-Blockchain"
                class="z-[900] absolute mt-16 hidden group-hover:block"
            >
              <div class="absolute">
                <svg height="357" width="352">
                  <polygon fill="rgb(23, 23, 23)"
                           points="0,0 36,0 40,0 312,0 316,0 352,0 352,349 344,357 316,357 312,353 40,353 36,357 8,357 0,349">
                  </polygon>
                </svg>
              </div>
              <div>
                <ul class="p-4">
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <router-link
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"

                            to="/our-vision"
                            target=""
                        ><span class="">Our Vision</span></router-link
                        >
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <router-link
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"

                            to="/nft"
                            target=""
                        ><span class="">NFTs</span></router-link
                        >
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <router-link
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                            data-content="Shrap Token"
                            to="/shrap-token"
                            target=""
                        ><span class="">Shrap Token</span></router-link
                        >
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </li>
          <li class="h-full flex group" style="list-style-type: none">
            <div class="inline-block mt-5 glowingEffect">
              <span
                  class="cursor-pointer glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg laptop:text-sm font-extrabold mt-1 mx-5 top-0 laptop:top-1 whitespace-nowrap hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                  data-content="Community"
              ><span class="">Community</span><span>▾</span></span
              >
            </div>
            <div
                id="background-menu-Community"
                class="z-[900] absolute mt-16 hidden group-hover:block"
            >
              <div class="absolute">
                <svg width="174" height="164"><polygon fill="rgb(23, 23, 23)" points="0,0 36,0 40,0 134,0 138,0 174,0 174,156 166,164 138,164 134,160 40,160 36,164 8,164 0,156"></polygon></svg>
              </div>
              <div>
                <ul class="p-4">
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <a
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                            data-content="Comm Center"
                            href="/comm-center"
                            target=""
                        ><span class=""> X </span></a
                        >
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <a
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                            data-content="Comm Center"
                            href="/comm-center"
                            target=""
                        ><span class=""> Telegram </span></a
                        >
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <a
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                            data-content="Comm Center"
                            href="/comm-center"
                            target=""
                        ><span class=""> Discord Channel </span></a
                        >
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </li>
          <li class="h-full flex group" style="list-style-type: none">
            <div class="inline-block mt-5 glowingEffect">
              <span
                  class="cursor-pointer glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg laptop:text-sm font-extrabold mt-1 mx-5 top-0 laptop:top-1 whitespace-nowrap hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                  data-content="About Us"
              ><span class="">About Us</span><span>▾</span></span
              >
            </div>
            <div
                id="background-menu-About Us"
                class="z-[900] absolute mt-16 hidden group-hover:block"
            >
              <div class="absolute">
                <svg width="142" height="208"><polygon fill="rgb(23, 23, 23)" points="0,0 36,0 40,0 102,0 106,0 142,0 142,200 134,208 106,208 102,204 40,204 36,208 8,208 0,200"></polygon></svg>
              </div>
              <div>
                <ul class="p-4">
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <router-link
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                            to="/studio"
                            target=""
                        ><span class="">Studio</span></router-link
                        >
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                        class="m-auto max-h-[200px] py-1 mx-4"
                        style="list-style-type: none"
                    >
                      <div class="my-2">
                        <router-link
                            class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-semibold hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                            to="/team"
                            target=""
                        ><span class="">Rocket Team</span></router-link
                        >
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </li>
          <li class="h-full flex" style="list-style-type: none">
            <div class="inline-block mt-5 glowingEffect">
              <router-link
                  class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg laptop:text-sm font-extrabold mt-1 mx-5 top-0 laptop:top-1 whitespace-nowrap hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                  to="/careers"
                  target=""
              ><span class="">Careers</span></router-link
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="hidden tablet:block css-rzx6gn">
        <div>
          <div
              class="bm-overlay"
              style="
              position: fixed;
              z-index: 1000;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.3);
              opacity: 0;
              transform: translate3d(100%, 0px, 0px);
              transition: opacity 0.3s ease 0s, transform 0s ease 0.3s;
            "
          ></div>
          <div>
            <div class="bm-burger-button" style="z-index: 1000">
              <button
                  id="react-burger-menu-btn"
                  style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  z-index: 1;
                  width: 100%;
                  height: 100%;
                  margin: 0px;
                  padding: 0px;
                  border: none;
                  font-size: 0px;
                  background: transparent;
                  cursor: pointer;
                "
                  type="button"
              >
                Open Menu
              </button>
              <span
              ><span
                  class="bm-burger-bars"
                  style="
                    position: absolute;
                    height: 20%;
                    left: 0px;
                    right: 0px;
                    top: 0%;
                    opacity: 1;
                  "
              ></span
              ><span
                  class="bm-burger-bars"
                  style="
                    position: absolute;
                    height: 20%;
                    left: 0px;
                    right: 0px;
                    top: 40%;
                    opacity: 1;
                  "
              ></span
              ><span
                  class="bm-burger-bars"
                  style="
                    position: absolute;
                    height: 20%;
                    left: 0px;
                    right: 0px;
                    top: 80%;
                    opacity: 1;
                  "
              ></span
              ></span>
            </div>
          </div>
          <div
              id=""
              aria-hidden="true"
              class="bm-menu-wrap"
              hidden="true"
              style="
              position: fixed;
              right: inherit;
              z-index: 1100;
              width: 300px;
              height: 100%;
              transform: translate3d(-100%, 0px, 0px);
              transition: all 0.5s ease 0s;
            "
          >
            <div
                class="bm-menu"
                style="height: 100%; box-sizing: border-box; overflow: auto"
            >
              <nav class="bm-item-list" style="height: 100%">
                <div
                    class="bm-item bg-menuBlack w-full min-h-screen tablet:w-1/3 phone:w-full"
                    style="display: block"
                    tabindex="-1"
                >
                  <div
                      class="w-full bg-black cursor-pointer min-h-[64px] fixed z-20 flex items-center justify-center"
                  >
                    <a
                        class="text-center flex justify-center py-1 tablet:block"
                        href="/"
                    ><img
                        alt="Shrapnel logo"
                        data-nimg="1"
                        decoding="async"
                        height="50"
                        loading="lazy"
                        src="https://www.shrapnel.com/_next/static/media/shrapnel_logoH-white.6c00ffda.svg"
                        style="color: transparent"
                        width="150"
                    /></a>
                  </div>
                  <div class="flex tablet:h-3/5 pt-[64px]">
                    <div class="flex flex-col w-full mt-4">
                      <ul>
                        <li class="m-auto" style="list-style-type: none">
                          <div class="block m-auto w-full px-5 mt-3">
                            <a
                                class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg font-semibold mt-1 whitespace-nowrap w-full hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                data-content="Game"
                                href="/game"
                                target=""
                            ><span
                                class="inline-block text-white max-w-[80%] overflow-hidden"
                            >Game</span
                            ></a
                            >
                          </div>
                        </li>
                        <li class="m-auto" style="list-style-type: none">
                          <div class="block m-auto w-full px-5 mt-3">
                            <a
                                class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg font-semibold mt-1 whitespace-nowrap w-full hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                data-content="Marketplace"
                                href="/marketplace/featured"
                                target=""
                            ><span
                                class="inline-block max-w-[80%] overflow-hidden"
                            >Marketplace</span
                            ></a
                            >
                          </div>
                        </li>
                        <li class="m-auto group" style="list-style-type: none">
                          <div class="block m-auto w-full px-5 mt-3">
                            <span
                                class="min-w-[180px] cursor-pointer glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg font-semibold mt-1 whitespace-nowrap w-full hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                data-content="Blockchain"
                            ><span
                                class="inline-block max-w-[80%] overflow-hidden"
                            >Blockchain</span
                            ><span class="text-4xl absolute right-0 -top-2"
                            >▾</span
                            ></span
                            >
                          </div>
                          <ul
                              class="px-5 overflow-hidden transitionMaxHeight max-h-0"
                          >
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Our Vision"
                                      href="/our-vision"
                                      target=""
                                  ><span class="">Our Vision</span></a
                                  >
                                </div>
                              </li>
                            </div>

                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <router-link
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      to="/nft"
                                      target=""
                                  ><span class="">NFTs</span></router-link
                                  >
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Shrap Token"
                                      href="/shrap-token"
                                      target=""
                                  ><span class="">Shrap Token</span></a
                                  >
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Econ Paper"
                                      href="https://www.shrapnel.com/Shrapnel-Economy-Paper.pdf"
                                      target="_blank rel='noreferrer'"
                                  ><span class="">Econ Paper</span
                                  ><span class="p-1"
                                  ><img
                                      alt="external"
                                      data-nimg="1"
                                      decoding="async"
                                      height="16"
                                      loading="lazy"
                                      src="https://www.shrapnel.com/_next/static/media/icon_external_link_white.3abf2a99.svg"
                                      style="
                                          color: transparent;
                                          display: inline;
                                          vertical-align: text-top;
                                        "
                                      width="16"/></span
                                  ></a>
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="White Paper"
                                      href="https://go.radon.gg/wp"
                                      target="_blank rel='noreferrer'"
                                  ><span class="">White Paper</span
                                  ><span class="p-1"
                                  ><img
                                      alt="external"
                                      data-nimg="1"
                                      decoding="async"
                                      height="16"
                                      loading="lazy"
                                      src="https://www.shrapnel.com/_next/static/media/icon_external_link_white.3abf2a99.svg"
                                      style="
                                          color: transparent;
                                          display: inline;
                                          vertical-align: text-top;
                                        "
                                      width="16"/></span
                                  ></a>
                                </div>
                              </li>
                            </div>
                          </ul>
                        </li>
                        <li class="m-auto" style="list-style-type: none">
                          <div class="block m-auto w-full px-5 mt-3">
                            <span
                                class="min-w-[180px] cursor-pointer glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg font-semibold mt-1 whitespace-nowrap w-full hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                data-content="Community"
                            ><span
                                class="inline-block max-w-[80%] overflow-hidden"
                            >Community</span
                            ><span class="text-4xl absolute right-0 -top-2"
                            >▾</span
                            ></span
                            >
                          </div>
                          <ul
                              class="px-5 overflow-hidden transitionMaxHeight max-h-0"
                          >
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Comm Center"
                                      href="/comm-center"
                                      target=""
                                  ><span class="">Comm Center</span></a
                                  >
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Discord"
                                      href="https://discord.gg/shrapnel"
                                      target="_blank rel='noreferrer'"
                                  ><span class="">Discord</span
                                  ><span class="p-1"
                                  ><img
                                      alt="external"
                                      data-nimg="1"
                                      decoding="async"
                                      height="16"
                                      loading="lazy"
                                      src="https://www.shrapnel.com/_next/static/media/icon_external_link_white.3abf2a99.svg"
                                      style="
                                          color: transparent;
                                          display: inline;
                                          vertical-align: text-top;
                                        "
                                      width="16"/></span
                                  ></a>
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Twitter"
                                      href="https://twitter.com/playSHRAPNEL"
                                      target="_blank rel='noreferrer'"
                                  ><span class="">Twitter</span
                                  ><span class="p-1"
                                  ><img
                                      alt="external"
                                      data-nimg="1"
                                      decoding="async"
                                      height="16"
                                      loading="lazy"
                                      src="https://www.shrapnel.com/_next/static/media/icon_external_link_white.3abf2a99.svg"
                                      style="
                                          color: transparent;
                                          display: inline;
                                          vertical-align: text-top;
                                        "
                                      width="16"/></span
                                  ></a>
                                </div>
                              </li>
                            </div>
                          </ul>
                        </li>
                        <li class="m-auto" style="list-style-type: none">
                          <div class="block m-auto w-full px-5 mt-3">
                            <span
                                class="min-w-[180px] cursor-pointer glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg font-semibold mt-1 whitespace-nowrap w-full hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                data-content="About Us"
                            ><span
                                class="inline-block max-w-[80%] overflow-hidden"
                            >About Us</span
                            ><span class="text-4xl absolute right-0 -top-2"
                            >▾</span
                            ></span
                            >
                          </div>
                          <ul
                              class="px-5 overflow-hidden transitionMaxHeight max-h-0"
                          >
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="News"
                                      href="https://medium.com/@playshrapnel"
                                      target="_blank rel='noreferrer'"
                                  ><span class="">News</span
                                  ><span class="p-1"
                                  ><img
                                      alt="external"
                                      data-nimg="1"
                                      decoding="async"
                                      height="16"
                                      loading="lazy"
                                      src="https://www.shrapnel.com/_next/static/media/icon_external_link_white.3abf2a99.svg"
                                      style="
                                          color: transparent;
                                          display: inline;
                                          vertical-align: text-top;
                                        "
                                      width="16"/></span
                                  ></a>
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Studio"
                                      href="/studio"
                                      target=""
                                  ><span class="">Studio</span></a
                                  >
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="AAA Team"
                                      href="/team"
                                      target=""
                                  ><span class="">AAA Team</span></a
                                  >
                                </div>
                              </li>
                            </div>
                            <div>
                              <li
                                  class="m-auto max-h-[200px]"
                                  style="list-style-type: none"
                              >
                                <div class="my-2">
                                  <a
                                      class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-sm font-medium hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                      data-content="Partners"
                                      href="/partners"
                                      target=""
                                  ><span class="">Partners</span></a
                                  >
                                </div>
                              </li>
                            </div>
                          </ul>
                        </li>
                        <li class="m-auto" style="list-style-type: none">
                          <div class="block m-auto w-full px-5 mt-3">
                            <a
                                class="glitchEffetText relative no-underline uppercase block mt-0 tracking-normal text-lg font-semibold mt-1 whitespace-nowrap w-full hover:text-orange focus:text-dark-orange hover:orange-filter text-white-f2"
                                data-content="Careers"
                                href="/careers"
                                target=""
                            ><span
                                class="inline-block max-w-[80%] overflow-hidden"
                            >Careers</span
                            ></a
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p
                      class="font-normal text-sm text-smokey-white-neon mt-7 text-center"
                  >
                    Copyright © 2024 NEON MACHINE // SHRAPNEL
                  </p>
                </div>
              </nav>
            </div>
            <div>
              <div
                  class="bm-cross-button"
                  style="
                  position: absolute;
                  width: 24px;
                  height: 24px;
                  right: 8px;
                  top: 8px;
                "
              >
                <button
                    id="react-burger-cross-btn"
                    style="
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    margin: 0px;
                    padding: 0px;
                    border: none;
                    font-size: 0px;
                    background: transparent;
                    cursor: pointer;
                  "
                    tabindex="-1"
                    type="button"
                >
                  Close Menu
                </button>
                <span style="position: absolute; top: 6px; right: 14px"
                ><span
                    class="bm-cross"
                    style="
                      position: absolute;
                      width: 3px;
                      height: 14px;
                      transform: rotate(45deg);
                    "
                ></span
                ><span
                    class="bm-cross"
                    style="
                      position: absolute;
                      width: 3px;
                      height: 14px;
                      transform: rotate(-45deg);
                    "
                ></span
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
