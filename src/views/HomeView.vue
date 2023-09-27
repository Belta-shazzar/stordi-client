<template>
  <div class="overflow-x-hidden">
    <!-- Header Section with Background Image -->
    <header class="relative">
      <div
        class="h-screen bg-cover bg-center filter blur-sm bg-origin-padding bg-clip-padding"
        style="
          background-image: url('https://res.cloudinary.com/shazzar-smart-city/image/upload/v1695599733/bg-img_phrwig.png');
        "
      ></div>
      <!-- Blurred Overlay -->
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <!-- Content Centered on the Page -->
      <div class="absolute w-full h-full top-0 text-white">
        <nav class="flex justify-between w-full p-6 items-center md:px-[98.84px] md:py-[45px]">
          <p class="font-bold font-Mont_Alt text-xl lg:text-[40px]">STORDI</p>
          <div class="flex items-center">
            <RouterLink
              class="hidden md:block bg-accent py-[15px] px-[30px] font-extrabold text-[17px] rounded-[10px] hover:bg-hover md:text-2xl"
              to="/sign-up"
              >Get Started</RouterLink
            >
            <RouterLink class="font-extrabold text-xl ml-8 md:text-2xl" to="/sign-in"
              >Login</RouterLink
            >
          </div>
        </nav>

        <div class="flex justify-center mt-40 py-5">
          <div class="min-w-[661px] text-center flex flex-col items-center">
            <h1 class="text-4xl font-black mb-3 tracking-wide md:text-8xl md:tracking-wide">
              Welcome to Stordi
            </h1>
            <p class="font-semibold text-lg md:text-4xl md:tracking-wide md:mt-6">
              Your Ultimate Note-Taking Solution
            </p>
            <img
              class="h-[41px] w-[42px] md:h-[61px] md:w-[62px] my-10 md:my-14"
              :src="vector"
              alt="My SVG Icon"
            />
            <div class="w-80 md:w-4/6">
              <p class="md:text-3xl md:leading-10 md:font-medium">
                Say hello to Stordi - Your go-to-platform, for seamless note-taking, anytime,
                anywhere.
              </p>
            </div>

            <div class="flex flex-col gap-4">
              <RouterLink
                class="bg-accent md:bg-transparent md:border-[3px] rounded-[10px] py-[15px] px-[30px] mt-24 font-bold text-lg md:font-extrabold md:text-2xl"
                to="/sign-up"
                >Get Started</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Section -->
    <main class="container mx-auto py-10 md:py-16">
      <section>
        <h1 class="font-semibold text-center text-2xl text-secondary md:text-[45px]">
          Why Choose Stordi?
        </h1>

        <div class="wcs py-5">
          <img class="mt-10" :src="access_bg" alt="My SVG Icon" />
          <span>
            <h1>Universal Access</h1>
            <p>
              Access your notes from any device, whether it's your computer, tablet, or smartphone.
              All you need is an internet connection.
            </p>
          </span>
        </div>

        <div class="wcs py-5">
          <img class="mt-10" :src="organized_bg" alt="My SVG Icon" />
          <span>
            <h1>Effortless Organization</h1>
            <p>
              Keep your notes organized with tags, folders, and powerful search functionality. Say
              goodbye to lost notes forever.
            </p>
          </span>
        </div>

        <div class="wcs py-5">
          <img class="mt-10" :src="scraping" alt="My SVG Icon" />
          <span>
            <h1>Web Scrapping</h1>
            <p>
              Stordi's unique web scraping tool allows you to fetch data from the web and seamlessly
              integrate it into your notes.
            </p>
          </span>
        </div>
      </section>

      <section class="mt-10 md:mt-14">
        <h1 class="font-semibold text-center text-2xl text-secondary md:text-[45px]">
          Grasping the Workflow of Stordi
        </h1>

        <div class="flex flex-col gap-8 md:flex-row mt-8 md:mt-12">
          <!-- Content Block 1 -->
          <div class="gws bg-white p-6 rounded-lg shadow-md">
            <img class="" :src="signup" alt="My SVG Icon" />
            <h1 class="text-2xl font-semibold mb-4">Sign Up</h1>
            <p>Creating an account is quick and easy. All you need is a valid email address</p>
          </div>

          <!-- Content Block 2 -->
          <div class="gws rounded-lg shadow-md">
            <img class="" :src="note" alt="My SVG Icon" />
            <h1 class="text-2xl font-semibold mb-4">Start Taking Notes</h1>
            <p>Get Started with your first note, whether it’s work, school, or personal use</p>
          </div>

          <!-- Content Block 3 -->
          <div class="gws rounded-lg shadow-md">
            <img class="" :src="global_access" alt="My SVG Icon" />
            <h1 class="text-2xl font-semibold mb-4">Access Anywhere</h1>
            <p>Log in from any device, and your notes will be waiting for you</p>
          </div>
        </div>

        <div class="flex md:justify-around">
          <div class="flex flex-col gap-8 md:flex-row mt-8 md:w-[68%]">
            <!-- Content Block 4 -->
            <div class="gws rounded-lg shadow-md">
              <img class="" :src="collaborate" alt="My SVG Icon" />
              <h1 class="text-2xl font-semibold mb-4">Collaborate</h1>
              <p>Share notes with others and work together effortlessly</p>
            </div>

            <!-- Content Block 5 -->
            <div class="gws rounded-lg shadow-md">
              <img class="" :src="organized" alt="My SVG Icon" />
              <h1 class="text-2xl font-semibold mb-4">Stay Organized</h1>
              <p>Use tags and folders to keep your notes neatly sorted</p>
            </div>
          </div>
        </div>
      </section>

      <div class="py-5 px-6  mt-11 flex flex-col">
        <p class="text-center text-sm leading-6 text-secondary md:text-xl md:mx-48">
          Stordi is a trusted note-taking platform with a global community of students,
          professionals, and creatives who appreciate its versatility and user-friendly features.
        </p>
        <button
          class="bg-white shadow-md mt-5 rounded-md py-2 px-8 text-sm font-medium text-secondary md:text-xl md:mx-96 md:mt-10"
        >
          Join Thousands of Satisfied Users
        </button>
      </div>
    </main>

    <div class="hidden">
      <h1>Start Your Note-Taking Journey with Stordi Today</h1>
      <!-- Image goes here -->
      <div>
        <!-- Buttons go here -->
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="flex justify-between items-center bg-accent text-white">
      <p class="font-bold font-Mont_Alt text-md md:text-[30px] pl-2 md:pl-8">STORDI</p>

      <div class="">
        <button @click="scrollToTop" class="ml-2 text-[10px] md:text-lg md:ml-6" to="/">
          HOME
        </button>
        <RouterLink class="ml-2 text-[10px] md:text-lg md:ml-6" to="/sign-in">NOTES</RouterLink>
        <RouterLink class="ml-2 text-[10px] md:text-lg md:ml-6" to="/sign-in"
          >LEARN MORE</RouterLink
        >
        <RouterLink class="ml-2 text-[10px] md:text-lg md:ml-6" to="/sign-in">SIGN IN</RouterLink>
      </div>
      <button
        @click="scrollToTop"
        class="bg-hover text-white focus:outline-none p-4 md:px-8 md:py-6"
      >
        <i class="fa-solid fa-arrow-up text-sm md:text-3xl"></i>
      </button>
    </footer>
  </div>
</template>

<script setup>
import vector from "../assets/svg/Vector.svg";
import signup from "../assets/svg/signup.svg";
import note from "../assets/svg/note.svg";
import collaborate from "../assets/svg/collaborate.svg";
import organized from "../assets/svg/organized.svg";
import global_access from "../assets/svg/global_access.svg";
import access_bg from "../assets/svg/u_access_bg.svg";
import organized_bg from "../assets/svg/e_organization_bg.svg";
import scraping from "../assets/svg/scraping.svg";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.bg-primary {
  background-color: #007bff; /* Your primary color */
}

.bg-primary-dark {
  background-color: #0056b3; /* A darker shade of your primary color */
}

.wcs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  padding: 20px 30px;
  color: #333;
  /* background-color: coral; */
}

.wcs h1,
.gws h1 {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.03em;
  margin-bottom: 12px;
  color: #333;
}

.wcs p,
.gws p {
  font-size: 16px;
  line-height: 24px;
  color: #333;
}

.wcs p,
.wcs h1,
.gws p {
  text-align: center;
}

.wcs img {
  width: 200px;
  height: 200px;
  margin-bottom: 25px;
}

.gws {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 26px 23px;
}

.gws img {
  width: 42px;
  height: 41px;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .wcs {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin: 40px 0;
    padding: 0 15px;
    /* background-color: coral; */
  }

  .gws {
    padding: 20px 40px;
  }

  .gws img {
    width: 62px;
    height: 61px;
    margin-bottom: 20px;
  }

  .wcs:nth-child(odd) {
    flex-direction: row;
  }

  .wcs:nth-child(odd) img {
    margin-left: 50px;
  }

  .wcs:nth-child(even) img {
    margin-right: 50px;
  }

  .wcs span {
    width: 23%;
  }

  .wcs h1,
  .gws h1 {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 15px;
  }

  .wcs p,
  .gws p {
    font-size: 23px;
    line-height: 36px;
  }
}
</style>
