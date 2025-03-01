import React from "react";
import style from "./info.module.scss";
import personagem from "../../assets/personagem.jpg"

export default function Info() {
    return (
        <form className={style.form}>
            <div className={style.form}>
                <img src={personagem} alt="Personagem" className={style.formPersonagem} />
                <div className={style.formColuna}>
                    <div className={style.formGroup}>
                        <label htmlFor="nameCharacter">Nome do personagem:</label>
                        <input type="text" id="nameCharacter" className={style.Input} />
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="namePlayer">Nome do Jogador:</label>
                        <input type="text" id="namePlayer" className={style.Input} />
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="Classe">Classe:</label>
                        <input type="text" id="Classe" className={style.Input} />
                        <input type="number" id="lvl" className={`${style.Input} ${style.lvl}`} />
                    </div>
                </div>


            </div>
        </form>
    );
}
