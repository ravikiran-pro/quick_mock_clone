import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div className="page-main-container">
                <div className="container-fluid page-base-container-1">
                    <div className="row">
                        {/* card group 1 */}
                        <div className="col-md-12 col-lg-9">
                            <div className="row">
                                <div className="col-12 col-sm-5 card-holder">
                                    <div className="col-12 card shadow-light">
                                        
                                    </div>
                                </div>
                                <div className="col-12 col-sm-7 card-holder">
                                    <div className="col-12 card shadow-light">
                                        
                                    </div>
                                </div>
                                <div className="col-12 card-holder">
                                    <div className="col-12 card shadow-light">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card group 1  End */}
                        {/* card group 2 */}
                         <div className="col-md-12 col-lg-3">
                             <div className="row">
                                <div className="col-sm-6 col-md-12 card-holder ">
                                    <div className="col-12 card shadow-light">

                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12 a card-holder">
                                    <div className="col-12 card shadow-light">
 
                                     </div>
                                 </div>
                             </div>
                        </div>
                        {/* card group 2 End */}

                        {/* card group 3 End */}
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 card-holder">
                                                <div className="col-12 card shadow-light">

                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 card-holder">
                                                <div className="col-12  card shadow-light">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 card-holder">
                                                <div className="col-12 card shadow-light">

                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 card-holder">
                                                <div className="col-12  card shadow-light">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* card group 3 End */}                        
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default Home;