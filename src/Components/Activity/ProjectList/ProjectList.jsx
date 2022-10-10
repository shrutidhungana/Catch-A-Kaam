import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import {
  Content,
  Project,
  List,
  Heading,
  Heading1,
  Span,
  Span1,
  Paragraph,
  Button,
  Button2,
  Paragraph1,
  Button1,
  No,
  Box,
} from "./ProjectListStyle";
import "./ProjectList.css";

const ProjectList = () => {
  const { projects, removeProject } = useContext(AppContext);
  return (
    <div>
      {projects.length > 0 ? (
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <Project>
                <List>
                  <Content>
                    <Heading>
                      {" "}
                      Project Name:
                      <Span>{project.projectName}</Span>
                    </Heading>

                    <Heading1>
                      {" "}
                      Date Posted: <Span>{project.datePosted}</Span>
                    </Heading1>

                    <Heading1>
                      Address:<Span>{project.address}</Span>
                    </Heading1>
                    <Paragraph>
                      {" "}
                      Description:<Span1>{project.description}</Span1>
                    </Paragraph>
                    <Paragraph>
                      Features:<Span1>{project.features}</Span1>
                    </Paragraph>
                    <Paragraph>
                      Technologies to be used(Tech Stack):
                      <Span1>{project.techStack}</Span1>
                    </Paragraph>
                    <Heading1>
                      Date Completed:<Span>{project.dateCompleted}</Span>
                    </Heading1>
                    <Heading1>
                      Amount:<Span>{project.amount}</Span>
                    </Heading1>
                  </Content>
                  <div>
                    <Link to={`/edit/${project.id}`}>
                      <RiEditLine className="edit" />
                    </Link>
                    <Button2 onClick={() => removeProject(project.id)}>
                      <RiDeleteBinLine />
                    </Button2>
                  </div>
                  <Button>
                    <Link to="/addproject" className="button">
                      Add New Projects
                    </Link>
                  </Button>
                </List>
              </Project>
            </div>
          ))}
        </div>
      ) : (
        <No>
          <Box>
            <div>
              <Paragraph1>
                It seems Like you don't have any available projects.
              </Paragraph1>
            </div>

            <Button1>
              <Link to="/addproject" className="button">
                <IoIosAdd className="add" />
                Add new Projects
              </Link>
            </Button1>
          </Box>
        </No>
      )}
    </div>
  );
};

export default ProjectList;
