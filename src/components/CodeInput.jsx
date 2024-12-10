import { MinusOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';

export default function CodeInput({ length, code, setCode }) {

    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1 && /^[0-9]$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (index < length - 1 && value !== '') {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (code[index] === '') {
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            } else {
                const newCode = [...code];
                newCode[index] = '';
                setCode(newCode);
            }
        }
    };

    return (
        <div className='flex justify-between'>
            {/* rendering separated input fileds for 6-digit verification code */}
            {code.map((_, index) => (
                <React.Fragment key={index}>
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        value={code[index] || ''}
                        maxLength="1"
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className='w-[44px] h-[44px] text-center rounded-[6px] text-[20px] p-[8px]'
                    />
                    {index === 2 && (
                        <MinusOutlined className='text-[20px]' />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};