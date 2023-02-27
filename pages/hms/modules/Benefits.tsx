import React from "react";

interface Benefits {
  title: string;
  description: string;
  image: string;
}
const benefits: Benefits[] = [
  {
    title: "Ease of use",
    description: "Easy for student to book hostel rooms of choice",
    image: "/images/illustrations/book-hostel.svg",
  },
  {
    title: "Secure",
    description: "Employing encrypted communication to ensure security.",
    image: "/images/illustrations/security-on.svg",
  },
  {
    title: "Accessible",
    description: "Pre-designed to be accessed from any location.",
    image: "/images/illustrations/all-locations.svg",
  },
  {
    title: "Fast",
    description: "Light-weight framework ensuring speedy loading.",
    image: "/images/illustrations/fast-loading.png",
  },
  {
    title: "Flexible",
    description: "Managing user data has never been more flexible.",
    image: "/images/illustrations/flexible-management.png",
  },
  {
    title: "Generate Reports",
    description: "Quickly Generate information & print reports from database.",
    image: "/images/illustrations/report-printing.svg",
  },
];

type Props = {};

export default function Benefits({}: Props) {
  return (
    <section className="flex flex-col items-center py-16 px-6 sm:px-12 max-w-[1220px] mx-auto">
      <h1 className="text-[2rem] sm:text-[2.5rem] text-[#D3542D] font-bold mb-10">
        Benefits
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {benefits.map((benefit) => (
          <div className="max-w-[300px] shadow-md p-4 space-y-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl text-[#D3542D] font-bold">
              {benefit.title}
            </h3>
            <img src={benefit.image} alt="" className="w-full" />
            <p className="text-md">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
