import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const List = styled.li`
  font-size: 1.5rem;
  color: white;
`;
const SkillsType = ({ skills }) => {
  return (
    <Container className="mt-3">
      <div>
        <ul>
          {skills.map((skill) => (
            <List className="text-capitalize" key={skill}>
              {skill}
            </List>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SkillsType;
