import { useForm } from 'react-hook-form'

export default function Form(){
    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
     const resposta = await fetch("/api/cadastrar", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
       });

    const dados = await resposta.json();
    console.log("Resposta do servidor:", dados);
    };
    
    return (
        <>
        <div className="backGround">
        <form onSubmit={handleSubmit(onSubmit)} className="userForm">
            <h2>Register</h2>
            <fieldset>
          
                <legend>First Name</legend>
                <input 
                type="text" 
                placeholder="First Name..." {...register("firstname",{required:true})}/>

                <legend>Last Name</legend>
                <input type="text"  
                placeholder="Last Name..." {...register("lastname",{required:true})}/>
             
                <legend>Phone</legend>
                <input type="number" step="any" min="14"
                placeholder="Phone..." {...register("phone")}/>

                <legend>Email</legend>
                <input type="email" placeholder="Email..." 
                {...register("email")}/>
                </fieldset>
                <button type="submit">REGISTER</button>
        </form>
        </div>

        </>
    )
}