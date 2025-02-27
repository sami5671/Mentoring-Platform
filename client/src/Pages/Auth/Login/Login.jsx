import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Navigation, Autoplay } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Login = () => {
  const slides = [
    {
      logo: "MentiGo",
      img: "https://i.ibb.co.com/p60Z3q7S/space2.jpg",
      text: "Your journey guided to greatness",
    },
    {
      logo: "MentiGo",
      img: "https://i.ibb.co.com/sp5kkw6k/space3.jpg",
      text: "Your Journey Begins Here",
    },
    {
      logo: "MentiGo",
      img: "https://i.ibb.co.com/SXZ9dvHw/space4.jpg",
      text: "Explore, Learn, and Grow",
    },
  ];

  return (
    <div className="flex items-center justify-center max-h-screen lg:py-24 font-quickSandFont">
      <div className="w-full max-w-4xl bg-gray-800 shadow-xl rounded-xl flex overflow-hidden">
        {/* Left Side: Image Slider */}
        <div className="w-1/2 hidden md:block relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000, // Adjust autoplay speed in milliseconds
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="absolute w-full text-white font-semibold mt-3 flex items-center justify-between px-2">
                  <div className="ml-4">
                    <p className="text-4xl">{slide.logo}</p>
                    <p className="text-[10px] text-center">
                      Make Dreams into Reality
                    </p>
                  </div>
                  <div>
                    <Link to="/">
                      <button className="bg-white opacity-60 rounded-full text-black px-4 py-2 flex items-center gap-2">
                        Back To Website
                        <FaArrowRightLong />
                      </button>
                    </Link>
                  </div>
                </div>
                <img
                  src={slide.img}
                  alt="Slide"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                  {slide.text}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-white font-syncFont">
            Login In
          </h2>
          <p className="text-gray-400 mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400">
              Register
            </Link>
          </p>

          <div className="mt-6">
            {/* Name Fields */}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="mt-4 w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-4 w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none"
            />

            {/* Checkbox */}
            <div className="flex items-center mt-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-400 text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-400">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Register Button */}
            <button className="mt-12 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition">
              Login
            </button>

            {/* Divider */}
            <div className="text-gray-400 text-center my-4">
              Or register with
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-white hover:bg-gray-300 py-3 rounded-md text-black font-bold  flex items-center justify-center">
                <img
                  src="../../../../public/images/google.png"
                  className="w-5 h-5 mr-2"
                  alt="Google"
                />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
