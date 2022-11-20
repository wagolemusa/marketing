import React, { useState } from "react";
import Inform from "./Inform";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Korga2 from './Korga2.png'


const Korgas = () => {
    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        if (page === 0) {
            return <Question4 />
        } else if (page === 1) {
            return <Question3 />
        } else if (page === 2) {
            return <Question2 />
        } else if(page === 3){
            return <Question1 />
        } else {
            return <Inform />
        }
    }

    return (
        <div>
            <div className="container">

                    <div className="cardinfo">
                        <div className="products">
                            <center>
                            <img src={Korga2} alt="" />

                            </center>
                            <br/>
                            <p><span>Win! Win! </span>Big christmas Offer from <span>KORGAS</span><br/>
                            We have 50,000 cylinders in our store to WIN. just by asnwering 4 questions
                            </p>
                            {PageDisplay()}

                            {/* <button
                                disabled={page === 0}
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                            >
                                Prev
                            </button> */}

                            <button class="next"

                             disabled={page === 4}

                                onClick={() => {
                                   
                                    setPage((currPage) => currPage + 1);

                                    
                                }}
                            >
                                {page === 4? "": "Next"}
                                
                            </button>
                        </div>
                    </div>

                   
            </div>
        </div>
    )
}

export default Korgas;

