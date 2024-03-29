// import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./navigation.styles";
export default function LayoutNavigation() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");

  const Menu = [
    { name: "연재작품", page: "/novel/list/publish" },
    { name: "완결작품", page: "/novel/list/end" },
    { name: "베스트셀러", page: "/novel/list/best" },
    { name: "이벤트", page: "/event" },
    { name: "자유게시판", page: "/freeBoard" },
  ];

  const onClickMenu = (el: any) => (event: any) => {
    setActiveMenu(event.target.id);
    router.push(event.target.id);
  };

  useEffect(() => {
    if (!router.asPath.includes(activeMenu) || activeMenu === "") {
      setActiveMenu(router.asPath);
    }
  }, [router.asPath]);

  return (
    <>
      <S.Wrapper>
        {Menu.map((el: any) => (
          <S.ListTitle
            key={el}
            el={el}
            id={el.page}
            onClick={onClickMenu(el)}
            activeMenu={activeMenu}
          >
            {el.name}
          </S.ListTitle>
        ))}
      </S.Wrapper>
    </>
  );
}
