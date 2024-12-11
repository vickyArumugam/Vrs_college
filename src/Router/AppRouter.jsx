import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import React, { useEffect, useState } from 'react'
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
import axios from 'axios';






function AppRouter() {
  const [color1, setColor1] = useState(null); // Store color1
  const [color2, setColor2] = useState(null); // Store color2

  // Fetch colors from the PHP file
  const fetchColors = async () => {
    try {
      const response = await axios.get("http://localhost/mailapp/colors.php");
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        const { color1, color2 } = response.data[0]; // Assuming response returns color1, color2 in an array
        setColor1(color1); // Store the first color
        setColor2(color2); // Store the second color
      } else {
        console.error("Invalid data format from server:", response.data);
      }
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  // Fetch colors when the app loads
  useEffect(() => {
    fetchColors();
  }, []);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home color1={color1} color2={color2} />} />
          <Route path="/about">
            <Route path="conference_tracks" element={<ConferenceTracks color1={color1} color2={color2} />} />
            <Route path="about_conference" element={<About_Conference color1={color1} color2={color2} />} />
            <Route path="scope_conference" element={<Scope_Conference color1={color1} color2={color2} />} />
            <Route path="about_vrscet" element={<About_Vrscet title="ABOUT VRSCET" color1={color1} color2={color2} />} />
            <Route path="organizing_committee" element={<Organizing_Committee color1={color1} color2={color2} />} />
            <Route path="editorial_board" element={<Editorial_Board color1={color1} color2={color2} />} />
          </Route>
          <Route path="/author">
            <Route path="conference_tracks" element={<Conference_tracks color1={color1} color2={color2} />} />
            <Route path="journal_publication" element={<Journal_Publication color1={color1} color2={color2} />} />
            <Route path="key_dates" element={<Key_Dates color1={color1} color2={color2} />} />
            <Route path="new_paper_submission" element={<New_Paper_Submission color1={color1} color2={color2} />} />
            <Route path="registration_details" element={<Registration_details color1={color1} color2={color2} />} />
          </Route>
          <Route path="/contact_us" element={<Contact_us color1={color1} color2={color2} />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/update" element={<SideNavbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;
