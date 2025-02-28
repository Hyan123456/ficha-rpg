import React from "react";
import style from "./info.module.scss";
import { render } from "@testing-library/react";

function Info(){
    return(
        <form>
            <div>
                <label>
                    Nome: 
                </label>
                <input 
                    type="text"
                    name="nameCharacter"
                    id = "nameCharacter"
                />
            </div>
        </form>
    )
}
export default Info;