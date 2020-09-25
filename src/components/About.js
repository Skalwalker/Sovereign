import React from 'react';

class About extends React.Component {
    render() {
        return (
        <section class="about-section text-center" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="text-white mb-4">Guild Sovereign - Azralon</h2>
                        <p class="text-white-50">
                            Guild Sovereign o seu grupo para raidar duas vezes por semana, pega AotC, fazer Mythic+. E até fazer amizades se você for esse tipo de pessoa. Se você entrar na Guild só porque o site é bonito, a gente vai manter o olho aberto.
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src={require("../assets/img/logo.png")} alt="" />
            </div>
        </section>
        )
    }
  }


export default About;
