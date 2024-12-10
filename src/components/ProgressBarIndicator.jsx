import React, { useState } from "react";
import { Steps } from "antd";
import { CheckOutlined } from "@ant-design/icons"

const { Step } = Steps;

export default function ProgressBarIndicator() {
    const [currentStep, setCurrentStep] = useState(1); // starts off from page#2

    const steps = [
        { title: "Business Type" },
        { title: "Business Details" },
        { title: "Authorized Representative" },
        { title: "Business Owners" },
        { title: "Company Directors" },
        { title: "Support Information" },
        { title: "Add Details" },
        { title: "Complete Registration" },
    ];

    const handleOnChange = (index) => {
        setCurrentStep(index)
    }

    const getTitleStyle = (index) => {
        if (index === currentStep) return 'text-primary-dark-col text-[14px] font-semibold';
        else return 'text-primary-light-col text-[14px]';
    };

    return (
        <Steps current={currentStep} size="small" labelPlacement="vertical" onChange={(index) => handleOnChange(index)} className="w-[75%] font-inter mx-auto custom-steps">
            {steps.map((step, index) => (
                <Step
                    key={index}
                    title={<span className={getTitleStyle(index)}>{step.title}</span>}
                    icon={
                        index < currentStep ? (
                            <div className="bg-[#34C759] h-[16px] w-[16px] rounded-full flex justify-center items-center">
                                <CheckOutlined className="text-[#FFFFFF] text-[12px]" />
                            </div>
                        ) : index === currentStep ? (
                            <div style={{
                                width: 16,
                                height: 16,
                                borderRadius: "50%",
                                border: "4px solid #34C759",
                                backgroundColor: "white",
                            }} />
                        ) : (
                            <div style={{
                                width: 16,
                                height: 16,
                                borderRadius: "50%",
                                border: "4px solid #D7DADC",
                                backgroundColor: "white"
                            }} />
                        )
                    }
                />
            ))}
        </Steps>
    );
};