import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem, MDBDropdownLink,MDBTooltip
} from 'mdb-react-ui-kit';

export default function NavbarCalorie() {
    const [showNavColor, setShowNavColor] = useState(false);
    

    return (
        <>
            <MDBNavbar expand='lg-1' dark bgColor='primary' >
                <MDBContainer fluid>
                    <MDBNavbarBrand href='CalorieTracker.com'>CalorieTracker.com</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColor(!showNavColor)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColor} navbar>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0 '>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='/home'>
                                <MDBTooltip wrapperProps={{}}
                                    placement='right' title='Home button'>
                                    Home
                                </MDBTooltip>
                                </MDBNavbarLink>
                            </MDBNavbarItem>


                            <MDBNavbarItem>
                                
                                <MDBNavbarLink href='/AboutUs'><MDBTooltip wrapperProps={{}}
                                    placement='right' title='This is a calorie tracker website. Add the product name and add calorie and the weight to add in a list to track'>
                                    About us
                                </MDBTooltip></MDBNavbarLink>
                            </MDBNavbarItem>

                            


                            <form className='d-flex input-group w-25'>
                                <input type='search' className='form-control' placeholder='Search for ' aria-label='Search' />
                                <MDBBtn color='primary' >Search</MDBBtn>
                            </form>


                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link w-25' >
                                    &nbsp;&nbsp;Contact
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink><MDBNavbarItem className='me- me-lg-0'>
                                                <MDBNavbarLink href='/contact/twitter'>
                                                    <MDBIcon fab icon='twitter' />&nbsp;&nbsp;&nbsp;@calorieTracker
                                                </MDBNavbarLink>
                                            </MDBNavbarItem></MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink><MDBNavbarItem className='me-3 me-lg-0'>
                                                <MDBNavbarLink href='/contact/facebook'>
                                                    <MDBIcon fab icon='facebook' />&nbsp;&nbsp;&nbsp;Facebook.com/calorieTracker
                                                </MDBNavbarLink>
                                            </MDBNavbarItem></MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink><MDBNavbarItem className='me-3 me-lg-0'>
                                                <MDBNavbarLink href='/contact/instagram'>
                                                    <MDBIcon fab icon='instagram' />&nbsp;&nbsp;&nbsp;calorie_Tracker
                                                </MDBNavbarLink>
                                            </MDBNavbarItem></MDBDropdownLink>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}