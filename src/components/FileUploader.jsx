export default function FileUploader({ title1, title2, getRootProps, getInputProps, isDragActive, fileNames }) {
    
    return (
        <div className='col-span-full'>
            <div className='mb-2'>
                <h2 className='text-[16px] font-semibold mb-1'>{title1} <span className='text-*-col text-[16px]'>*</span></h2>
                <h4 className='text-[13px] text-primary-light-col'>{title2}</h4>
            </div>
            <div {...getRootProps()}
                className={`border border-dashed py-[36px] px-[32px] rounded-[11px] 
                        flex flex-col items-center gap-1 text-[14px] text-primary-light-col cursor-pointer ${isDragActive ? 'border-primary-blue-col' : 'border-border-light'}`}
            >
                <span className='rounded-full p-2 bg-[#F6F6F6]'>
                    <img src="./fileIcon.svg" alt="fileIcon" className='h-[28px] w-[28px]' />
                </span>
                {
                    isDragActive
                        ? <p className='font-semibold'>Drop file here!</p>
                        : <span><span className='font-semibold underline underline-offset-4'>Click to upload</span> or drag and drop</span>
                }
                <span>Maximum file size 50MB</span>
                {fileNames.length > 0 && (<span>{fileNames.length} file{fileNames.length > 1 && <span>s</span>} uploaded</span>)}
                <input {...getInputProps()} required/>
            </div>
            <div className='flex gap-2'>
                {fileNames.map((fileName, index) => <p key={index} className='text-primary-blue-col'>{fileName}</p>)}
            </div>
        </div>
    )
}