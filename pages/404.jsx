import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  /*   useEffect(() => {
    setTimeout(() => {
      router.back();
      //router.push("/");
    }, 3000);
  }, []); */

  return (
    <div className="not-found">
      <h1>Oopps...</h1>
      <h2>cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link
          onClick={() => {
            router.back();
          }}
          href="/"
        >
          Home page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
