import React, { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={` flex ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
      {/* Mobile Menu */}
      <nav className="nav__mobile flex-column flex-align-center">
        <div
          className="nav__hamburger flex flex-align-center flex-column flex-justify-center mb-6"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <svg
          width="45"
          height="145"
          viewBox="0 0 45 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <image href={logo} width="130" height="50" x="5" y="5" /> */}
        </svg>
      </nav>

      {/* Main Menu */}
      <nav className="nav flex flex-column">
        <ul className="nav__menus flex flex-column mb-14">
          <svg
            width="136"
            height="46"
            viewBox="0 0 136 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="nav__logo mb-11"
          >
            <image href={logo} width="130" height="50" x="5" y="5" />
          </svg>
          <li class="mt-8 mb-3">
            <a class="nav__menu active flex flex-align-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
                  fill="black"
                />
              </svg>
              <Link to="/"> Dashboard </Link>
            </a>
          </li>
          {/* <li class="mb-3">
            <a class="nav__menu flex flex-align-center ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3 12.8294C18.5124 12.8294 19.6102 12.8983 20.2855 13.0265C20.296 13.0265 20.9139 13.1536 21.1199 13.2356C21.4172 13.3639 21.6688 13.5955 21.8291 13.8853C21.9438 14.1169 22 14.3616 22 14.617C21.9895 14.883 21.8174 15.3831 21.7367 15.5802C21.2346 16.8797 19.5868 19.3633 18.5815 20.3158C18.4211 20.4774 18.2269 20.652 18.1812 20.6983C17.9284 20.8955 17.6206 21 17.2894 21C16.991 21 16.6937 20.9074 16.4538 20.7209C16.3292 20.6318 16.1473 20.4545 16.0641 20.3715L16.0196 20.3265C14.978 19.3526 13.4121 16.926 12.9089 15.6955C12.8982 15.6955 12.6475 15.0816 12.5968 14.7113L12.5882 14.617V14.5706C12.5882 14.0361 12.8855 13.5373 13.3665 13.2819C13.6298 13.1429 14.3952 13.0147 14.4069 13.0028C15.0927 12.8983 16.1449 12.8294 17.3 12.8294ZM6.70553 12.8905C7.18478 12.8905 7.57926 13.2561 7.63317 13.7277L7.63945 13.8383L7.89575 18.4171C7.89575 19.0846 7.36325 19.625 6.70553 19.625C6.08892 19.625 5.58133 19.15 5.52029 18.5406L5.51414 18.4171L5.77161 13.8383C5.77161 13.3146 6.18942 12.8905 6.70553 12.8905ZM6.71173 3C7.00783 3 7.30509 3.09264 7.54618 3.27793C7.65004 3.35291 7.79368 3.48866 7.88681 3.57993L7.98037 3.67345C9.02079 4.64858 10.5879 7.07394 11.0911 8.30444C11.1007 8.30444 11.3523 8.91922 11.4032 9.28974L11.4118 9.38409V9.43041C11.4118 9.96371 11.1133 10.4626 10.6335 10.7179C10.3702 10.8581 9.60478 10.9852 9.59308 10.997C8.90727 11.1016 7.85514 11.1704 6.70003 11.1704C5.48757 11.1704 4.38981 11.1016 3.71453 10.9733C3.70282 10.9733 3.08606 10.8462 2.88009 10.7642C2.58282 10.6372 2.3312 10.4044 2.17087 10.1145C2.05618 9.88294 2 9.63827 2 9.38409C2.01053 9.11685 2.18257 8.618 2.26215 8.42083C2.76539 7.12026 4.41204 4.6367 5.41852 3.68532C5.57886 3.5226 5.77313 3.34801 5.81877 3.30169C6.07039 3.10452 6.37936 3 6.71173 3ZM17.2947 4.375C17.9113 4.375 18.4179 4.84999 18.4788 5.45938L18.4849 5.58295L18.2286 10.1618C18.2286 10.6856 17.8108 11.1096 17.2947 11.1096C16.8155 11.1096 16.421 10.744 16.3671 10.2724L16.3608 10.1618L16.1033 5.58295C16.1033 4.91543 16.637 4.375 17.2947 4.375Z"
                  fill="black"
                />
              </svg>
              Exchange
            </a>
          </li>
          <li class="mb-3">
            <a class="nav__menu flex flex-align-center">
              <svg
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3541 0C23.9526 0 26.6667 2.64612 26.6667 7.17573H21.0252V7.22196C18.4069 7.22196 16.2844 9.29132 16.2844 11.844C16.2844 14.3967 18.4069 16.4661 21.0252 16.4661H26.6667V16.882C26.6667 21.3539 23.9526 24 19.3541 24H7.31259C2.71407 24 0 21.3539 0 16.882V7.11796C0 2.64612 2.71407 0 7.31259 0H19.3541ZM25.6711 9.16322C26.2209 9.16322 26.6667 9.59778 26.6667 10.1338V13.5079C26.6603 14.0414 26.2183 14.4723 25.6711 14.4786H21.1319C19.8064 14.496 18.6473 13.6112 18.3467 12.3524C18.1961 11.5711 18.4075 10.7648 18.9241 10.1496C19.4407 9.53449 20.2098 9.17343 21.0252 9.16322H25.6711ZM21.6652 10.7232H21.2267C20.9574 10.7201 20.6981 10.8222 20.5066 11.0067C20.3151 11.1912 20.2074 11.4428 20.2074 11.7053C20.2074 12.2561 20.6618 12.7043 21.2267 12.7106H21.6652C22.2281 12.7106 22.6844 12.2657 22.6844 11.7169C22.6844 11.1681 22.2281 10.7232 21.6652 10.7232ZM13.843 5.18825H6.31704C5.75871 5.18822 5.30427 5.62613 5.29778 6.17044C5.29778 6.72117 5.7522 7.1694 6.31704 7.17573H13.843C14.4059 7.17573 14.8622 6.73082 14.8622 6.18199C14.8622 5.63317 14.4059 5.18825 13.843 5.18825Z"
                  fill="black"
                />
              </svg>
              Wallet
            </a>
          </li>
          <li class="mb-3">
            <a class="nav__menu flex flex-align-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4498 3.7803C15.4098 4.0303 15.3898 4.2803 15.3898 4.5303C15.3898 6.7803 17.2098 8.5993 19.4498 8.5993C19.6998 8.5993 19.9398 8.5703 20.1898 8.5303V16.5993C20.1898 19.9903 18.1898 22.0003 14.7898 22.0003H7.40076C3.99976 22.0003 1.99976 19.9903 1.99976 16.5993V9.2003C1.99976 5.8003 3.99976 3.7803 7.40076 3.7803H15.4498ZM15.6508 9.8603C15.3798 9.8303 15.1108 9.9503 14.9498 10.1703L12.5308 13.3003L9.75976 11.1203C9.58976 10.9903 9.38976 10.9393 9.18975 10.9603C8.99076 10.9903 8.81076 11.0993 8.68975 11.2593L5.73076 15.1103L5.66976 15.2003C5.49976 15.5193 5.57976 15.9293 5.87976 16.1503C6.01976 16.2403 6.16976 16.3003 6.33976 16.3003C6.57076 16.3103 6.78976 16.1893 6.92976 16.0003L9.43975 12.7693L12.2898 14.9103L12.3798 14.9693C12.6998 15.1393 13.0998 15.0603 13.3298 14.7593L16.2198 11.0303L16.1798 11.0503C16.3398 10.8303 16.3698 10.5503 16.2598 10.3003C16.1508 10.0503 15.9098 9.8803 15.6508 9.8603ZM19.5899 2C20.9199 2 21.9999 3.08 21.9999 4.41C21.9999 5.74 20.9199 6.82 19.5899 6.82C18.2599 6.82 17.1799 5.74 17.1799 4.41C17.1799 3.08 18.2599 2 19.5899 2Z"
                  fill="black"
                />
              </svg>
              Statistics
            </a>
          </li> */}
          <li class="mb-3">
            <a class="nav__menu flex flex-align-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739ZM12 2C14.9391 2 17.294 4.35402 17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2Z"
                  fill="black"
                />
              </svg>
              About Us
            </a>
          </li>
          {/* <li class="mb-3">
            <a class="nav__menu flex flex-align-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7171 2.00012C13.4734 2.00012 14.1581 2.42012 14.5362 3.04012C14.7201 3.34012 14.8428 3.71012 14.8121 4.10012C14.7917 4.40012 14.8837 4.70012 15.0472 4.98012C15.5684 5.83012 16.7232 6.15012 17.6225 5.67012C18.6342 5.09012 19.9117 5.44012 20.4942 6.43012L21.1789 7.61012C21.7716 8.60012 21.4446 9.87012 20.4227 10.4401C19.554 10.9501 19.2474 12.0801 19.7686 12.9401C19.9321 13.2101 20.1161 13.4401 20.4022 13.5801C20.7599 13.7701 21.0358 14.0701 21.23 14.3701C21.6081 14.9901 21.5775 15.7501 21.2096 16.4201L20.4942 17.6201C20.1161 18.2601 19.4109 18.6601 18.6853 18.6601C18.3277 18.6601 17.9291 18.5601 17.6021 18.3601C17.3364 18.1901 17.0298 18.1301 16.7027 18.1301C15.691 18.1301 14.8428 18.9601 14.8121 19.9501C14.8121 21.1001 13.8719 22.0001 12.6967 22.0001H11.3068C10.1213 22.0001 9.18113 21.1001 9.18113 19.9501C9.16069 18.9601 8.31247 18.1301 7.30073 18.1301C6.96348 18.1301 6.6569 18.1901 6.40141 18.3601C6.07438 18.5601 5.6656 18.6601 5.31813 18.6601C4.58232 18.6601 3.87717 18.2601 3.49905 17.6201L2.7939 16.4201C2.41577 15.7701 2.39533 14.9901 2.77346 14.3701C2.93697 14.0701 3.24356 13.7701 3.59102 13.5801C3.87717 13.4401 4.06112 13.2101 4.23486 12.9401C4.74584 12.0801 4.43925 10.9501 3.57059 10.4401C2.55885 9.87012 2.23182 8.60012 2.81434 7.61012L3.49905 6.43012C4.09178 5.44012 5.35901 5.09012 6.38097 5.67012C7.27007 6.15012 8.42488 5.83012 8.94608 4.98012C9.10959 4.70012 9.20157 4.40012 9.18113 4.10012C9.16069 3.71012 9.27311 3.34012 9.46728 3.04012C9.8454 2.42012 10.5301 2.02012 11.2761 2.00012H12.7171ZM12.012 9.18012C10.4075 9.18012 9.10959 10.4401 9.10959 12.0101C9.10959 13.5801 10.4075 14.8301 12.012 14.8301C13.6164 14.8301 14.8837 13.5801 14.8837 12.0101C14.8837 10.4401 13.6164 9.18012 12.012 9.18012Z"
                  fill="black"
                />
              </svg>
              Settings
            </a>
          </li> */}
        </ul>
        <ul class="nav__logouts flex flex-column flex-justify-between"></ul>
      </nav>
    </div>
  );
};

export default Navbar;
