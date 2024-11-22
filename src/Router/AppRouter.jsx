import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import React from 'react'
import ConferenceTracks from '../Components/About/Conference _tracks';
import About_Conference from '../Components/About/About_Conference';
import Scope_Conference from '../Components/About/Scope_Conference';
import About_Vrscet from '../Components/About/About_Vrscet';
import Organizing_Committee from '../Components/About/Organizing_Committee';
import Editorial_Board from '../Components/About/Editorial_Board';
import Conference_tracks from '../Components/Author\'s_Desk/Conference_tracks';
import Journal_Publication from '../Components/Author\'s_Desk/Journal_Publication';
import Key_Dates from '../Components/Author\'s_Desk/Key_Dates';
import New_Paper_Submission from '../Components/Author\'s_Desk/New_Paper_Submission';
import Registration_details from '../Components/Author\'s_Desk/Registration_details';
import Contact_us from '../Components/Contact_us/Contact_us';
import LoginPage from '../Components/Admin/LoginPage';
import SideNavbar from '../Components/SideBar/SideNavbar';
import Welcome_page from '../Components/Admin/Home/Welcome_page';





function AppRouter() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'>
        <Route path='conference_tracks' element={<ConferenceTracks/>}/>
        <Route path='about_conference' element={<About_Conference/>}/>
        <Route path='scope_conference' element={<Scope_Conference/>}/>
        <Route path='about_vrscet' element={<About_Vrscet/>}/>
        <Route path='organizing_committee' element={<Organizing_Committee/>}/>
        <Route path='editorial_board' element={<Editorial_Board/>}/>
        </Route>
        <Route path='/author'>
        <Route path='conference_tracks' element={<Conference_tracks/>}/>
        <Route path='journal_publication' element={<Journal_Publication/>}/>
        <Route path='key_dates' element={<Key_Dates/>}/>
        <Route path='new_paper_submission' element={<New_Paper_Submission/>}/>
        <Route path='registration_details' element={<Registration_details/>}/>
        </Route>
        <Route path='/contact_us' element={<Contact_us/>}/>
        <Route path='/admin' element={<LoginPage/>}/>
        <Route path='/update' element={<SideNavbar/>}/>
        
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default AppRouter;

{/* <option value="Academicians">Academicians</option>
                <option value="Students & PG/Ph.D Scholar">Students & PG/Ph.D Scholar</option>
                <option value="Industry Delegates">Industry Delegates</option>
                <option value="Overseas DElegates">Overseas DElegates</option> */}
