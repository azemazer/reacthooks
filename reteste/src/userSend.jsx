import { useState } from "react";
import TableInsert from "./TableInsert";

function UserSend() {

    //STATE
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    //BEHAVIOUR
    const handleSend = () => {
        
       alert([name, username]);
       const result = [name, username];
       TableInsert(name, username);
       document.getElementById("formulaire1").value='';
       document.getElementById("formulaireUsername").value='';

    }

    //RENDER
    return <>
        <form>
            <div>
                <label for="formulaire1" class="form-label">Name</label>
                <input type="text" class="form-control" id="formulaire1" placeholder="Jean Dupuis" value={name}  onChange={e => setName(e.target.value)} ></input>
            </div>
            <div class="mt-2">
                <label for="formulaireUsername" class="form-label">Username</label>
                <input type="text" class="form-control" id="formulaireUsername" placeholder="XxDarkDupuisxX" value={username}  onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div class="mt-2">
                <button name="submit" type="button" onClick={handleSend}>Envoyer</button>
            </div>
        </form>
    </>
}

export default UserSend