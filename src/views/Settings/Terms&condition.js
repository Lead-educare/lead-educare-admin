
import { CButton, CForm, CFormInput } from '@coreui/react';
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { convertToRaw, EditorState } from 'draft-js'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const TermsAndcondition = () => {

     const {
          handleSubmit,
          formState: { errors, }

     } = useForm()

     const [editorState, setEditorState] = useState(EditorState.createEmpty())
     const onEditorState = (editorState) => setEditorState(editorState)

      const conr=(editorState.getCurrentContent())
      const content=(convertToRaw(conr))
      const original=content.blocks.map(block => block.text).join('\n')

     
     const onSubmit = async (data) => {
          try {

            
            console.log(data)



          } catch (error) {
               console.log(error)
          }
     }
     return (
          <div className='container my-5'>
               <h4 className='my-3'>Terms And Condition</h4>
              
               <div className='card-body'>
                    
                    <CForm onSubmit={handleSubmit(onSubmit)}>

                         <div className="col-md-12">
                              <Editor 
                                   editorState={editorState}
                                   rows="5"
                                   editorClassName="editor_container editor2"
                                   placeholder="Terms And Condition"
                                   onEditorStateChange={onEditorState}
                                   handlePastedText={() => true}
                              />
                         </div>
                         <CButton className="text-white  btn-primary px-5 fw-medium mt-3" type="submit">
                              Save
                         </CButton>


                    </CForm>

               </div>
          </div>
     );
}


export default TermsAndcondition