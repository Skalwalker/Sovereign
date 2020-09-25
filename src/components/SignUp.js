import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
        <section class="signup-section" id="signup">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="fab fa-discord fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Entre no nosso Discord e jogue com a gente!<br></br></h2>
                        {/* <form class="form-inline d-flex">
                            <input class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                            <button class="btn btn-primary mx-auto" type="submit">Subscribe</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </section>
        )
    }
  }


export default SignUp;
