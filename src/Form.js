import React,{useState} from 'react';
import "./Form.css";

function Form() {
    const [value,setValue]=useState(0);
    return (
        <div className="middle-section">
            <form className="form-style">
                <div className="name">
                <label>Name*</label><br/>
                <input type="text" placeholder="First name"/>
                <input type="text" placeholder="Last name"/>
                </div>
                <div className="email">
                <label>Email*</label>
                <input type="text" placeholder="Enter your email id"/>
                </div>
                <div className="room-type">
                    <label>Room type</label>
                    <select defaultValue="please select">
                        <option defaultValue>Please select</option>
                        <option value="Single bed">Single bed</option>
                        <option value="Double bed">Double bed</option>
                    </select>
                </div>
                <div className="guests">
                    <label>Number of guests</label>
                    <div>
                        <button disabled={!value} onClick={()=>setValue(value-1)}>-</button>
                        <input value={value}></input><button 
                        onClick={()=>setValue(value+1)}>+</button>
                        </div>
                    </div>
                    <div className="street">
                        <label>Street Address</label>
                        <input type="text"/>
                    </div>
                    <div class="date">
                        <label>Arrival date & time*</label>
                        <input type="date"/><input type="time"/>
                    </div>
                    <div className="departure">
                        <label>Departure Date*</label>
                        <input type="text" placeholder="Month"/>
                        <input type="text" placeholder="Day"/>
                        <input type="Year" placeholder="Year"/> 
                    </div>
                    <div className="free">
                        <label>Free Pickup?*</label><br/>
                        <input type="radio" id="yes" name="pickup" value="yes"/>
                        <label for="yes">Yes please! - pick me up on arrival</label><br/>
                        <input type="radio" id="no" name="pickup" value="no"/>
                        <label for="female">No thanks! - I'll make my own way there</label>
                    
                    </div>
                    <div className="flight">
                        <label>Flight number</label><br/>
                        <input type="text"/>
                    </div>
                    <div className="request">
                        <label>Special Requests</label><br/>
                        <textarea/>
                    </div>
                
            </form>
            
        </div>
    )
}

export default Form;
