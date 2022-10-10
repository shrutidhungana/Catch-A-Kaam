import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../../../../Context/AppContext";
import { Add, Input, Inputs, Input1, Button, Button1 } from "./AddFormStyle.";
import "./AddForm.css";
const AddForm = () => {
  const [projectName, setProjectName] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [techStack, setTechStack] = useState("");
  const [dateCompleted, setDateCompleted] = useState("");
  const [amount, setAmount] = useState("");
  const { addProject, projects } = useContext(AppContext);

  let navigate = useNavigate();

  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const projectNew = {
      id: projects.length + 1,
      projectName,
      datePosted,
      address,
      description,
      features,
      techStack,
      dateCompleted,
      amount,
    };
    addProject(projectNew);
    navigate("/dashboard");
  };

  return (
    <Add>
      <form onSubmit={onSubmit}>
        <Inputs>
          <label htmlFor="projectName">Project Name:</label>
          <Input
            type="text"
            required
            name="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <label htmlFor="datePosted">Date Posted:</label>
          <Input
            type="date"
            required
            name="datePosted"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            required
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <label htmlFor="description">Description:</label>
          <Input1
            type="text"
            required
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <label htmlFor="features">Features required:</label>
          <Input1
            type="text"
            required
            name="features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <label htmlFor="techStack">Technology to be used(TechStack):</label>
          <Input1
            type="text"
            required
            name="techStack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <label htmlFor="dateCompleted">Expected date to complete:</label>
          <Input
            type="date"
            required
            name="dateCompleted"
            value={dateCompleted}
            onChange={(e) => setDateCompleted(e.target.value)}
          />
        </Inputs>
        <Inputs>
          <label htmlFor="amount">Amount willing to pay:</label>
          <Input
            type="text"
            required
            name="amount"
            value={amount}
            onChange={onAmountChange}
          />
        </Inputs>

        <Button>Add Project</Button>
        <Button1>
          <Link to="/dashboard" className="lk">
            Cancel
          </Link>
        </Button1>
      </form>
    </Add>
  );
};

export default AddForm;
