import xd from "../images/small-logos/logo-xd.svg";
import spotify from "../images/small-logos/logo-spotify.svg";
import atlassian from "../images/small-logos/logo-atlassian.svg";
import invision from "../images/small-logos/logo-invision.svg";
import jira from "../images/small-logos/logo-jira.svg";
import slack from "../images/small-logos/logo-slack.svg";
import asana from "../images/small-logos/logo-asana.svg";
import github from "../images/small-logos/github.svg";
import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";
import team5 from "../images/team-5.jpg";

type Project = {
  image: string;
  company: string;
  members: string[];
  budget: number;
  completion: number;
};

type TableProject = {
  image: string;
  company: string;
  status: string;
  budget: number;
  completion: number;
};

export const projects: Project[] = [
  {
    image: xd,
    company: "Material UI XD Version",
    members: [team1, team2, team3, team4],
    budget: 14000,
    completion: 50,
  },
  {
    image: atlassian,
    company: "Add Progress Track",
    members: [team1, team3],
    budget: 3000,
    completion: 20,
  },
  {
    image: slack,
    company: "Fix Platform Errors",
    members: [team4, team2],
    budget: 3000,
    completion: 100,
  },
  {
    image: spotify,
    company: "Launch our Mobile App",
    members: [team3, team4, team5, team2],
    budget: 20500,
    completion: 100,
  },
  {
    image: jira,
    company: "Add the New Pricing Page",
    members: [team1],
    budget: 500,
    completion: 40,
  },
  {
    image: invision,
    company: "Redesign New Online Shop",
    members: [team1, team5],
    budget: 2000,
    completion: 60,
  },
];

export const tableProjects: TableProject[] = [
  {
    image: asana,
    company: "Asana",
    budget: 2500,
    status: "working",
    completion: 60,
  },
  {
    image: github,
    company: "GitHub",
    budget: 5000,
    status: "done",
    completion: 100,
  },
  {
    image: atlassian,
    company: "Atlassian",
    budget: 3400,
    status: "canceled",
    completion: 30,
  },
  {
    image: spotify,
    company: "Spotify",
    budget: 14000,
    status: "working",
    completion: 80,
  },
  {
    image: slack,
    company: "Slack",
    budget: 1000,
    status: "working",
    completion: 0,
  },
  {
    image: invision,
    company: "Invision",
    budget: 2300,
    status: "done",
    completion: 100,
  },
];
