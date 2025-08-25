

import React, { useState } from "react";
import LoginCard from "./loginCard";
import SignUpCard from "./signUpCard";
import SideSection from "./SideSection";

const MainAuth: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
            <div className="w-full min-h-screen flex flex-row items-center justify-center">
                {/* Login: Card left, SideSection right. Signup: Card right, SideSection left. */}
                {!isSignUp ? (
                    <>
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <LoginCard setIsSignUp={setIsSignUp} />
                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <SideSection variant="login" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <SideSection variant="signup" />
                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <SignUpCard setIsSignUp={setIsSignUp} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MainAuth;
