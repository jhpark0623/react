import "./App.css";
import { ReactComponent as TkoLogo } from "./assets/images/tkoLogo.svg";
import "./assets/fonts/CookieRunRegular.ttf";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import NoticePage from "./components/NoticePage";
import CommunityPage from "./components/CommunityPage";
import ChatGptPage from "./components/ChatGptPage";
import Header from "./Layout/Header";

function App() {
  return (
    <>
      <Header />
      <div id="전체 레이이웃" className="my-5 max-h-full min-w-min bg-gray-100">
        <div id="body" className="m-4 bg-gray-100">
          body
        </div>

        <div id="맨 아래 정보"></div>
      </div>
    </>
  );
}

export default App;
