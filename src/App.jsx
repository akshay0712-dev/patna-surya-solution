import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between items-center bg-[#b2b3b0d2] md:pl-[5vw] px-[5vw]">
        <div className="flex justify-start  items-center">
          <img className="h-[15vh]" src="./image/log02.png" alt="" />
          <div className="navText text-xl md:text-4xl">
            <span>PATNA SAURYA SOLUTION PVT. LTD.</span>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row justify-end w-[80vw] md:w-fit items-center gap-9 ">
          <p className="font-extrabold">+918210342249</p>
          <a href="tel:+918210342249">
            <span class="material-symbols-outlined text-[#333333]">call</span>
          </a>
          <a href="https://wa.me/918210342249" target="_blank">
            <i className="fa fa-whatsapp text-3xl bg-[#25D366] text-white rounded-[50%] px-1"></i>
          </a>
        </div>
      </nav>

      <div className="homePage">
        <img src="./image/bg1.jpg" alt="" />
        <h1 className="leading-none w-[95vw] text-xl md:text-4xl font-extrabold">
          PATNA SAURYA SOLUTION PVT. LTD.
        </h1>
        <h3 className="w-[80vw] text-sm md:text-xl ">
          Save energy today for a better tomorrow—saving energy means saving
          money, the nation, and the planet.
        </h3>
      </div>

      {/* About Us */}
      <section className="w-[95vw] md:w-[90vw] my-6 mx-auto bg-[rgba(255,255,0,0.08)] p-4 rounded-3xl border border-[#4e4c4c]">
        <p className="text-left text-lg font-bold md:text-2xl my-3">About Us</p>
        <p className="text-left text-sm md:text-lg my-3">
          At Patna Saurya Solution, we are dedicated to harnessing the power of
          the sun to provide sustainable and innovative solar energy solutions.
          Founded in 2024, we are a newly established company driven by a
          passion for renewable energy and a commitment to making a positive
          impact on the environment and our community.
        </p>
        <hr className="border border-[#4746467d]" />

        <p className="text-left text-lg font-bold md:text-2xl my-3">
          Our Mission
        </p>
        <p className="text-left text-sm md:text-lg my-3">
          Our mission is to empower individuals and businesses in Patna and
          beyond by providing accessible, high-quality solar energy solutions.
          We aim to reduce reliance on traditional energy sources, lower energy
          costs, and promote environmental sustainability. We believe that clean
          energy should be available to everyone, and we are here to make that a
          reality.
        </p>
        <hr className="border border-[#4746467d]" />

        <p className="text-left text-lg font-bold md:text-2xl my-3">
          Our Vision
        </p>
        <p className="text-left text-sm md:text-lg my-3">
          We envision a future where solar energy is the primary source of power
          for homes and businesses, creating a cleaner, greener planet for
          generations to come. Our goal is to be a leading provider of solar
          solutions in the region, recognized for our exceptional service and
          innovative technology.
        </p>
        <hr className="border border-[#4746467d]" />
        <div className="my-4">
          <p className="text-left text-lg font-bold md:text-2xl my-3">
            Our Values
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <img
              className="md:w-[30vw] rounded-xl"
              src="./image/valuesImg.jpeg"
              alt=""
            />
            <div className="">
              <span className="font-bold">Integrity: </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1">
                We believe in honesty and transparency in all our interactions.
                Our customers can trust us to deliver what we promise.
              </p>
              <span className="font-bold">Quality: </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1">
                We believe in honesty and transparency in all our interactions.
                Our customers can trust us to deliver what we promise.
              </p>
              <span className="font-bold">Innovation: </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1">
                We continuously strive to adopt the latest technology and
                practices in the solar industry to offer cutting-edge solutions
                that meet our clients' needs.
              </p>
              <span className="font-bold">Sustainability: </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1">
                Our focus is on promoting sustainable energy practices that
                benefit both our customers and the environment.
              </p>
            </div>
          </div>
        </div>

        <hr className="border border-[#4746467d]" />
        <p className="text-left text-lg font-bold md:text-2xl my-3">
          Why Choose Us?
        </p>
        <p className="text-left text-sm md:text-lg my-3">
          As a new company, we bring fresh ideas and a customer-centric approach
          to the solar energy market. Our team consists of passionate
          professionals with extensive experience in the renewable energy
          sector, dedicated to guiding you through every step of your solar
          journey. From consultation to installation and beyond, we ensure that
          your experience with us is seamless and satisfying.
        </p>
        <hr className="border border-[#4746467d]" />

        <p className="text-center text-sm font-bold md:text-lg my-3">
          We invite you to join us in our mission to create a sustainable
          future. Together, let’s harness the power of the sun🔆!
        </p>
      </section>

      <div className="flex flex-col md:flex-col gap-4 items-center my-4">
        <div className="flex flex-col md:flex-row justify-evenly gap-3">
          <img
            src="./image/pic1.jpg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic2.jpeg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic3.jpeg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-3">
          <img
            src="./image/pic4.jpeg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic5.jpeg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic6.jpg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-3">
          <img
            src="./image/pic7.jpg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic8.jpg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic9.jpg"
            alt=""
            className="w-[80vw] md:w-[30%] rounded-lg"
          />
        </div>
      </div>

      <footer className="p-4 mx-auto bg-[rgba(0,0,0,0.08)]">
        <div className="w-[95vw] md:w-[80vw] flex justify-start items-center mx-auto ">
          <div>
            <div className="text-xl md:text-3xl font-bold">Contact Us</div>
              <a
                href="https://maps.app.goo.gl/91EYinU16aLoV5jM7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-start items-start cursor-pointer gap-2 my-3"
                >
              <span className="font-bold text-lg md:text-xl">Address: </span>
            <div className="text-sm md:text-lg text-[#777777]">
                C/o - Sona Singh, Dashratha, Near Indian Oil Gate No.- 1, Patna
                Bihar - 800002
            </div>
              </a>
            <div className="flex justify-start items-start cursor-pointer gap-2 my-3">
              <span className="font-bold text-lg md:text-xl">Phone: </span>
              <span className="text-sm md:text-lg text-[#777777]">
                <a href="tel:+918210342249">+918210342249,</a>
                <a href="tel:+919708229773">+919708229773</a>
              </span>
            </div>
            <a
              href="mailto:patnasauryasolution@gmail.com"
              className="flex justify-start items-start cursor-pointer gap-2 my-3"
            >
              <span className="font-bold text-lg md:text-xl">Email: </span>
              <span className="text-sm md:text-lg text-[#777777]">
                patnasauryasolution@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center my-3 text-center text-sm md:text-base text-[#777777]">
          Thank you 🙋‍♂️ for visiting Patna Saurya Solution Pvt. Ltd.; together,
          let's pave the way to a sustainable future!
        </div>
        <div className="flex justify-center my-3 text-center text-xs md:text-sm text-[#777777]">
        <p>For website-related issues, please reach out to our developer: <a href="mailto:akshayrishu4@gmail.com">Akshay Kumar</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
