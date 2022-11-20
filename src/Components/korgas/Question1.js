import React from "react";

const Question1 = () => {
    return(
        <>
               
        <div className="questions">
            <h2> <span>1) </span>Check atleast four steps taken when lighting a gas cylinder.</h2>
      </div>
      <hr/>
                <div className="main">
                
                    <label class="main">Have the match box already in your hand.
                        <input type="checkbox" />
                        <span class="geekmark"></span>
                    </label>

                    <label class="main">Strike the match box.
                        <input type="checkbox" />
                        <span class="geekmark"></span>
                    </label>

                    <label class="main">Move the lighting match striked next to the burner.
                        <input type="checkbox" />
                        <span class="geekmark"></span>
                    </label>
                    <label class="main">Switch on the burner slowly untill it catches fire.
                        <input type="checkbox" />
                        <span class="geekmark"></span>
                    </label>
                    <label class="main">Don't Switch on the burner when match striked next to it.
                        <input type="checkbox" />
                        <span class="geekmark"></span>
                    </label>
                </div>
        
        </>
    )
}


export default Question1;