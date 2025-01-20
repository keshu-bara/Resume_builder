
function PersonalInfo(){
    return (
        <div className="Resume">
            <br></br>
            <div className="Personal_info">
                <h3>Personal Info:</h3>
                <br />
              <div>
                <p>Name:</p>
              <input type="text" placeholder="Full Name" />
              <br />
              <p>Address:</p>
              <input type="text" placeholder="Enter your Address" />
              <br />
              <p>Email:</p>
              <input type="email" placeholder="Enter Email" />
              <br />
              <p>Telephone:</p>
              <input type="number" placeholder="Enter your Number"/>
              </div>  

            </div>
        </div>
    );
}
export default PersonalInfo