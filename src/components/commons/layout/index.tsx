import LayoutHeader from "./header";
// import LayoutNavigation from "./navigation";
// import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";

interface ILayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_HEADER = ["/login", "/signup", "/novelRead"];
const HIDDEN_NAVIGATION = ["/login", "/signup", "/novelRead"];
const HIDDEN_FOOTER = ["/login", "/signup", "/novelRead"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenNavigation && <LayoutNavigation />}
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      <div>{props.children}</div>
      {/* </div> */}
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
