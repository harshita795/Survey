import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='background-image'>
      <div clssName="overlay">
        <div className="landing-page">

          <h1 className="text-center">Welcome to the Survey</h1>
          <p className="landing-sub-title text-danger text-center">Hello, Human</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta non, illum totam laborum nobis obcaecati qui, excepturi sit voluptate, cupiditate eos. Pariatur cupiditate nobis tempora assumenda ut quo corporis voluptatem, inventore fugiat totam minima laboriosam possimus.<br />
            Deserunt harum quidem tenetur, obcaecati eligendi accusantium maiores quibusdam pariatur ullam voluptatibus distinctio cum voluptatem, numquam quos, eos consequatur temporibus nobis exercitationem.<br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quidem cum tempore?
          </p>
          <br />
          <p>You must fill all fields, to be able to continue</p>
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary landing-button text-center"><Link to="/question">Next</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
