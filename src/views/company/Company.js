import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Company extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
      isinvalid: ''
    })
  }
  submit = () => {
    const companyVo = {
      companyName: this.state.companyName,
      address: this.state.address,
      phone: this.state.phone,
      employee: this.state.employeeNo
    }
    console.log('companyVo', companyVo)
  }
  render() {
    return (
      <>
        <CRow>
          <CCol xs="12" sm="6">
            <CCard>
              <CCardHeader>
                Company
            <small> Form</small>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="name">Company Name</CLabel>
                      <CInput name="companyName" onChange={this.handleInputChange} value={this.state.value} placeholder="Enter your Company name " required />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="ccnumber">Address </CLabel>
                      <CInput name="address" value={this.state.address} placeholder="Address" required onChange={this.handleInputChange} />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="ccnumber">Phone </CLabel>
                      <CInput name="phone" value={this.state.phone} placeholder="Phone" required onChange={this.handleInputChange} />
                    </CFormGroup>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="ccnumber">Employee </CLabel>
                      <CSelect custom name="ccmonth" id="ccmonth" name="employeeNo" onChange={this.handleInputChange}>
                        <option value=""> Select Employee</option>
                        <option value=" less than 10">less than 10</option>
                        <option value="2">10-50</option>
                        <option value="3">more than 50</option>
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CButton color="primary" className="mt-3" active tabIndex={-1} onClick={this.submit}>Submit</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

      </>
    )
  }
}

export default Company
