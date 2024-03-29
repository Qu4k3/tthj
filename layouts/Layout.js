import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LogOut } from "react-feather";
import BtnAction from "../components/elements/BtnAction";

export default function Layout({ children }) {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") === null) {
      setIsLogged(false)
      if (
        !router.pathname.includes("/login") &&
        !router.pathname.includes("/sign-up")
      ) {
        router.push("/login");
      }
    } else {
      setIsLogged(true)
    }
  });

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    router.push("/login");
  };

  return (
    <>
      <section className="flex justify-between flex-col min-h-screen min-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex-grow justify-center mt-16 sm:mt-20 container mx-auto max-w-3xl">
          {isLogged && (
            <BtnAction
              onClick={logout}
              title="Cerrar sesión"
              styles="text-sm border-0 mb-4 ml-auto"
              icon={<LogOut size={16} className="mr-2" />}
            />
          )}
          <div className="sm:bg-white sm:bg-opacity-5 rounded-xl sm:p-10">
            <img className="m-auto mb-8 w-40" src="/logo.svg" alt="" />
            {children}
          </div>
        </div>
        <footer className="text-gray-500 text-sm text-center py-8">
          <p>Technical Test Hiberus Javascript</p>
        </footer>
      </section>
    </>
  );
}
