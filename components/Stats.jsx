"use client";
import CountUp from "react-countup";
// import CountUp from "react-countup/build/CountUp";

const stats = [
  {
    num: 300,
    title: "LeetCode Problems",
  },
  {
    num: 1189,
    title: "Codeforces rating",
  },
  {
    num: 1721,
    title: "Codechef rating",
  },
  {
    num: 365,
    title: "GitHub Contributions",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
