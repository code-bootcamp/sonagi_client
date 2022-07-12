import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요합니다");
      router.push("/login");
    }
  }, []);
  return <Component {...props} />;
};
