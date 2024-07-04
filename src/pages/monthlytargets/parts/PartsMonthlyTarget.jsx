import React from 'react'
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar'
import './PartsMonthlyTarget.css'
import { Button } from 'flowbite-react'

function PartsMonthlyTarget() {
  return (
  
    <NavbarSidebarLayout isFooter={false}>
        <div className='partstarget_container'>
          <form action="" className='partstarget_form'>
            <div className='partstarget_header'>
              <h2>Parts</h2>
            </div>
            <div className="partstarget_section1">
            <div className="partstarget_section_A1">
              <label htmlFor="">Income from Parts Sales</label>
              <input type="text" id=''/>
            </div>
            <div className="partstarget_section_A1">
              <label htmlFor="">Salary</label>
              <input type="text" id='' />
            </div>
            <div className="partstarget_section_A1">
              <label htmlFor="">Emi (Two wheeler)</label>
              <input type="text" id='' />
            </div>
          </div>
          <div className="partstarget_section1">
            <div className="partstarget_section_A1">
              <label htmlFor="">Incentives</label>
              <input type="text" id=''/>
            </div>
            <div className="partstarget_section_A1">
              <label htmlFor="">Freight Expenses</label>
              <input type="text" id='' />
            </div>
            <div className="partstarget_section_A1">
              <label htmlFor="">PF & ESI</label>
              <input type="text" id='' />
            </div>
          </div>
          <div className="partstarget_section1">
            <div className="partstarget_section_A1">
              <label htmlFor="">Marketing activities</label>
              <input type="text" id=''/>
            </div>
            <div className="partstarget_section_A1">
              <label htmlFor="">Other Expenses (mobile)</label>
              <input type="text" id='' />
            </div>
            <div className="partstarget_section_A1">
              <label htmlFor="">Office Rents</label>
              <input type="text" id='' />
            </div>
          </div>

          
          <div className="flex justify-center mb-2 mt-3">
            <Button
              className="sm:w-auto"
              color="dark"
              style={{ fontWeight: 'bold', width: '200px' }}
              type='submit'>
              Submit
            </Button>
          </div>
          </form>
          
        </div>
    </NavbarSidebarLayout>
   
  )
}

export default PartsMonthlyTarget
