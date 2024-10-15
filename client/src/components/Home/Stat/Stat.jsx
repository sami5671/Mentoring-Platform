import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Container from "../../../Shared/Container";

const Stat = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <Container>
        <section>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="mt-24 text-center">
              <h1 className="lg:text-6xl font-bold bg-gradient-to-tr from-yellow-300 to-cyan-500 text-transparent bg-clip-text">
                People who are connected
              </h1>
              <p className="mt-6 text-slate-500 lg:px-44">
                Our survey highlights the engagement levels of various groups in
                career guidance and counseling. With over 4,200 professionals,
                31+ students, and 1,200 general participants, this data will
                help us understand their needs and develop better resources to
                support informed career decisions. Thank you for your valuable
                insights and participation!
              </p>
            </div>

            {/* Stats Section */}
            <section className="mt-12 flex items-center justify-center">
              <div className="grid grid-cols-1 font-bold md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl shadow-lg p-6 rounded-lg layout-css">
                {/* Students Stat */}
                <div className="layout-css shadow-md p-6 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="text-cyan-600 font-semibold text-lg">
                      Students
                    </div>
                    <img
                      width={40}
                      height={40}
                      src="/student.png"
                      className="mt-2"
                      alt=""
                    />
                    <div className="text-cyan-600 text-4xl mt-4">
                      {counterOn && (
                        <CountUp start={0} end={31} duration={3} delay={0} />
                      )}
                      <span>+</span>
                    </div>
                  </div>
                </div>

                {/* Professionals Stat */}
                <div className=" layout-css shadow-md p-6 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="text-cyan-600 font-semibold text-lg">
                      Professionals
                    </div>
                    <img
                      width={40}
                      height={40}
                      src="/professional.png"
                      className="mt-2"
                      alt=""
                    />
                    <div className="text-cyan-600 text-4xl mt-4">
                      {counterOn && (
                        <CountUp start={0} end={50} duration={3} delay={0} />
                      )}
                      <span>+</span>
                    </div>
                  </div>
                </div>

                {/* General Stat */}
                <div className=" layout-css shadow-md p-6 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="text-cyan-600 font-semibold text-lg">
                      General
                    </div>
                    <img
                      width={40}
                      height={40}
                      src="/general.gif"
                      className="mt-2"
                      alt=""
                    />
                    <div className=" text-cyan-600 text-4xl mt-4">
                      {counterOn && (
                        <CountUp start={0} end={1200} duration={3} delay={0} />
                      )}
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>
        </section>
      </Container>
    </>
  );
};

export default Stat;
