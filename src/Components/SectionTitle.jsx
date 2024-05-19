
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center py-10">
            <p className="text-base text-amber-500 pb-2">{subHeading}</p>
            <h2 className="text-3xl text-black font-bold border-y-2 inline-block p-2 border-y-slate-200">{heading}</h2>
        </div>
    );
};

export default SectionTitle;