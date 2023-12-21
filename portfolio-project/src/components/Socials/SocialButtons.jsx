import { IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileOpenIcon from "@mui/icons-material/FileOpen";

export default function SocialButtons(props) {
  const icons = {
    LinkedInIcon,
    GitHubIcon,
    FileOpenIcon,
  };

  const redirectToLink = () => {
    window.open(props.link, "_blank");
  };

  const Icon = icons[props.iconName];
  return (
    <Tooltip title={props.title} placement="right">
      <IconButton
        sx={{
          height: 24,
          width: 24,
          cursor: "pointer",
          color: "black",
        }}
        onClick={redirectToLink}
      >
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
