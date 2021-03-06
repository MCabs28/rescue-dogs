import React from 'react'
import {

   
    FormWrap,
    Icon,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton, 
    FormTextarea,
    CloseIcon,

} from './SignElements'

 
const Signin = () => {
  return (
    <>
        
            <FormWrap>
               
             

                   

                        <Form action="#">
                        

                            <FormH1>
                            <Icon to="/"> <CloseIcon/> </Icon>
                            Any questions about adoption?
                             </FormH1>
                            
                            <FormLabel htmlFor='for'>Name </FormLabel>
                            <FormInput type='text' required />

                            <FormLabel htmlFor='for'>Email </FormLabel>
                            <FormInput type='email' required />

                            <FormLabel htmlFor='for'>Phone </FormLabel>
                            <FormInput type='number' required />

                            <FormLabel htmlFor='for'>Write a Message</FormLabel>
                            <FormTextarea type='text' required />

                            <FormButton type='submit'>Send Now</FormButton>                   

                        </Form>
                   
            </FormWrap>
        
    </>
  )
}

export default Signin