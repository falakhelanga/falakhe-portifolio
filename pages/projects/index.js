import React from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import Zoom from "@material-ui/core/Zoom";
import { useState } from "react";
import { useRouter } from "next/router";
import { projects } from "../../utils/projects";
import Project from "../../components/Project";
import { motion } from "framer-motion";

const Container = styled.div`
  cursor: pointer;
  height: 90vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a03548;

    border-radius: 10px;
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 380px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
`;
const Image = styled.img`
  max-height: 70%;
  max-width: 100%;
  height: 100%;
  width: 100%;
`;
const Tag = styled.div`
  color: whitesmoke;

  border-radius: 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
`;

const Title = styled.h4`
  color: whitesmoke;
  font-weight: bold;
`;
const index = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const handleShowModal = (id) => {
    router.push(`?id=${id}`);
    setShowModal(true);
  };
  const { id } = router.query;
  return (
    <Container className="container pt-4">
      <div className="d-flex flex-column flex-wrap justify-content-around   flex-md-row container-fluid">
        {projects.map((project) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              },
            }}
          >
            <ImageContainer
              key={project.id}
              className="p-2 mb-3  "
              onClick={() => {
                handleShowModal(project.id);
              }}
            >
              <Image src={project.image} alt="e-commerce project" />
              <Title className="mt-3 text-capitalize">{project.name}</Title>
              <div className="d-flex my-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Tag key={tag} className="ml-2 px-2 text-capitailize">
                    {tag}
                  </Tag>
                ))}
              </div>
            </ImageContainer>
          </motion.div>
        ))}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Zoom in={showModal} timeout={5}>
          <Project showModal={showModal} />
        </Zoom>
      </Modal>
    </Container>
  );
};

export default index;
