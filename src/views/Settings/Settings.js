import { CButton, CForm, CFormInput, CFormSwitch } from '@coreui/react'
import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndcondition from './Terms&condition'
import { Controller, useForm } from 'react-hook-form';

const Settings = () => {

  const {
    register,
    handleSubmit  
  } = useForm()

  const [checked, setChecked] = useState(false);
   console.log(checked)

 
  const onSubmit = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  

  const switchHandler = (event) => {
  
    setChecked(event.target.checked);
  }

  return (
    <div className='container'>

<h5 className='mb-4'>Site Details Setting</h5>

      <div className="col card-body">
        

        <CForm onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-5">
              <label> Site Title</label>
              <CFormInput
                type="text"
                id="title"
                {...register('title', { required: true })}
                className="mb-2"
              />
            </div>

            <div className="col-md-5">
              <label> Site Favicon </label>
              <CFormInput
                type="file"
                accept="image/*"
                id="thumbnail"
                {...register('thumbnail', { required: true })}

              />
            </div>

          </div>
          <div className="row ">
          <div className="col-md-5 mt-2 col-sm-4">
          <CButton className="text-white mt-2" type="submit">
            Create
          </CButton>
          </div>
          <div className="col-md-5 mt-2 col-sm-4 ">

          <CFormSwitch checked={checked} onChange={switchHandler} label="Make site In maintenance mode"
              id="formSwitchCheckDefaultNormal" />
          </div>
          </div>
        
        </CForm>
      </div>

      <div className="col-md-12">
        <TermsAndcondition />
      </div>

      <div className="col-md-12">
        <PrivacyPolicy />
      </div> 




    </div>



  )
}

export default Settings
