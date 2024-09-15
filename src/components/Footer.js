import React from "react";
import ClickableLogo from "./ClickableLogo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-gray-200  font-bold mt-16">
      <div className="w-[90%] mx-auto flex py-[50px] flex-col xl:flex-row gap-10 xl:gap-0 sm:flex-row">
        <div className=" flex">
          <div className="mt-2 w-full mr-10">
            <div className="mt-4">
              <ClickableLogo width={250} height={100} />
              <p class="w-full md:w-[40%] xl:w-[60%] mt-4 text-gray-500 text-[14px] font-[500]">
                World's #1 website to register your trademark and protect your
                brand, name, logo or slogan
              </p>
            </div>
            <p className="text-[15px]  text-gray-700 mt-12">Social Links</p>

            <div className="flex gap-3 mt-3 justify-center md:justify-start mb-12">
              <Link
                to="https://www.instagram.com/trademarkia"
                alt="instagram"
                target="_blank"
              >
                <div className="w-[40px] aspect-square border border-gray-300 rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.0946 12.0983C6.0946 8.84162 8.73852 6.20159 12 6.20159C15.2615 6.20159 17.9054 8.84162 17.9054 12.0983C17.9054 15.355 15.2615 17.995 12 17.995C8.73852 17.995 6.0946 15.355 6.0946 12.0983ZM12 15.926C9.8829 15.926 8.16667 14.2123 8.16667 12.0983C8.16667 9.98431 9.8829 8.27061 12 8.27061C14.1171 8.27061 15.8333 9.98431 15.8333 12.0983C15.8333 14.2123 14.1171 15.926 12 15.926Z"
                      fill="url(#paint0_linear_460_1129)"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.0946 12.0983C6.0946 8.84162 8.73852 6.20159 12 6.20159C15.2615 6.20159 17.9054 8.84162 17.9054 12.0983C17.9054 15.355 15.2615 17.995 12 17.995C8.73852 17.995 6.0946 15.355 6.0946 12.0983ZM12 15.926C9.8829 15.926 8.16667 14.2123 8.16667 12.0983C8.16667 9.98431 9.8829 8.27061 12 8.27061C14.1171 8.27061 15.8333 9.98431 15.8333 12.0983C15.8333 14.2123 14.1171 15.926 12 15.926Z"
                      fill="url(#paint1_radial_460_1129)"
                    ></path>
                    <path
                      d="M18.1387 7.34657C18.9009 7.34657 19.5187 6.72966 19.5187 5.96862C19.5187 5.20758 18.9009 4.59063 18.1387 4.59063C17.3766 4.59063 16.7587 5.20758 16.7587 5.96862C16.7587 6.72966 17.3766 7.34657 18.1387 7.34657Z"
                      fill="url(#paint2_linear_460_1129)"
                    ></path>
                    <path
                      d="M18.1387 7.34657C18.9009 7.34657 19.5187 6.72966 19.5187 5.96862C19.5187 5.20758 18.9009 4.59063 18.1387 4.59063C17.3766 4.59063 16.7587 5.20758 16.7587 5.96862C16.7587 6.72966 17.3766 7.34657 18.1387 7.34657Z"
                      fill="url(#paint3_radial_460_1129)"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0.615234C8.87679 0.615234 8.48516 0.628453 7.25856 0.684337C6.03452 0.740084 5.19855 0.934218 4.46706 1.2181C3.71084 1.51152 3.06951 1.90416 2.43014 2.54254C1.79083 3.18096 1.3976 3.82134 1.10376 4.57646C0.819454 5.30686 0.625033 6.14161 0.569204 7.36385C0.513238 8.58864 0.5 8.97969 0.5 12.0983C0.5 15.2169 0.513238 15.608 0.569204 16.8327C0.625033 18.055 0.819454 18.8897 1.10376 19.6201C1.3976 20.3753 1.79083 21.0156 2.43014 21.6541C3.06951 22.2924 3.71084 22.6851 4.46706 22.9785C5.19855 23.2624 6.03452 23.4565 7.25856 23.5123C8.48516 23.5681 8.87679 23.5814 12 23.5814C15.1232 23.5814 15.5148 23.5681 16.7414 23.5123C17.9655 23.4565 18.8015 23.2624 19.5329 22.9785C20.2892 22.6851 20.9305 22.2924 21.5699 21.6541C22.2092 21.0156 22.6024 20.3753 22.8963 19.6201C23.1805 18.8897 23.375 18.055 23.4308 16.8327C23.4868 15.608 23.5 15.2169 23.5 12.0983C23.5 8.97969 23.4868 8.58864 23.4308 7.36385C23.375 6.14161 23.1805 5.30686 22.8963 4.57646C22.6024 3.82134 22.2092 3.18096 21.5699 2.54254C20.9305 1.90416 20.2892 1.51152 19.5329 1.2181C18.8015 0.934218 17.9655 0.740084 16.7414 0.684337C15.5148 0.628453 15.1232 0.615234 12 0.615234ZM12 2.68425C15.0706 2.68425 15.4344 2.69597 16.647 2.75121C17.7682 2.80226 18.3771 2.98933 18.7824 3.14659C19.3192 3.3549 19.7023 3.60373 20.1047 4.00558C20.5071 4.40739 20.7563 4.78992 20.9649 5.32592C21.1224 5.73055 21.3097 6.33857 21.3609 7.45816C21.4162 8.669 21.4279 9.0322 21.4279 12.0983C21.4279 15.1644 21.4162 15.5276 21.3609 16.7384C21.3097 17.858 21.1224 18.466 20.9649 18.8707C20.7563 19.4067 20.5071 19.7892 20.1047 20.191C19.7023 20.5929 19.3192 20.8417 18.7824 21.05C18.3771 21.2073 17.7682 21.3943 16.647 21.4454C15.4345 21.5006 15.0709 21.5123 12 21.5123C8.92915 21.5123 8.56551 21.5006 7.35302 21.4454C6.23178 21.3943 5.62286 21.2073 5.21763 21.05C4.68084 20.8417 4.29775 20.5929 3.89535 20.191C3.49295 19.7892 3.24371 19.4067 3.03509 18.8707C2.8776 18.466 2.69026 17.858 2.63913 16.7384C2.5838 15.5276 2.57207 15.1644 2.57207 12.0983C2.57207 9.0322 2.5838 8.669 2.63913 7.45816C2.69026 6.33857 2.8776 5.73055 3.03509 5.32592C3.24371 4.78992 3.49291 4.40739 3.89535 4.00558C4.29775 3.60373 4.68084 3.3549 5.21763 3.14659C5.62286 2.98933 6.23178 2.80226 7.35302 2.75121C8.56564 2.69597 8.92938 2.68425 12 2.68425Z"
                      fill="url(#paint4_linear_460_1129)"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0.615234C8.87679 0.615234 8.48516 0.628453 7.25856 0.684337C6.03452 0.740084 5.19855 0.934218 4.46706 1.2181C3.71084 1.51152 3.06951 1.90416 2.43014 2.54254C1.79083 3.18096 1.3976 3.82134 1.10376 4.57646C0.819454 5.30686 0.625033 6.14161 0.569204 7.36385C0.513238 8.58864 0.5 8.97969 0.5 12.0983C0.5 15.2169 0.513238 15.608 0.569204 16.8327C0.625033 18.055 0.819454 18.8897 1.10376 19.6201C1.3976 20.3753 1.79083 21.0156 2.43014 21.6541C3.06951 22.2924 3.71084 22.6851 4.46706 22.9785C5.19855 23.2624 6.03452 23.4565 7.25856 23.5123C8.48516 23.5681 8.87679 23.5814 12 23.5814C15.1232 23.5814 15.5148 23.5681 16.7414 23.5123C17.9655 23.4565 18.8015 23.2624 19.5329 22.9785C20.2892 22.6851 20.9305 22.2924 21.5699 21.6541C22.2092 21.0156 22.6024 20.3753 22.8963 19.6201C23.1805 18.8897 23.375 18.055 23.4308 16.8327C23.4868 15.608 23.5 15.2169 23.5 12.0983C23.5 8.97969 23.4868 8.58864 23.4308 7.36385C23.375 6.14161 23.1805 5.30686 22.8963 4.57646C22.6024 3.82134 22.2092 3.18096 21.5699 2.54254C20.9305 1.90416 20.2892 1.51152 19.5329 1.2181C18.8015 0.934218 17.9655 0.740084 16.7414 0.684337C15.5148 0.628453 15.1232 0.615234 12 0.615234ZM12 2.68425C15.0706 2.68425 15.4344 2.69597 16.647 2.75121C17.7682 2.80226 18.3771 2.98933 18.7824 3.14659C19.3192 3.3549 19.7023 3.60373 20.1047 4.00558C20.5071 4.40739 20.7563 4.78992 20.9649 5.32592C21.1224 5.73055 21.3097 6.33857 21.3609 7.45816C21.4162 8.669 21.4279 9.0322 21.4279 12.0983C21.4279 15.1644 21.4162 15.5276 21.3609 16.7384C21.3097 17.858 21.1224 18.466 20.9649 18.8707C20.7563 19.4067 20.5071 19.7892 20.1047 20.191C19.7023 20.5929 19.3192 20.8417 18.7824 21.05C18.3771 21.2073 17.7682 21.3943 16.647 21.4454C15.4345 21.5006 15.0709 21.5123 12 21.5123C8.92915 21.5123 8.56551 21.5006 7.35302 21.4454C6.23178 21.3943 5.62286 21.2073 5.21763 21.05C4.68084 20.8417 4.29775 20.5929 3.89535 20.191C3.49295 19.7892 3.24371 19.4067 3.03509 18.8707C2.8776 18.466 2.69026 17.858 2.63913 16.7384C2.5838 15.5276 2.57207 15.1644 2.57207 12.0983C2.57207 9.0322 2.5838 8.669 2.63913 7.45816C2.69026 6.33857 2.8776 5.73055 3.03509 5.32592C3.24371 4.78992 3.49291 4.40739 3.89535 4.00558C4.29775 3.60373 4.68084 3.3549 5.21763 3.14659C5.62286 2.98933 6.23178 2.80226 7.35302 2.75121C8.56564 2.69597 8.92938 2.68425 12 2.68425Z"
                      fill="url(#paint5_radial_460_1129)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_460_1129"
                        x1="1.84198"
                        y1="1.82263"
                        x2="9.07367"
                        y2="29.837"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4E60D3"></stop>
                        <stop offset="0.142763" stop-color="#913BAF"></stop>
                        <stop offset="0.761458" stop-color="#D52D88"></stop>
                        <stop offset="1" stop-color="#F26D4F"></stop>
                      </linearGradient>
                      <radialGradient
                        id="paint1_radial_460_1129"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(7.4631 23.5814) rotate(32.1221) scale(21.4718 15.4427)"
                      >
                        <stop stop-color="#FED276"></stop>
                        <stop
                          offset="0.17024"
                          stop-color="#FDBD61"
                          stop-opacity="0.975006"
                        ></stop>
                        <stop offset="0.454081" stop-color="#F6804D"></stop>
                        <stop
                          offset="1"
                          stop-color="#E83D5C"
                          stop-opacity="0.01"
                        ></stop>
                      </radialGradient>
                      <linearGradient
                        id="paint2_linear_460_1129"
                        x1="1.84198"
                        y1="1.82263"
                        x2="9.07367"
                        y2="29.837"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4E60D3"></stop>
                        <stop offset="0.142763" stop-color="#913BAF"></stop>
                        <stop offset="0.761458" stop-color="#D52D88"></stop>
                        <stop offset="1" stop-color="#F26D4F"></stop>
                      </linearGradient>
                      <radialGradient
                        id="paint3_radial_460_1129"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(7.4631 23.5814) rotate(32.1221) scale(21.4718 15.4427)"
                      >
                        <stop stop-color="#FED276"></stop>
                        <stop
                          offset="0.17024"
                          stop-color="#FDBD61"
                          stop-opacity="0.975006"
                        ></stop>
                        <stop offset="0.454081" stop-color="#F6804D"></stop>
                        <stop
                          offset="1"
                          stop-color="#E83D5C"
                          stop-opacity="0.01"
                        ></stop>
                      </radialGradient>
                      <linearGradient
                        id="paint4_linear_460_1129"
                        x1="1.84198"
                        y1="1.82263"
                        x2="9.07367"
                        y2="29.837"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4E60D3"></stop>
                        <stop offset="0.142763" stop-color="#913BAF"></stop>
                        <stop offset="0.761458" stop-color="#D52D88"></stop>
                        <stop offset="1" stop-color="#F26D4F"></stop>
                      </linearGradient>
                      <radialGradient
                        id="paint5_radial_460_1129"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(7.4631 23.5814) rotate(32.1221) scale(21.4718 15.4427)"
                      >
                        <stop stop-color="#FED276"></stop>
                        <stop
                          offset="0.17024"
                          stop-color="#FDBD61"
                          stop-opacity="0.975006"
                        ></stop>
                        <stop offset="0.454081" stop-color="#F6804D"></stop>
                        <stop
                          offset="1"
                          stop-color="#E83D5C"
                          stop-opacity="0.01"
                        ></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link
                to="https://www.facebook.com/Trademarkia/"
                alt="Facebook"
                target="_blank"
              >
                <div className="w-[40px] aspect-square border border-gray-300 rounded-lg flex items-center justify-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.535 12.5993C24.535 5.9397 19.1283 0.541016 12.4589 0.541016C5.78946 0.541016 0.382812 5.9397 0.382812 12.5993C0.382812 18.618 4.79886 23.6065 10.572 24.5111V16.0849H7.50582V12.5993H10.572V9.94272C10.572 6.92061 12.3749 5.25129 15.1333 5.25129C16.4546 5.25129 17.8365 5.4868 17.8365 5.4868V8.45428H16.3138C14.8136 8.45428 14.3458 9.38378 14.3458 10.3374V12.5993H17.695L17.1596 16.0849H14.3458V24.5111C20.1189 23.6065 24.535 18.618 24.535 12.5993Z"
                      fill="#1877F2"
                    ></path>
                    <path
                      d="M17.1638 16.0849L17.6992 12.5992H14.35V10.3373C14.35 9.38371 14.8178 8.45421 16.318 8.45421H17.8407V5.48673C17.8407 5.48673 16.4587 5.25122 15.1375 5.25122C12.3791 5.25122 10.5762 6.92054 10.5762 9.94265V12.5992H7.51001V16.0849H10.5762V24.5111C11.191 24.6074 11.8212 24.6575 12.4631 24.6575C13.105 24.6575 13.7352 24.6074 14.35 24.5111V16.0849H17.1638Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                to="https://x.com/trademarkia"
                alt="twitter"
                target="_blank"
              >
                <div className="w-[40px] aspect-square border border-gray-300 rounded-lg flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.0137615 19H1.63842L7.99698 11.6289L13.053 19H18.6413L11.1062 8.06907L18.025 0H16.3724L10.3639 6.98016L5.54599 0H-0.000244141L7.28269 10.5819L0.0137615 19ZM2.24066 1.24247H4.74767L16.3864 17.8273H13.8513L2.24066 1.24247Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/company/trademarkia"
                alt="LinkedIn"
                target="_blank"
              >
                <div className="w-[40px] aspect-square border border-gray-300 rounded-lg flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3.08C0 1.37896 1.37896 0 3.08 0H18.92C20.621 0 22 1.37896 22 3.08V18.92C22 20.621 20.621 22 18.92 22H3.08C1.37896 22 0 20.621 0 18.92V3.08Z"
                      fill="#0077B5"
                    ></path>
                    <path
                      d="M7.92 5.94C7.92 7.03352 7.03352 7.92 5.94 7.92C4.84648 7.92 3.96 7.03352 3.96 5.94C3.96 4.84648 4.84648 3.96 5.94 3.96C7.03352 3.96 7.92 4.84648 7.92 5.94Z"
                      fill="white"
                    ></path>
                    <path
                      d="M4.4 9.24C4.4 8.99699 4.59699 8.8 4.84 8.8H7.04C7.28301 8.8 7.48 8.99699 7.48 9.24V17.6C7.48 17.843 7.28301 18.04 7.04 18.04H4.84C4.59699 18.04 4.4 17.843 4.4 17.6V9.24Z"
                      fill="white"
                    ></path>
                    <path
                      d="M9.24 8.8L11.22 8.80001C11.463 8.80001 11.66 8.997 11.66 9.24001V9.68001C12.54 8.58001 14.1533 8.50666 14.96 8.57999C17.4748 8.80859 17.8933 11.3667 17.82 12.76L17.82 17.6C17.82 17.843 17.623 18.04 17.38 18.04L15.4 18.04C15.157 18.04 14.96 17.843 14.96 17.6V12.76C14.8867 12.1733 14.476 11 13.42 11C12.364 11 11.7333 12.32 11.66 12.76V17.6C11.66 17.843 11.463 18.04 11.22 18.04L9.24 18.04C8.99699 18.04 8.8 17.843 8.8 17.6V9.24C8.8 8.997 8.997 8.8 9.24 8.8Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                to="https://www.tiktok.com/@trademarkia"
                alt="Tiktok"
                target="_blank"
              >
                <div className="w-[40px] aspect-square border border-gray-300 rounded-lg flex items-center justify-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3067 9.2676C17.9119 10.3731 19.8782 11.0236 22.002 11.0236V7.08596C21.6001 7.08604 21.1992 7.04566 20.806 6.96539V10.0649C18.6824 10.0649 16.7162 9.41441 15.1107 8.30895V16.3446C15.1107 20.3644 11.7286 23.6229 7.55679 23.6229C6.0002 23.6229 4.55341 23.1695 3.35156 22.3918C4.72328 23.7432 6.63623 24.5815 8.75258 24.5815C12.9246 24.5815 16.3069 21.323 16.3069 17.3031V9.2676H16.3067ZM17.7822 5.29499C16.9619 4.43149 16.4233 3.31559 16.3067 2.08191V1.57544H15.1733C15.4586 3.14345 16.4317 4.48306 17.7822 5.29499ZM5.99022 19.3071C5.5319 18.7281 5.28423 18.0198 5.28534 17.2915C5.28534 15.453 6.83229 13.9623 8.74081 13.9623C9.09649 13.9622 9.45004 14.0147 9.78901 14.1184V10.0927C9.39288 10.0404 8.99309 10.0182 8.59347 10.0263V13.1597C8.25425 13.0561 7.90053 13.0034 7.54476 13.0038C5.63624 13.0038 4.08938 14.4943 4.08938 16.3331C4.08938 17.6332 4.8626 18.7588 5.99022 19.3071Z"
                      fill="#EE1D52"
                    ></path>
                    <path
                      d="M15.1074 8.30887C16.713 9.41433 18.6791 10.0648 20.8027 10.0648V6.96531C19.6173 6.72203 18.5679 6.12517 17.7789 5.29499C16.4283 4.48298 15.4553 3.14337 15.17 1.57544H12.1928V17.3029C12.1861 19.1364 10.6418 20.621 8.73734 20.621C7.61509 20.621 6.61809 20.1056 5.98667 19.3071C4.85913 18.7588 4.08591 17.6331 4.08591 16.3331C4.08591 14.4945 5.63277 13.0038 7.5413 13.0038C7.90696 13.0038 8.2594 13.0587 8.59 13.1598V10.0264C4.4915 10.108 1.19531 13.3346 1.19531 17.303C1.19531 19.2839 2.01614 21.0798 3.34835 22.3919C4.5502 23.1695 5.99699 23.623 7.55358 23.623C11.7255 23.623 15.1075 20.3643 15.1075 16.3446V8.30887H15.1074Z"
                      fill="#010101"
                    ></path>
                    <path
                      d="M20.8033 6.96563V6.12754C19.7344 6.12911 18.6864 5.84067 17.7795 5.29522C18.5824 6.1421 19.6395 6.72604 20.8033 6.96563ZM15.1707 1.57576C15.1434 1.42591 15.1225 1.27507 15.108 1.12365V0.617188H10.9973V16.3448C10.9908 18.1781 9.44654 19.6627 7.54195 19.6627C6.98278 19.6627 6.45485 19.5348 5.98731 19.3075C6.61874 20.1059 7.61574 20.6212 8.73799 20.6212C10.6422 20.6212 12.1868 19.1368 12.1935 17.3033V1.57576H15.1707ZM8.59082 10.0267V9.13452C8.24734 9.08928 7.90104 9.06658 7.55432 9.06675C3.3821 9.06675 0 12.3253 0 16.3448C0 18.8648 1.32923 21.0857 3.34908 22.3921C2.01687 21.08 1.19605 19.2841 1.19605 17.3032C1.19605 13.335 4.49215 10.1083 8.59082 10.0267Z"
                      fill="#69C9D0"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                to="https://www.youtube.com/Trademarkia"
                alt="Youtube"
                target="_blank"
              >
                <div className="w-[40px] aspect-square border border-gray-300 rounded-lg flex items-center justify-center">
                  <svg
                    width="26"
                    height="19"
                    viewBox="0 0 26 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4 13.224V5.65456L17.16 9.43929L10.4 13.224Z"
                      fill="white"
                    ></path>
                    <path
                      d="M25.4515 3.36849C25.3035 2.8353 25.0138 2.34916 24.6113 1.95872C24.2088 1.56828 23.7077 1.28724 23.158 1.14373C21.1339 0.612305 13 0.612305 13 0.612305C13 0.612305 4.86615 0.612305 2.84197 1.14373C2.29233 1.28724 1.79118 1.56828 1.38869 1.95872C0.986192 2.34916 0.696474 2.8353 0.548526 3.36849C0.170568 5.37101 -0.0128456 7.40352 0.000698653 9.43929C-0.0128456 11.4751 0.170568 13.5076 0.548526 15.5101C0.696474 16.0433 0.986192 16.5294 1.38869 16.9199C1.79118 17.3103 2.29233 17.5913 2.84197 17.7348C4.86615 18.2663 13 18.2663 13 18.2663C13 18.2663 21.1339 18.2663 23.158 17.7348C23.7077 17.5913 24.2088 17.3103 24.6113 16.9199C25.0138 16.5294 25.3035 16.0433 25.4515 15.5101C25.8294 13.5076 26.0128 11.4751 25.9993 9.43929C26.0128 7.40352 25.8294 5.37101 25.4515 3.36849ZM10.4001 13.2223V5.65629L17.1505 9.43929L10.4001 13.2223Z"
                      fill="#FC0100"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>

            <div className="mt-[70px] mb-[20px]">
              <p className="font-700 text-[15px]  text-gray-700">
                Trusted Reviews
              </p>
              <div className="flex gap-4 mt-3 flex-wrap justify-center md:justify-start">
                <Link to="https://www.shopperapproved.com/reviews/trademarkia.com">
                  <div className="w-[100px] aspect-square border-2 border-gray-100 rounded-xl flex flex-col items-center justify-between py-2 overflow-hidden">
                    <img
                      alt="Shopper Approved certification badge"
                      loading="lazy"
                      width="80"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      className="mt-1"
                      style={{ color: "transparent" }}
                      src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Fshopperapproved.png&w=96&q=75"
                    />
                    <p class="px-[8px] py-[1px]  rounded-lg text-[18px]  border-2 border-gray-100 text-gray-700">
                      4.6<span class="text-[15px]">/5</span>
                    </p>
                  </div>
                </Link>
                <Link to="https://www.shopperapproved.com/reviews/trademarkia.com">
                  <div className="w-[100px] aspect-square border-2 border-gray-100 rounded-xl flex flex-col items-center justify-between py-2 overflow-hidden">
                    <img
                      alt="Google review badge"
                      loading="lazy"
                      width="80"
                      height="30"
                      decoding="async"
                      data-nimg="1"
                      className="w-full mt-1 scale-[1.1]"
                      style={{ color: "transparent" }}
                      src="https://www.trademarkia.com/_next/image?url=%2Fassets%2Fimages%2Fgoogle_review_2.png&w=96&q=75"
                    />
                    <p class="px-[8px] py-[1px]  rounded-lg text-[18px]  border-2 border-gray-100 text-gray-700">
                      4.8<span class="text-[15px]">/5</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-[50px] pb-3 flex gap-5 flex-wrap justify-center md:justify-start">
              <Link to="https://www.trademarkia.com/trademark/trademark-registration/step1">
                <div class="p-5 w-[200px] h-[60px] grid place-items-center bg-blue-500  rounded-xl text-white ">
                  <p class="cursor-pointer">Apply for trademark</p>
                </div>
              </Link>
              <Link to="https://www.trademarkia.com/attorneys">
                <div class="w-[200px] h-[60px] grid place-items-center border border-gray-300  rounded-xl text-gray-800">
                  <p class="cursor-pointer">Schedule Consult</p>
                </div>
              </Link>
            </div>
            <Link
              to="https://www.trademarkia.com/#pricing"
              className="underline text-gray-800 cursor-pointer text-[18px]"
            >
              See our plan and pricing
            </Link>
          </div>
          <div className="flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-full mb-10 md:mb-0">
                <p className="my-4 text-gray-800 text-[18px]">Services</p>
                <div className="w-full flex flex-col gap-4 font-[600]">
                  <Link
                    to="https://www.trademarkia.com/trademark/trademark-registration/step1"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    TradeMark Registration
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/comprehensive-trademark-search"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Comprehensive Trademark Search
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/services"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    TradeMark Services
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/category"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    TradeMark Classes
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/international-trademark-registration"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    International TradeMark Registration
                  </Link>
                  <Link
                    to="https://www.copyrightable.com/copyright/register"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    File a Copyright
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/trademark/trademark-renewal"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    TradeMark Renewal
                  </Link>
                  <Link
                    to="https://register.trademarkia.com/trademark_statement/"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Statement of Use
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/trademark/trademark-office-action"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Office Action Response
                  </Link>
                  <Link
                    to="https://register.trademarkia.com/popular-companies.aspx"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Browse Top 300 Companies
                  </Link>
                </div>
              </div>

              <div className="w-full mr-10 ml-10 md:w-1/3 h-full mb-10 md:mb-0">
                <p className="my-4 text-gray-800 text-[18px]">Search</p>
                <div className="w-full flex flex-col gap-4 font-[600]">
                  <Link
                    to="https://www.trademarkia.com/"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Free Trademark search
                  </Link>
                  <Link
                    to="https://www.copyrightable.com/"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Free Copyright Search
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/search/owners?query=*&reset_page=true&country=us"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Owner search
                  </Link>
                  <Link
                    to="https://register.trademarkia.com/opposition/ranking-attorneys.aspx"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Attorney Ranking Search
                  </Link>
                  <Link
                    to="https://www.domainmarkia.com/"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Domain Search
                  </Link>
                </div>
                <p className="my-4 text-gray-800 text-[18px]">Resources</p>
                <div className="w-full flex flex-col gap-4 font-[600]">
                  <Link
                    to="https://www.trademarkia.com/blogs"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/faqs"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Frequently Asked Questions
                  </Link>
                  <Link
                    to="https://influencer.trademarkia.com/"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Become an Influencer
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/bulk-data"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Bulk Data
                  </Link>
                </div>
              </div>

              <div className="w-full mr-10 ml-10 md:w-1/3 h-full mb-10 md:mb-0">
                <p className="my-4 text-gray-800 text-[18px]">Rankings</p>
                <div className="w-full flex flex-col gap-4 font-[600]">
                  <Link
                    to="https://www.trademarkia.com/opposition/ranking-company"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Company Ranking
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/opposition/ranking-law-firms"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Law Firm Ranking
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/opposition/ranking-attorneys"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Attorney Ranking
                  </Link>
                </div>
                <p className="mt-20 text-gray-800 text-[18px]">Company</p>
                <div className="w-full flex flex-col gap-4 font-[600]">
                  <Link
                    to="https://www.trademarkia.com/about-trademarkia/about-us"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    About us
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/about-trademarkia/about-us"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Press Coverage
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/about-trademarkia/about-us"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/about-trademarkia/about-us"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="https://www.trademarkia.com/about-trademarkia/about-us"
                    className="text-slate-500 text-[16px] w-max mx-auto md:mx-0"
                  >
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20 md:mt-4 flex flex-col items-center md:items-start">
              <p class="text-gray-800 mt-0 md:mt-4">Contact</p>
              <div className="flex flex-row md:items-center gap-x-12 md:text-left mt-8 md:mt-3">
                <Link
                  to="tel:+1-877-794-9511"
                  className="flex items-center gap-[10px] cursor-pointer flex-col md:flex-row"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                    class="bg-blue-50 fill-green-500 w-[45px] h-[45px] p-[.6rem] aspect-square rounded-xl"
                  >
                    <path
                      fill="inherit"
                      d="M20.5 14.911v3.929a1.112 1.112 0 0 1-1.034 1.109c-.486.033-.882.051-1.189.051C8.458 20 .5 12.041.5 2.222c0-.306.017-.703.052-1.189A1.111 1.111 0 0 1 1.659 0h3.93a.556.556 0 0 1 .553.5c.025.256.048.459.07.613.222 1.541.674 3.04 1.343 4.446a.506.506 0 0 1-.163.63L4.994 7.902a14.497 14.497 0 0 0 7.604 7.605l1.711-2.394a.513.513 0 0 1 .637-.165 15.446 15.446 0 0 0 4.444 1.339c.155.022.358.046.612.07a.556.556 0 0 1 .498.554Z"
                    ></path>
                  </svg>
                  <div class="flex flex-col items-center md:items-start">
                    <p class="text-gray-800 text-[15px] ">Call</p>
                    <p class="text-gray-400 text-[14px] ">+1 (877) 794-9511</p>
                  </div>
                </Link>
                <Link
                  to="mailto:customer.service@trademarkia.com"
                  className="flex items-center gap-[10px] cursor-pointer flex-col md:flex-row group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="19"
                    fill="none"
                    viewBox="0 0 22 19"
                    class="bg-blue-50  fill-blue-500 w-[45px] h-[45px] p-[.6rem] aspect-square rounded-xl"
                  >
                    <path
                      fill="inherit"
                      d="M1.5 0h19a1.055 1.055 0 0 1 1.056 1.056v16.888A1.055 1.055 0 0 1 20.5 19h-19a1.055 1.055 0 0 1-1.056-1.056V1.056A1.056 1.056 0 0 1 1.5 0Zm9.563 9.165L4.295 3.418 2.928 5.027l8.15 6.919 8.001-6.925-1.38-1.597-6.636 5.741Z"
                    ></path>
                  </svg>
                  <div class="flex flex-col items-center md:items-start">
                    <p class="text-gray-800 text-[14px] ">Email</p>
                    <p class="text-blue-600 text-[13px] flex items-center gap-[5px] group-hover:underline ">
                      Leave a Message
                      <span class="pt-[3px] inline-block">
                        <svg
                          width="15"
                          height="10"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.129 5.24952L8.106 1.22652L9.1665 0.166016L15 5.99952L9.1665 11.833L8.106 10.7725L12.129 6.74952H0V5.24952H12.129Z"
                            fill="#356ED3"
                          ></path>
                        </svg>
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[40px]  border-t border-gray-300 bg-[#FCFCFC]">
        <div className="w-[95%] mx-auto">
          <p className="text-[14px] text-gray-700 text-lg">
            © 2024 reserved by Trademarkia
          </p>
          <p className="text-[12px] text-gray-500 mt-2 text-lg font-semibold">
            Disclaimer: The information contained in this website is provided
            for informational purposes only, and should not be construed as
            legal advice. Although LegalForce RAPC Worldwide P.C., dba
            Trademarkia P.C., is a law firm (the “Firm”), your use of this
            website does not establish an attorney-client relationship with the
            Firm. Such a relationship can only be established after the Firm
            decides that it is willing and able to accept the engagement after a
            conflict check and after a written retainer agreement is agreed upon
            between you and the Firm. Your use of this website is also subject
            to our Terms of Use and Privacy Policy.
          </p>
          <p className="text-[12px] text-gray-500 mt-2 text-lg font-semibold">
            * Your application is rejected only if the USPTO issues a final
            refusal. Limit one waived $99 fee for a different mark per order.
            The waiver is for Trademarkia's fees only and does not include
            government fees.
          </p>
          <p className="text-[12px] text-gray-500 mt-2 text-lg font-semibold">
            ** Bundled price for trademark watch service for 2 billing cycles
            ($99 per quarter).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;