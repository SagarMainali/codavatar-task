import { ArrowLeftOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import Card from "../components/Card"
import CodeInput from "../components/CodeInput"

export default function EmailVerification() {

    const length = 6;
    // array to create six input fields for 6 digits
    const [code, setCode] = useState(Array(length).fill(null));

    const navigate = useNavigate()

    // preventing navigation without verification code
    const verifyEmail = () => {
        const invalid = code.find(element => element === null)
        if (invalid === undefined)
            navigate('/multi_step_process_form')
    }

    const [timeLeft, setTimeLeft] = useState(120);
    const [isActive, setIsActive] = useState(false);

    // running the timer immediately after the componenets loads
    useEffect(() => {
        startTimer();
    }, []);

    // the timer
    useEffect(() => {
        if (isActive && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
        if (timeLeft === 0) {
            setIsActive(false);
        }
    }, [isActive, timeLeft]);

    // mimicking resending the code
    const startTimer = () => {
        setTimeLeft(120);
        setIsActive(true);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="min-h-screen grid grid-cols-2">

            {/* card section */}
            <div className="p-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(to bottom left,  #4b4b4b 40%, #707070 100%)' }}
            >
                <div className="absolute rounded-full h-[830px] w-[830px] top-[158px] -left-[224px] overflow-hidden">
                    <img src="./blue.png" className="absolute rounded-full h-[826px] w-[826px] -rotate-[15deg]" />
                    <img src="./purple.png" className="absolute rounded-full h-[600px] w-[600px] -right-[10px] top-[110px]" />
                    <img src="./orange.png" className="absolute rounded-full h-[430px] w-[430px]  top-[200px] -right-[50px]" />
                </div>

                <span className="text-[#E0E0E0] text-[14px]"><ArrowLeftOutlined /> Back</span>
                <div className="flex flex-col gap-10 mt-2 max-w-[750px] mx-auto">
                    <h2 className="text-[26px] text-[#F9F9F9] text-center font-semibold -mb-[10px]">Layout Cards</h2>
                    <div className="flex justify-center">
                        <Card
                            imgSrc="./singapore.png"
                            country="Singapore"
                            category="Head Office"
                            company="XYZ Pvt.Ltd."
                            error="Road to nowhere, 06-404, 500 Internal Error"
                        />
                    </div>
                    <div className="flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-around gap-10 lg:gap-2">
                        <Card
                            imgSrc="./hongkong.png"
                            country="Hong Kong"
                            category="Branches"
                            company="XYZ Pte.Ltd."
                            error="The Infinite Loop Office, 404 Timeout Plaza"
                        />
                        <Card
                            imgSrc="./usa.png"
                            country="USA"
                            category="Branches"
                            company="XYZ Inc."
                            error="Nulltown, Buglandia, 500 0xDEADBEE"
                        />
                    </div>
                </div>
            </div>

            {/* email verification section */}
            <div className="h-full flex flex-col justify-between pt-16 pb-4 lg:pl-20 pl-6 pr-6">
                <div className="flex flex-col gap-16 items-start">
                    <img src="./logo.png" alt="logo" className="h-[40px] w-[200px]" />
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-primary-dark-col text-[28px] font-bold">Verify your Email</h2>
                        <p className="text-[#646464] text-[14px] -mt-[14px]">Please enter the 6 digit code we just sent to s*********a@xyz.com</p>

                        <div className="w-full mt-[20px]">
                            <CodeInput length={length} code={code} setCode={setCode} />
                        </div>
                        <button className="bg-primary-red-col rounded-[10px] text-[#FFFFFF] text-[16px] w-full -mb-[4px] duration-500 hover:bg-[#4b4b4b]"
                            onClick={verifyEmail}>
                            Verify
                        </button>
                        {
                            isActive
                                ? <p className="text-[#646464] text-[14px]">Wait {formatTime(timeLeft)} seconds before requesting a new code.</p>
                                : <p className="text-[#646464] text-[14px]">
                                    Didn't receive a code?
                                    <span className="text-primary-blue-col cursor-pointer" onClick={startTimer}> Resend Code</span>
                                </p>
                        }
                    </div>
                </div>
                <p className="text-[14px] text-[#646464] max-w-[250px] md:max-w-[460px] text-center">
                    By continuing, you&#39;re agreeing to Nobody&#39;s
                    <span className="text-primary-blue-col"> Terms of Service</span>,
                    <span className="text-primary-blue-col"> Privacy Policy</span> and
                    <span className="text-primary-blue-col"> Cookie Policy</span>.
                </p>
            </div>

        </div>
    )
}