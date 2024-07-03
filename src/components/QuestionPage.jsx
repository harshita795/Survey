import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuestionPage = () => {
  const [activities, setActivities] = useState([{ activity: '', name: '', frequency: '' }]);

  const handleInputChange = (index, event) => {
    const values = [...activities];
    values[index][event.target.name] = event.target.value;
    setActivities(values);
  };

  const handleAddActivity = () => {
    setActivities([...activities, { activity: '', name: '', frequency: '' }]);
  };

  const handleRemoveActivity = (index) => {
    const values = [...activities];
    values.splice(index, 1);
    setActivities(values);
  };

  return (

    <div className='background-image'>
      <div className="overlay">
        <div className="question-page">
          <h1 className='text-center'>QUESTION ONE</h1>
          <p className="text-center title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, molestiae sint! Dignissimos nobis ut voluptatem
            sapiente repudiandae dolor, est necessitatibus perferendis debitis distinctio odio eius earum harum asperiores
            suscipit nihil?
          </p>

          <div>
            <form className="text-center">
              {activities.map((activity, index) => (
                <div className="row mb-3" key={index}>
                  <div className="col-md-6">
                    <label className="form-label">Choose An Activity</label>
                    <select
                      className="form-select"
                      name="activity"
                      value={activity.activity}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">select an activity</option>
                      <option value="activity1">Activity 1</option>
                      <option value="activity2">Activity 2</option>
                    </select>
                    <select
                      className="form-select mt-2"
                      name="name"
                      value={activity.name}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">select a name</option>
                      <option value="name1">Name 1</option>
                      <option value="name2">Name 2</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Choose Frequency</label>
                    <select
                      className="form-select"
                      name="frequency"
                      value={activity.frequency}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                    <select
                      className="form-select mt-2"
                      name="frequency"
                      value={activity.frequency}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                    <button type="button" className="btn btn-danger mt-4" onClick={() => handleRemoveActivity(index)}>
                      X
                    </button>
                  </div>
                </div>
              ))}
              <button type="button" className="btn btn-secondary" onClick={handleAddActivity}>
                ADD A NEW ACTIVITY
              </button>
            </form>
          </div>

          <div className="text-center mt-4">
            <Link to="/" className="btn btn-primary">NEXT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
