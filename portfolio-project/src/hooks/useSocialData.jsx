import { useResume } from "../hooks/useResume";

export function useSocialData() {
  const resumeUrl = useResume();
  return [
    {
      link: "https://www.github.com/mcxpm",
      icon: "GitHubIcon",
      title: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/markus-lim-en-cheng/",
      icon: "LinkedInIcon",
      title: "LinkedIn",
    },
    {
      link: resumeUrl,
      icon: "FileOpenIcon",
      title: "Resume",
    },
  ];
}
