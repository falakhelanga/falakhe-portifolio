import styled from "styled-components";
import Service from "./Service";
import { motion } from "framer-motion";

const Container = styled.div`
  background-color: transparent;
  width: 100%;
  height: 70vh;
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
    background: #c04848;
    background: -webkit-linear-gradient(to top, #480048, #c04848);
    background: linear-gradient(to top, #480048, #c04848);
    border-radius: 10px;
  }
`;

const Title = styled(motion.h3)`
  font-weight: bold;
  color: #dbdddf;
`;

const Offer = () => (
  <Container className="mt-4 container py-4">
    <Title
      animate={{
        scale: [1, 1.5, 1],
        transition: {
          duration: 0.5,
        },
      }}
      className="text-capitalize mb-3 text-center"
    >
      What I offer
    </Title>
    <div className="mt-3 d-flex w-100 justify-content-around flex-column flex-md-row">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,

              bounce: 0.5,
              type: "spring",
              ease: "easeInOut",
              delay: 1.2,
            },
          },
        }}
      >
        <Service title="Front End Development">
          Building Responsive and interactive user interfaces by using modern
          technoligies such as Html5,Css3,Javascript,
          React.js,Next.js,Bootsrap,Material ui and many more
        </Service>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,

              bounce: 0.5,
              type: "spring",
              ease: "easeInOut",
              delay: 1.1,
            },
          },
        }}
      >
        <Service title="Back End Development">
          Building and Handling scalable server and making crud operations to
          the database using modern technologies like
          Node.js,Express.js,Javascript, MongoDb,MySQL,GraphQl,Rest apis and
          many more
        </Service>
      </motion.div>
    </div>
    <div className="mt-4 d-flex flex-column flex-md-row w-100 justify-content-around">
      {" "}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,

              bounce: 0.5,
              type: "spring",
              ease: "easeInOut",
              delay: 1,
            },
          },
        }}
      >
        <Service title="UI/UX Designer">
          Designing Amazing userinterface, wire frames and prototypes using
          adobe Xd and figma
        </Service>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,

              bounce: 0.5,
              type: "spring",
              ease: "easeInOut",
              delay: 0.9,
            },
          },
        }}
      >
        <Service title="E-Commerce Site">
          I Build scalable e-commerce site that includes payment and cart
          operations, with high security
        </Service>
      </motion.div>
    </div>
    <div className="mt-4 d-flex flex-column flex-md-row w-100 justify-content-around">
      {" "}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,

              bounce: 0.5,
              type: "spring",
              ease: "easeInOut",
              delay: 0.8,
            },
          },
        }}
      >
        <Service title="Serverlless Applications">
          Building serverlless applications by using AWS web services
        </Service>
      </motion.div>
    </div>
  </Container>
);

export default Offer;
