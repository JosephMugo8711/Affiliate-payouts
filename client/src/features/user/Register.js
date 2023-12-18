import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'

function Register(){

    const INITIAL_REGISTER_OBJ = {
        name : "",
        password : "",
        emailId : ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)

    const submitForm = (e) =>{
        e.preventDefault()
        setErrorMessage("")

        if(registerObj.name.trim() === "")return setErrorMessage("Name is required! (use any value)")
        if(registerObj.emailId.trim() === "")return setErrorMessage("Email Id is required! (use any value)")
        if(registerObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
        else{
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/app/welcome'
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setRegisterObj({...registerObj, [updateType] : value})
    }

    return(
        <div className="min-h-screen  bg-[#f1e7f2] justify-self-center flex items-center">
           <div className="card mx-auto w-full max-w-5xl   shadow-xl">
             <div className="flex justify-center bg-base-100 rounded-xl">
                    <div className='py-24 px-10 flex flex-col items-center'>
                    <h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText defaultValue={registerObj.name} updateType="name" containerStyle="mt-4 form-control form-control-lg mt-4 p-4 text-lg" labelTitle="Name" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={registerObj.emailId} updateType="emailId" containerStyle="mt-4 form-control form-control-lg mt-4 p-4 text-lg" labelTitle="Email Id" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4 form-control form-control-lg mt-4 p-4 text-lg" labelTitle="Password" updateFormValue={updateFormValue}/>

                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full rounded-full p-2 btn-primary bg-[#670b77] text-white" + (loading ? " loading" : "")}>Register</button>

                        <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register