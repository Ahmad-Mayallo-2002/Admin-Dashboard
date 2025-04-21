import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";
import team5 from "../images/team-5.jpg";
type Author = {
  image: string;
  name: string;
  email: string;
  function: string;
  status: string;
  employed: string;
};

export const authors: Author[] = [
  {
    image: team1,
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: "Software Engineer",
    status: "offline",
    employed: new Date().toLocaleDateString(),
  },
  {
    image: team2,
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    function: "Software Developer",
    status: "offline",
    employed: new Date().toLocaleDateString(),
  },
  {
    image: team3,
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    function: "AI Engineer",
    status: "online",
    employed: new Date().toLocaleDateString(),
  },
  {
    image: team4,
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    function: "Back End Engineer",
    status: "online",
    employed: new Date().toLocaleDateString(),
  },
  {
    image: team5,
    name: "Miriam Eric",
    email: "miriam@creative-tim.com",
    function: "Software Testing",
    status: "offline",
    employed: new Date().toLocaleDateString(),
  },
];
