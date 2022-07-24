import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      Modal.error({ content: "로그인이 필요합니다" });
      router.push("/login");
    }
  }, []);
  return <Component {...props} />;
};
