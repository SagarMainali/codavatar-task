import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmailVerification from './pages/EmailVerification'
import MultiStepProcessForm from './pages/MultiStepProcessForm'

export default function App() {

    return (
        <div className="font-inter max-w-[1920px] mx-auto">
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<EmailVerification />} />
                    <Route path="multi_step_process_form" element={<MultiStepProcessForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}