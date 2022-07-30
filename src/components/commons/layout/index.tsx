import LayoutHeader from "./header";
// import LayoutNavigation from "./navigation";
// import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { breakPoints } from "../../../commons/styles/media";

interface ILayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;
  box-sizing: border-box;

  @media ${breakPoints.mobile} {
    margin-bottom: 50px;
  }
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const HIDDEN_HEADER = [
    "/login/",
    "/signup/",
    "/socialLogin/",
    "/novel/" + router.query._id + "/" + router.query.volume_id + "/",
  ];
  const HIDDEN_NAVIGATION = [
    "/login/",
    "/signup/",
    "/socialLogin/",
    "/novel/" + router.query._id + "/" + router.query.volume_id + "/",
  ];
  const HIDDEN_FOOTER = [
    "/login/",
    "/signup/",
    "/socialLogin/",
    "/novel/" + router.query._id + "/" + router.query.volume_id + "/",
  ];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenNavigation && <LayoutNavigation />}
      <div>{props.children}</div>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
