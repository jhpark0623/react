import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Pagination from "react-js-pagination";

function ChatGptPage() {
  return (
    <>
      <Header />
      <div>응애dmddodddmd</div>
      <div className="flex w-60 ">
        <Pagination
          activePage={1} // 현재 페이지
          itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={450} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={"‹"} // "이전"을 나타낼 텍스트
          nextPageText={"›"} // "다음"을 나타낼 텍스트
          className="flex"
        />
      </div>
    </>
  );
}

export default ChatGptPage;
