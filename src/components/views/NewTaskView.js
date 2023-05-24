const NewTaskView = (props) => {
    const { handleChange, handleSubmit, error } = props;

    return (
        <div className="root">
            <div className="formContainer">
                <div className="formTitle">
                    <h2 style={{
                        fontWeight: 'bold',
                        fontFamily: 'Courier, sans-serif',
                        fontSize: '20px',
                        color: '#11153e'
                    }}>
                        New Task
                    </h2>
                </div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description:</label>
                    <br />
                    <input type="text" name="description" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Priority Level:</label>
                    <br />
                    <input type="text" name="prioritylevel" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Employee ID:</label>
                    <br />
                    <input type="text" name="employeeId" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />
                    <button type="submit" style={{ backgroundColor: '#11153e', color: '#ffffff', padding: '8px 16px' }}>
                        Submit
                    </button>
                    <br />
                    <br />
                </form>
                {error !== "" && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default NewTaskView;
