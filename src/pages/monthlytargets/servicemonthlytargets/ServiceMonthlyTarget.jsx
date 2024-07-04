
import React from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

import './ServiceMonthlyTarget.css';
import { Button } from 'flowbite-react';

function ServiceMonthlyTarget() {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="ServiceMonthlyTarget_container">
        <form action="" className="ServiceMonthlyTarget_form">
          <div className="ServiceMonthlyTarget_header">
            <h2>Service</h2>
          </div>
          <div className="ServiceMonthlyTarget_section1">
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="msi_coverage">MSI Coverage</label>
              <input type="text" id='msi_coverage'/>
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="post_warrenty_cov">Post warranty Coverage</label>
              <input type="text" id='post_warrenty_cov' />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="STR">STR</label>
              <input type="text" id='STR' />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="STTR">STTR</label>
              <input type="text" id='STTR' />
            </div>
          </div>
          <div className="ServiceMonthlyTarget_section1">
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="CSI">CSI</label>
              <input type="text" id='CSI' />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="Testimonials">Testimonials</label>
              <input type="text" id='Testimonials'/>
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="combinedvisit">Combined Visit with Sales Team</label>
              <input type="text" id='combinedvisit' />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="Repeat_Sale">Repeat Sale</label>
              <input type="text" id='Repeat_Sale' />
            </div>
          </div>
          <div className="ServiceMonthlyTarget_section1">
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="failedpart">Failed Parts Return on every week</label>
              <input type="text" id='failedpart'/>
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="service
              _commition">Service commission claiming before 10th of every month</label>
              <input type="text" id='service
              _commition' />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="attendance_discipline">Attendance & Discipline</label>
              <input type="text" id='attendance_discipline' />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="marketting_activity">Marketing activities</label>
              <input type="text" id='marketting_activity' />
            </div>
          </div>
          <div className="ServiceMonthlyTarget_section1">
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="Profit_Target">Profit Target</label>
              <input type="text" id='Profit_Target' />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Service Revenue(Target Vs Achievement )</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Service Commission</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Service Charge</label>
              <input type="text" />
            </div>
          </div>
          <div className="ServiceMonthlyTarget_section1">
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">AMC</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Service Commission (Scheduled service and warranty service)</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Service Charge</label>
              <input type="text" />
            </div>
          </div>
          <div className="ServiceMonthlyTarget_section1">
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Salary</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Travelling Expenses</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Incentives</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Tools & Coveroll</label>
              <input type="text" />
            </div>
          </div>
          <div className="ServiceMonthlyTarget_section1">
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Inventory taken for warranty and workshop charge given for warranty machines</label>
              <input type="text" />
            </div>
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Service Vehicle Expenses</label>
              <input type="text" />
            </div>
        
            <div className="ServiceMonthlyTarget_section_A1">
              <label htmlFor="">Income Vs Expenses</label>
              <input type="text" />
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
  );
}

export default ServiceMonthlyTarget;
