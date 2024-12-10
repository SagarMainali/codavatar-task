import Select from 'react-select'
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from 'react'

import options from "../constants/options"
import fields from "../constants/fields"
import styles from '../constants/styles'
import FileUploader from './FileUploader';

export default function FormPageSecond() {

    const [formData, setFormData] = useState({});

    const handleChange = (name, value) => {
        setFormData(current => {
            return {
                ...current,
                [name]: value
            }
        })
    }

    // for certificate uploads
    const [certificates, setCertificates] = useState([])

    const handleCertificateField = (file) => {
        console.log(file)
        setCertificates(prevCertificates => [
            ...prevCertificates,
            file[0].name
        ])
    };

    const { getRootProps: getRootPropsCertificate, getInputProps: getInputPropsCertificate, isDragActive: isDragActiveCertificate } = useDropzone({ onDrop: handleCertificateField });

    // for logo uploads
    const [logos, setLogos] = useState([])

    const handleLogoField = (file) => {
        console.log(file)
        setLogos(prevLogos => [
            ...prevLogos,
            file[0].name
        ])
    };

    const { getRootProps: getRootPropsLogo, getInputProps: getInputPropsLogo, isDragActive: isDragActiveLogo } = useDropzone({ onDrop: handleLogoField });

    // resetting fields upon data submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({})
        setCertificates([])
        setLogos([])
    }

    // adding uploaded files to formData object
    useEffect(() => {
        if (certificates)
            setFormData(current => (
                {
                    ...current,
                    certificates,
                    logos
                }
            ))
    }, [certificates, logos])

    // logging every field updates
    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div className="px-[48px] py-[56px] flex flex-col gap-8 bg-[#FFFFFF] max-w-[894px]">
            <div>
                <h2 className="font-semibold text-[20px]">Tell us more about your business</h2>
                <h3 className="text-[13px] text-secondary-light-col">Your info is like the Wi-Fi password—totally crucial for keeping things running, impressing the money folks, and making sure you get top-notch service without any buffering!</h3>
            </div>
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                <div className='grid sm:grid-cols-2 gap-[20px]'>
                    {/* rendering fileds dynamically based on pre-defined fields obj */}
                    {fields.map(field => {
                        const { htmlFor, label, type, id, name, placeholder } = field
                        return (
                            <div key={label} className="flex flex-col">
                                <label htmlFor={htmlFor} className="mb-1 text-[14px] text-[#404040]">{label} <span className="text-*-col text-[14px]">*</span></label>
                                {type === 'textarea'
                                    ? (
                                        <textarea
                                            name={name}
                                            id={id}
                                            maxLength={100}
                                            rows={3}
                                            placeholder={placeholder}
                                            className='placeholder:text-secondary-light-col'
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            value={formData?.[name] || ''}
                                            required
                                        />
                                    )
                                    : type === 'select'
                                        ? (<Select
                                            id={id}
                                            options={options}
                                            name={name}
                                            placeholder={placeholder}
                                            isSearchable={true}
                                            onChange={(selectedOption) => handleChange(name, selectedOption ? selectedOption.value : null)}
                                            value={options.find(option => option.value === formData?.[name]) || null}
                                            noOptionsMessage={() => "Option not found!"}
                                            isClearable
                                            styles={styles}
                                            required
                                        />
                                        )
                                        : (
                                            <input
                                                type={type}
                                                name={name}
                                                id={id}
                                                placeholder={placeholder}
                                                className='placeholder:text-secondary-light-col'
                                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                value={formData?.[name] || ''}
                                                required
                                            />
                                        )
                                }
                            </div>
                        )
                    })}
                </div>

                {/* certificate upload */}
                <FileUploader
                    title1="Certification of Incorporation"
                    title2="Upload the incorporation certificate"
                    getRootProps={getRootPropsCertificate}
                    getInputProps={getInputPropsCertificate}
                    isDragActive={isDragActiveCertificate}
                    fileNames={certificates}
                />

                {/* logo upload */}
                <FileUploader
                    title1="Company Logo"
                    title2="Upload the company logo"
                    getRootProps={getRootPropsLogo}
                    getInputProps={getInputPropsLogo}
                    isDragActive={isDragActiveLogo}
                    fileNames={logos}
                />

                {/* buttons */}
                <div className='col-span-full flex justify-between items-center'>
                    <button className='border border-primary-dark-col text-primary-dark-col font-semibold duration-500 hover:bg-primary-dark-col hover:text-primary-light-bg'>Previous</button>
                    <button className='bg-primary-red-col text-[#FFFFFF] duration-500 hover:bg-primary-dark-col' type='submit'>Next</button>
                </div>
            </form>
        </div>
    )
}