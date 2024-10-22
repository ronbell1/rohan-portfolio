import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://aceternity.com",
    title: "A website to show my creativity",
    description:
      "My work centers around designing and developing visually appealing websites using HTML and CSS. I believe that creativity is the key to capturing attention and providing an unforgettable user experience. Every element, from layout to styling, is thoughtfully crafted to enhance both aesthetics and functionality, making sure that the final product not only looks great but also feels intuitive. ",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          I’m thrilled to share that I recently completed my first website
          development project! This experience has been both exciting and
          incredibly educational, allowing me to immerse myself in the world of
          HTML and CSS. I learned a lot from resources like W3Schools, YouTube,
          and the invaluable support of a friend, Meet Patel who guided me
          through the process.{" "}
        </p>
        <p>
          The website I created leans heavily on the creative side, where I
          could experiment with design and aesthetics. This project has given me
          a solid foundation and a true passion for coding. As much as I enjoyed
          the creative freedom, I&apos;m now looking forward to diving into more
          professional projects that challenge me to grow even further. I&apos;m
          excited to continue this journey, take on new challenges, and expand
          my skills in the dynamic world of web development. This is just the
          beginning, and I’m eager to see where it leads!
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://algochurn.com",
    title: "Weather App",
    description:
      "To deepen my understanding of JavaScript, I developed a weather app that fetches real-time weather details from an API. This project allowed me to dive into API integration, asynchronous programming, and handling dynamic data. Through this app, I was able to retrieve information such as temperature, humidity, and weather conditions, which are displayed in a user-friendly interface. It was an exciting journey that showcased how powerful JavaScript can be when combined with creative problem-solving.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          One of the key milestones in my journey to learn JavaScript was
          developing a weather app. The primary goal was to create an
          interactive and functional application that provides users with
          real-time weather data based on their location or the city they input.
          This project wasn&apos;t just about building a simple app; it was about
          understanding how to effectively integrate external APIs, handle
          asynchronous data, and present that information in a clean and
          user-friendly manner.{" "}
        </p>
        <p>
          To make the app work, I connected it to a weather API, which allowed
          me to fetch detailed weather information such as temperature, humidity
          levels, wind speed, and the overall weather conditions for any
          location. Learning how to work with APIs was a major part of the
          project, as it taught me how to make requests, handle responses, and
          manage the flow of data using JavaScript&apos;s async/await functions. On
          the front end, I used HTML and CSS to design a simple yet engaging
          interface that would display the data in an easy-to-read format. The
          challenge here was ensuring that the interface looked good across
          different devices—so I implemented a responsive design that adapts
          whether you&apos;re using a desktop or mobile. I also worked with real-time
          data updates, meaning the app pulls and displays live information
          whenever the user inputs a new city or refreshes the page.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://gomoonbeam.com",
    title: "To-Do List",
    description:
      "I built a to-do list app to strengthen my JavaScript skills, focusing on task management, dynamic updates, and local storage to ensure tasks persist even after refreshing the page",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          Another significant project in my learning process was building a
          to-do list application using JavaScript. This project focused on
          creating a practical tool that helps users manage their daily tasks
          while giving me a deeper understanding of JavaScript fundamentals,
          including manipulating the DOM, managing user input, and dynamically
          updating the interface based on user interactions.{" "}
        </p>
        <p>
          The to-do list allows users to add, edit, and remove tasks, marking
          them as complete when finished. I learned how to handle these
          interactions efficiently, especially when dealing with events such as
          clicks or form submissions. A key part of this project was
          understanding how to use JavaScript to dynamically create and modify
          HTML elements in real-time. Each task had to be rendered in the UI
          immediately after being added or updated, which helped me grasp the
          importance of real-time feedback in applications.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "UNO Game",
    description:
      "I created a digital version of the UNO game using Java and a graphical user interface (GUI), focusing on game logic and interactive design to deliver a fun and engaging user experience.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          I developed a digital version of the classic UNO game using Java,
          incorporating a graphical user interface (GUI) to make it interactive
          and visually engaging. This project allowed me to dive deep into
          object-oriented programming concepts, as I had to create classes for
          cards, players, and game rules. The GUI was built using Java’s Swing
          library, which made the game more intuitive, with buttons for drawing
          cards, playing turns, and displaying current hands.{" "}
        </p>
        <p>
          The main challenge was implementing the logic of the game, ensuring
          that the rules were followed correctly, like matching colors or
          numbers, handling special cards, and managing turn-based play. The GUI
          also added complexity, as I needed to create an interface that updated
          in real time, showing the current state of the game, such as player
          hands and the discard pile. This project was a great way to combine my
          Java programming knowledge with user interface design, and it enhanced
          my understanding of game development logic. It also reinforced the
          importance of smooth interaction and clear visual feedback in creating
          a fun and user-friendly experience.
        </p>{" "}
      </div>
    ),
  },
];
