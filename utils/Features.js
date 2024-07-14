const features = [
    {
        title: "Boost Productivity",
        description: "Build an atmosphere that creates productivity in your organization and your company culture.",
        imgSrc: "https://cdn.devdojo.com/images/december2020/productivity.png",
        imgPosition: "left",
        items: [
            "Maximize productivity and growth",
            "Speed past your competition",
            "Learn the top techniques"
        ]
    },
    {
        title: "Automated Tasks",
        description: "Save time and money with our revolutionary services. We are the leaders in the industry.",
        imgSrc: "https://cdn.devdojo.com/images/december2020/settings.png",
        imgPosition: "right",
        items: [
            "Automated task management workflow",
            "Detailed analytics for your data",
            "Some awesome integrations"
        ]
    }
];

export default function Features() {
    return (
        <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
            {features.map((feature, index) => (
                <div key={index} className={`box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src={feature.imgSrc} className={`p-2 ${index % 2 === 0 ? 'pl-6 pr-5 xl:pl-16 xl:pr-20' : 'pl-4 sm:pr-10 xl:pl-10 lg:pr-32'}`} />
                    </div>

                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-10">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            {feature.title}
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            {feature.description}
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            {feature.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                        <span className="text-sm font-bold">✓</span>
                                    </span> 
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}
