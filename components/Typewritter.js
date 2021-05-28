import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Writer = styled.h4`
  color: #dbdddf;
  font-weight: bold;
`;
const Iam = styled.h3`
  color: #dbdddf;
  font-weight: bold;
`;
const TypeWriter = () => (
  <div className="text-center mt-1">
    <Iam>I am a</Iam>
    <Writer className="d-flex">
      <Typewriter
        options={{
          strings: [
            "Front-end Developer",
            "Back-end Developer",
            "Api Developer",
            "UX/UI Designer",
            "Barister",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </Writer>
  </div>
);

export default TypeWriter;
