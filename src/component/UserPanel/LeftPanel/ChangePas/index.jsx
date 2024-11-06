import { Field, Form, Formik } from 'formik'
import React from 'react'

const index = () => {
  return (
    <div className='bg-white w-[1200px] h-[500px] rounded-xl dark:bg-slate-900'>
         <div className="w-[90%] rounded-3xl h-[500px] mx-auto mt-2 flex ">
          <div className="w-[100%]  h-96 mt-16 mx-auto">
          <Formik>
              <Form>
                <Field
                  className="border-2 w-[40%] h-[50px] rounded-xl  border-slate-300 dark:bg-slate-600"
                  placeholder="رمز عبور فعلی"
                />
                <Field
                  className="border-2 w-[40%] h-[50px] rounded-xl mr-5  border-slate-300 dark:bg-slate-600"
                  placeholder="رمز عبور جدید "
                />
                <Field
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10  border-slate-300 dark:bg-slate-600"
                  placeholder="تکرار رمز عبور "
                />
                <Field
                
                  className="border-2 w-[40%] h-[50px] rounded-xl mt-10 mr-5   border-slate-300 dark:bg-slate-600"
                  placeholder="ایمیل"
                />
              </Form>
            </Formik> <button className="btn btn-active  btn-accent text-white mt-14 mr-[80%] w-28">ثبت</button>
          </div>
         

        </div>
      
    </div>
  )
}

export default index
