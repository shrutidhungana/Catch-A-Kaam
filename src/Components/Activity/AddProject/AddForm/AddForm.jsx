import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AppContext } from '../../../../Context/AppContext';

const AddForm = () => { 
    const [projectName, setProjectName] = useState('');
    const [datePosted, setDatePosted] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState('');
    const [techStack, setTechStack] = useState('');
    const [dateCompleted, setDateCompleted] = useState('');
    const [amount, setAmount] = useState('');
    const { addProject, projects } = useContext(AppContext)

    let navigate = useNavigate()

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAmount(amount);
        }
      }

    const onSubmit= (e) =>{
        e.preventDefault();
        const projectNew ={
            id: projects.length+1,
            projectName,
            datePosted,
            address,
            description,
            features,
            techStack,
            dateCompleted,
            amount
        }
        addProject(projectNew);
        navigate("/dashboard");
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="projectName">ProjectName:</label>
                    <input type="text"
                        required
                        name = "projectName"
                        value={projectName}
                        onChange = {(e)=>setProjectName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="datePosted">Date Posted:</label>
                    <input type="date"
                    required
                    name = "datePosted"
                    value={datePosted}
                    onChange = {(e)=>setDatePosted(e.target.value)}
                />

                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text"
                    required
                    name = "address"
                    value={address}
                    onChange = {(e)=>setAddress(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="description">Description:</label>
                    <textarea type="text"
                        rows= "6"
                required
                name = "description"
                value={description}
                onChange = {(e)=>setDescription(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="features">Features:</label>
                <textarea type="text"
                        rows= "6"
                required
                name = "features"
                value={features}
                onChange = {(e)=>setFeatures(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="techStack">Technology to be used(TechStack):</label>
                <textarea type="text"
                        rows= "6"
                required
                name = "techStack"
                value={techStack}
                onChange = {(e)=>setTechStack(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="dateCompleted">Expected date to complete:</label>
                <input type="date"
                        
                required
                name = "dateCompleted"
                value={dateCompleted}
                onChange = {(e)=>setDateCompleted(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="amount">Amount willing to pay:</label>
                <input type="text"
                        
                required
                name = "amount"
                value={amount}
                onChange = {onAmountChange}
                    />
                </div>
                <div>
                    <button>Add Project</button>
                </div>
                <Link to = "/">Cancel</Link>
            </form>
        </div>
    )

}

export default AddForm