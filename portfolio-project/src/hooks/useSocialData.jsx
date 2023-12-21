import { useResume } from "../hooks/useResume";

export function useSocialData() {
  const resumeUrl = useResume();
  return [
    {
      link: "https://www.github.com/mcxpm",
      icon: "GitHubIcon",
    },
    {
      link: "https://www.linkedin.com/in/markus-lim-en-cheng/",
      icon: "LinkedInIcon",
    },
    {
      link: resumeUrl,
      icon: "FileOpenIcon",
    },
  ];
}
