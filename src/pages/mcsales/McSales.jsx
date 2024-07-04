import { Button, Select, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import './McSales.css';
import NavbarSidebarLayout from '../../layouts/navbar-sidebar';

function McSales() {
  return (
   <NavbarSidebarLayout isFooter={false}>
        <div className="mcsales">
          <form className="mcsales_form">
            <div className="Mcsales_header">
              <h2>MC SALES</h2>
            </div>
    
            <div className="mcSales_section1">
              <div className="mcSales_section_A1">
                <label htmlFor="cusname">Customer Name</label>
                <Select sizing="md" id="cusname" required>
                  <option value="" disabled selected>
                    Customer Name
                  </option>
                  <option value="">ghghg</option>
                </Select>
              </div>
    
              <div className="mcSales_section_A1">
                <label htmlFor="mc/sl">Machine Sl No</label>
                <TextInput id="mc/sl" type="text" sizing="md" placeholder="Enter Machine Sl No" />
              </div>
              <div className="mcSales_section_A1">
                <label htmlFor="retail_date">Retail Invoice Date</label>
                <TextInput id="retail_date" type="date" sizing="md" />
              </div>
            </div>
    
            <div className="mcSales_section1">
              <div className="mcSales_section_A1">
                <label htmlFor="retail_no">Retail Invoice No</label>
                <TextInput
                  id="retail_no"
                  type="text"
                  sizing="md"
                  placeholder="Enter Retail Invoice No"
                />
              </div>
              <div className="mcSales_section_A1">
                <label htmlFor="retail_price">Retail Invoice Price</label>
                <TextInput
                  id="retail_price"
                  type="text"
                  sizing="md"
                  placeholder="Enter Retail Invoice Price"
                />
              </div>

              <div className="mcSales_section_A1">
                <label htmlFor="do_amount">DO Amount</label>
                <TextInput
                  id="do_amount"
                  type="text"
                  sizing="md"
                  placeholder="Enter Do Amount"
                />
              </div>
    
    
              <div className="mcSales_section_A1">
                <label htmlFor="do_days">DO Credit Days</label>
                <TextInput id="do_days" type="text" sizing="md" placeholder="Enter DO Credit Days" />
              </div>
            </div>
    
            
            <div className="mcSales_section1">
              <div className="mcSales_section_A1">
                <label htmlFor="do_date">DO Credit Date</label>
                <TextInput
                  id="do_date"
                  type="date"
                  sizing="md"
                />
              </div>
              <div className="mcSales_section_A1">
                <label htmlFor="subvension_amnt">Subvension Amount</label>
                <TextInput
                  id="subvension_amnt"
                  type="text"
                  sizing="md"
                  placeholder="Enter Subvension Amount"
                />
              </div>
    
              <div className="mcSales_section_A1">
                <label htmlFor="net_do_amount">Net DO Amount</label>
                <TextInput id="net_do_amount" type="text" sizing="md" placeholder="Enter Net DO Amount" />
              </div>
            </div>
    
            
            <div className="mcSales_section1">
              <div className="mcSales_section_A1">
                <label htmlFor="sales_eng">Sales Engineer</label>
                <TextInput
                  id="sales_eng"
                  type="text"
                  sizing="md"
                  placeholder=""
                />
              </div>
              <div className="mcSales_section_A1">
                <label htmlFor="Remarks">Remarks</label>
                <Textarea
                  id="Remarks"
                  type="text"
                  sizing="md"
                  placeholder=""
                />
              </div>

            
             
            </div>

            <div className="mcsales_btn">
              <Button type="submit" className='mcsales_btn1'>
                Add 
              </Button>

            </div>
          </form>
        </div>
   </NavbarSidebarLayout>
  );
}

export default McSales;
