import styled from "styled-components";
import { projects } from "../utils/projects";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  @media (min-width: 768px) {
    height: 300px;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  width: 25px;
  color: whitesmoke;
`;
const Image = styled.img`
  max-height: 100%;
  height: 100%;
  max-width: 100%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  background: #c04848;
  background: -webkit-linear-gradient(to top, #480048, #c04848);
  background: linear-gradient(to top, #480048, #c04848);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
const Tag = styled.div`
  color: whitesmoke;

  border-radius: 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
`;
const Content = styled.div``;
const Description = styled.p`
  color: whitesmoke;
`;
const Project = ({ showModal }) => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((project) => project.id.toString() === id);

  return !project ? (
    <div></div>
  ) : (
    <Container className="container p-3 d-flex flex-column  align-items-center justify-content-center">
      <ImageContainer className=" d-flex align-items-center  justify-content-center">
        <Image src={project.image} alt={project.name} />
      </ImageContainer>
      <Content className="d-flex flex-column">
        <div className="d-flex flex-wrap my-2">
          {project.tags.map((tag) => (
            <Tag key={tag} className="ml-2 px-2 text-capitailize">
              {tag}
            </Tag>
          ))}
        </div>
        <Description>{project.description}</Description>
        <div className="d-flex w-100 justify-content-center">
          <a
            href={project.repo}
            target="_blank"
            className="d-flex flex-column align-items-center"
          >
            <Icon icon={faGithub} />

            <span className="text-white">Git hub</span>
          </a>

          <a
            href={project.url}
            target="_blank"
            className="d-flex flex-column align-items-center ml-4"
          >
            <Icon icon={faEye} />

            <span className="text-white mt-1">View</span>
          </a>
        </div>
      </Content>
    </Container>
  );
};

export default Project;
