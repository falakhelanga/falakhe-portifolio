import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

const SocialLinks = () => (
  <div className="w-50 d-flex justify-content-between mt-3">
    <a href="https://github.com/falakhelanga" target="_blank">
      <GitHubIcon />
    </a>
    <a href="https://linkedin.com/in/falakhe-sivela-1387a6128" target="_blank">
      <LinkedInIcon />
    </a>
    <a href="https://facebook.com/fah.falakhe" target="_blank">
      <FacebookIcon />
    </a>
  </div>
);
export default SocialLinks;
