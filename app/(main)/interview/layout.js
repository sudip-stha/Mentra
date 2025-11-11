import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <Suspense
        fallback={<div className="fixed top-16 min-w-full">
            <BarLoader width="100%" color="green" style={{ marginLeft: 0 }}/>
          </div>}
      >
        {children}
      </Suspense>
    </div>
  );
}
