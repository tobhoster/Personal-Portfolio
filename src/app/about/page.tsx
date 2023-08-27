"use client";

import exp from "constants";
import { headerStyle, paragraphStyle } from "../style";
import "./about.css";

interface IWorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  employment: string;
}

const workExperience: IWorkExperience[] = [
  {
    title: "Software Engineer",
    company: "Amazon Web Services",
    location: "New York City",
    startDate: "Feb 2022",
    endDate: null,
    employment: "Full-Time",
  },
  {
    title: "Senior Software Engineer",
    company: "Lunchbox Inc.",
    location: "New York City",
    startDate: "July 2022",
    endDate: "Jan 2022",
    employment: "Full-Time",
  },
  {
    title: "Backend Engineer",
    company: "Lunchbox Inc.",
    location: "New York City",
    startDate: "Feb 2022",
    endDate: null,
    employment: "Full-Time",
  },
  {
    title: "Software Quality Assurance Engineer",
    company: "Snap Inc. (Formerly Snapchat)",
    location: "Los Angeles",
    startDate: "June 2016",
    endDate: "August 2016",
    employment: "Full-Time",
  },
];

interface IEducation {
  institution: string;
  status: string;
  degree: string;
  startDate: string;
  endDate: string;
}

const educations: IEducation[] = [
  {
    institution: "New York Institute of Technology",
    status: "Full-time",
    degree: "Master in Computer Science and Information Technology",
    startDate: "September 2018",
    endDate: "May 2020",
  },
  {
    institution: "New York Institute of Technology",
    status: "Full-time",
    degree: "Bachelor in Computer Science",
    startDate: "September 2013",
    endDate: "May 2017",
  },
];

export default function About() {
  return (
    <main
      style={{
        width: "60%",
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
    >
      <h2 style={headerStyle}>About Me</h2>
      <p style={paragraphStyle}>
        I'm a Software Engineer with over 5 years of experience in all stages of
        software development. I hold a Bachelor's and a Master's degree in
        Computer Science. I'm highly adaptable to new technologies and
        languages, and proficient in Java, C++, Typescript, Python, Ruby,
        Golang, and Rust. My passion lies in building robust and scalable
        solutions.
      </p>

      <h2 style={headerStyle}>Work Experience</h2>
      {workExperience.map((job) => (
        <WorkExperience key={job.title} job={job} />
      ))}

      <h2 style={headerStyle}>Education</h2>
      {educations.map((education) => (
        <Education key={education.title} education={education} />
      ))}
    </main>
  );
}

interface WorkExperienceProps {
  job: IWorkExperience;
}

function WorkExperience({ job }: WorkExperienceProps) {
  return (
    <div key={job.title}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{job.title}</h3>
        <div
          style={{
            borderRadius: "3rem",
            background: "var(--button-success, #D7FFE0)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            width: "5rem",
            height: "1.5rem",
          }}
        >
          <p
            style={{
              color: "var(--button-text, #018C0F)",
              textAlign: "center",
              fontSize: "0.5625rem",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            {job.employment}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>{job.company}</p>
        </div>
        <div>
          <p>{job.location}</p>
        </div>
        <div>
          <p>
            {job.startDate} - {job.endDate ?? "Present"}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

interface EducationProps {
  job: IWorkExperience;
}

function Education({ education }: EducationProps) {
  return (
    <div key={education.institution}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{education.institution}</h3>
        <div
          style={{
            borderRadius: "3rem",
            background: "var(--button-success, #D7FFE0)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            width: "5rem",
            height: "1.5rem",
          }}
        >
          <p
            style={{
              color: "var(--button-text, #018C0F)",
              textAlign: "center",
              fontSize: "0.5625rem",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            {education.status}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>{education.degree}</p>
        </div>
        <div>
          <p>
            {education.startDate} - {education.endDate ?? "Present"}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
