import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5"></div>
      <Suspense
        fallback={
          <div className="fixed top-16 w-full ml-0">
            <BarLoader width="100%" color="green" style={{ marginLeft: 0 }}/>
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
