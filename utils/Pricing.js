import React from 'react';

const plans = [
    {
        name: "Essential",
        priceMonthly: 35,
        priceAnnual: 29,
        description: "There are many variations available, but the majority have suffered.",
        features: [
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Officia deserunt mollit anim"
        ]
    },
    {
        name: "Perform",
        priceMonthly: 55,
        priceAnnual: 49,
        description: "There are many variations available, but the majority have suffered.",
        popular: true,
        features: [
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Predefined chunks as necessary"
        ]
    },
    {
        name: "Enterprise",
        priceMonthly: 85,
        priceAnnual: 79,
        description: "There are many variations available, but the majority have suffered.",
        features: [
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Predefined chunks as necessary",
            "Free from repetition"
        ]
    }
];

export default function Pricing() {
    return (
        <main className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
                    {plans.map((plan, index) => (
                        <div key={index} className="h-full">
                            <div className={`relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 mr-6 -mt-4">
                                        <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                                    </div>
                                )}
                                <div className="mb-5">
                                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">{plan.name}</div>
                                    <div className="inline-flex items-baseline mb-2">
                                        <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                                        <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{plan.priceMonthly}</span>
                                        <span className="text-slate-500 font-medium">/mo</span>
                                    </div>
                                    <div className="text-sm text-slate-500 mb-5">{plan.description}</div>
                                    <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                        Purchase Plan
                                    </a>
                                </div>
                                <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
