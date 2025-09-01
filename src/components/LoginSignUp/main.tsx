import React, { useState } from "react";
import LoginCard from "./loginCard";
import SignUpCard from "./signUpCard";
import SideSection from "./SideSection";

const MainAuth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center">
        {!isSignUp ? (
          <>
            {/* LoginCard left - 50% */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
              <LoginCard setIsSignUp={setIsSignUp} />
            </div>

            {/* SideSection right - 50% */}
            <div className="hidden lg:flex w-1/2 h-full items-center justify-center">
              <SideSection variant="login" />
            </div>
          </>
        ) : (
          <>
            {/* SideSection left - 50% */}
            <div className="hidden lg:flex w-1/2 h-full items-center justify-center">
              <SideSection variant="signup" />
            </div>

            {/* SignUpCard right - 50% */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
              <SignUpCard setIsSignUp={setIsSignUp} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainAuth;
