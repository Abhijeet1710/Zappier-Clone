"use client";
import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";
import { PrimaryButton } from "./buttons/PrimaryButton";

export const Appbar = () => {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem("userName") !== null;

  return (
    <div className="flex border-b justify-between p-4">
      <div className="flex flex-col justify-center text-2xl font-extrabold cursor-pointer" onClick={() => router.push("/dashboard")}>
        Zapier
      </div>
      <div>
        {!isLoggedIn && (
          <div className="flex">
            <div className="pr-4">
              <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
            </div>
            <div className="pr-4">
              <LinkButton
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </LinkButton>
            </div>
            <PrimaryButton
              onClick={() => {
                router.push("/signup");
              }}
            >
              Signup
            </PrimaryButton>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex">
            <span className="mr-2">{localStorage.getItem("userName")}</span>
            <PrimaryButton
              onClick={() => {
                localStorage.clear();
                router.push("/login");
              }}
            >
              Sign out
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};
