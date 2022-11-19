import React, { useState} from "react";

import axios from "axios";
import District from  "./District"



const Inform = () => {
    const [ name, setName ] = useState('')
    const [ phonenumber, setPhonenumber ] = useState('')
    const [ sex, setSex ] = useState('')
    const [ district, setDistrict ] = useState('')
    const [ town, setTown] = useState('')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handeleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const dataForm = {
            name,
            phonenumber,
            sex,
            district,
            town
        }

        const response = await axios.post("http://localhost:5000/api/korgas", dataForm, {
            headers: {
                 'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            })
            .catch((err) => {
                    console.log(err.response.data)
                    if (err && err.response) setError(err.response.data.message);
                    setSuccess(null);
                });

            if (response && response.data) {
                setError(null);
                setSuccess(response.data.message);
            }
            if (response.status === 201) {
                window.location.replace("/https://korgasgroup.com")
             
            }

            if (response?.data?.errors) {
                const messages = response.data.errors.map(item => item.msg)

                setError(messages)
            }    }


    return (
        <>
 
            <div className='profileside'>
                <div class="container">

                    <div class="form-sec">
                        <h3>Congratulations Lets Know you!!</h3>

                        {!error && <div className='suc'>{success ? success : ""}</div>}

                        {!success && Array.isArray(error) ? error.map((item, i) => (
                            <div class="notice notice-danger alert fade show" role="alert">
                                
                                <h4 key={i}> {item} </h4>
                            </div>
                        )) : <p className="err">{error} </p>
                        }

                    <form onSubmit={handeleSubmit}>
                            <div class="form-group">

                                <input type="text" class="form-control" id="name" placeholder="Full Names" name="names" 
                                    onChange={(e) => setName(e.target.value)}
                                />
                               
                            </div><br/>
                 
                            <div class="form-group">
                                <input type="number" class="form-control" id="phone" placeholder="256725446xxx" name="phone" 
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                />
                            </div><br/>
                            
                            <div className="form-group">
                            <input list="browsers" name="browser" id="browser" class="form-control" placeholder="Status"
                             onChange={(e) => setSex(e.target.value)}
                            />
                            <datalist id="browsers">
                                <option value="Mr"/>
                                <option value="Mis"/>
                            </datalist>
                            </div><br/>

                            <div className="form-group">
                            <input list="browsers2" name="browser2" id="browser1" class="form-control" placeholder="District"
                             onChange={(e) => setDistrict(e.target.value)}
                            />
                            <datalist id="browsers2">
                                <District/>
                            </datalist>
                            </div><br/>
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Town" name="subject" 
                                     onChange={(e) => setTown(e.target.value)}
                                />
                            </div><br/>
                            <button type="submit" class="primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inform;
