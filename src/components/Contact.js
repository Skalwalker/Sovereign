import React from 'react';

class About extends React.Component {
    render() {
        return (
        <section class="contact-section bg-black">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-discord text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Discord</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="https://discord.gg/xMpda73">https://discord.gg/xMpda73</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-address-card text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Guild Leader</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><p>Skalwalker#1392</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-address-card text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Raid Leader</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><p>kappaz#1807</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <br></br>
                    <br></br>
                </div>
            </div>
        </section>
        )
    }
  }


export default About;
