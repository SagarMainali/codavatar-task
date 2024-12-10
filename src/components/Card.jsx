export default function Card({ imgSrc, country, category, company, error }) {
    
    return (
        <div className="flex flex-col gap-[16px] rounded-[12px] py-[24px] px-[28px] max-w-[340px] border border-border-light/50 bg-slate-400/15 z-50 backdrop-blur-3xl">
            <div className="flex flex-col gap-[4px]">
                <img src={imgSrc} alt="flag" className="h-[40px] w-[53.33px]" />
                <h2 className="text-[18px] text-[#F9F9F9]">{country}</h2>
                <span className="text-[14px] text-[#E0E0E0]">{category}</span>
            </div>
            <div className="text-[14px] text-[#E0E0E0] flex flex-col gap-[2px]">
                <span>{company}</span>
                <p>{error}</p>
            </div>
        </div>
    )
}