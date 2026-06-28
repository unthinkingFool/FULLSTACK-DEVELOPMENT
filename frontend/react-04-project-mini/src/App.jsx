import "./App.css";
import Card from "./components/Card"
import {Bookmark} from 'lucide-react';

function App() {
  const jobOpenings = [
  {
    id: 1,
    companyLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    postedDaysAgo: 2,
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$145k - $180k"
  },
  {
    id: 2,
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    postedDaysAgo: 1,
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior",
    salary: "$130k - $160k"
  },
  {
    id: 3,
    companyLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    postedDaysAgo: 5,
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$170k - $210k"
  },
  {
    id: 4,
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    postedDaysAgo: 3,
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$140k - $175k"
  },
  {
    id: 5,
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    postedDaysAgo: 7,
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$220k - $320k"
  },
  {
    id: 6,
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    postedDaysAgo: 4,
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$135k - $170k"
  },
  {
    id: 7,
    companyLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    postedDaysAgo: 1,
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$250k - $400k"
  },
  {
    id: 8,
    companyLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    postedDaysAgo: 6,
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$180k - $240k"
  },
  {
    id: 9,
    companyLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    postedDaysAgo: 2,
    post: "Full Stack Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    salary: "$120k - $160k"
  },
  {
    id: 10,
    companyLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    postedDaysAgo: 8,
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior",
    salary: "$85k - $110k"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return <Card tag1={elem.tag1} salary ={elem.salary} logo={elem.companyLogo} days={elem.postedDaysAgo} post={elem.post} company={elem.companyName}/>;
      })}
    </div>
  );
}

export default App;