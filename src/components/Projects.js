import React from 'react';

class Projects extends React.Component {
    render() {
        return (
        <section class="projects-section bg-light" id="projects">
            <div class="container">
                {/* <!-- Featured Project Row--> */}
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7">

                        <img class="img-fluid mb-3 mb-lg-0" src={require("../assets/img/wow.jpg")} alt=""/>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Core Shadowlands</h4>
                            <p class="text-black-50 mb-0">Junte-se a Sovereign para derrotar Sire Denathirus em Shadowlands. Vamos realizar progressão normal, heróica e eventualmente a mítica.
                            <br></br>
                            <br></br>
                            <a>Inscreva-se</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Project One Row--> */}
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6"><img class="img-fluid" src={require("../assets/img/dungeon.png")} alt="" /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Mythic+</h4>
                                    <p class="mb-0 text-white-50">Na Sovereign você pode encontrar jogadores para fazer o conteúdo atual de dungeons míticas. Fique forte no end game com a gente!</p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6"><img class="img-fluid" src={require("../assets/img/arena.jpg")} alt="" /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">PvP</h4>
                                    <p class="mb-0 text-white-50">Caso sua meta seja jogador vs jogador, você pode encontrar sua dupla (ou seu trio) aqui na Sovereign. Oferecemos suporte para os jogadores realizarem o conteúdo que preferirem.</p>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6"><img class="img-fluid" src={require("../assets/img/achiev.jpg")} alt="" /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Achievement Runs</h4>
                                    <p class="mb-0 text-white-50">Se você joga WoW só para conseguir os seus 40.000 pontos de achievements, e quer sair por Azeroth monstrando seus mounts, toys e pets, a Sovereign oferece suporte e realizará Acievement Runs.</p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
  }


export default Projects;
