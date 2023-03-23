import { ReactComponent as TkoLogo } from "../assets/images/tkoLogo.svg";
import "../assets/fonts/CookieRunRegular.ttf";
import {
  useLocation,
  HashRouter,
  Link,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  let location = useLocation();

  return (
    <div
      id="상단바"
      className="flex justify-between items-center bg-white h-[65px] text-xl border-b-2 border-b-gray-300"
    >
      <div id="상단바 왼쪽" className="flex justify-around w-[20%] bg-white">
        {/* <div id='커뮤니티로고' className='bg-red-50'>티코커뮤니티Logo</div> */}
        <TkoLogo className="w-[168px]" />
      </div>

      <div id="상단바 가운데" className="w-[55%]">
        <nav>
          <ul className="flex justify-around">
            <li>
              <Link
                to="/NoticePage"
                className={`hover:font-cookie ${
                  location.pathname === "/NoticePage"
                    ? "font-cookie border-b-2 border-black"
                    : ""
                }`}
              >
                공지사항
              </Link>
            </li>
            <li>
              <Link
                to="/CommunityPage"
                className={`hover:font-cookie ${
                  location.pathname === "/CommunityPage"
                    ? "font-cookie border-b-2 border-black"
                    : ""
                }`}
              >
                커뮤니티
              </Link>
            </li>
            <li>
              <Link
                to="/ChatGptPage"
                className={`hover:font-cookie ${
                  location.pathname === "/ChatGptPage"
                    ? "font-cookie border-b-2 border-black"
                    : ""
                }`}
              >
                챗봇검색
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className='bg-white hover:font-cookie'>공지사항</div> */}
        {/* <div className='bg-white hover:font-cookie'>커뮤니티</div> */}
        {/* <div className='bg-white hover:font-cookie'>챗봇검색</div> */}
      </div>

      <div id="상단바 오른쪽" className="flex justify-end items-center w-[25%]">
        <div
          id="로그인"
          className="flex justify-end  border-r-2 border-r-black pr-2 hover:font-cookie"
        >
          로그인
        </div>
        <div id="회원가입" className="pl-2 hover:font-cookie w-[100px]">
          회원가입
        </div>
      </div>
    </div>
  );
};

export default Header;
