import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//Importing custom Components
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Pages/Home";
import Signin from "./Pages/Student/Signin";
import Signup from "./Pages/Student/Signup";
import LoggedStudent from "./Pages/Student/LoggedStudent";
import LoggedAdmin from "./Pages/Admin/LoggedAdmin";
import Tutor from "./Pages/Tutor/LoggedTutor";
import NavbarForStudent from "./Components/NavbarForStudent";
import StudentProfile from "./Pages/Student/StudentProfile";
import SolvedQuestions from "./Pages/Student/SolvedQuestions";
import NavbarForAdmin from "./Components/NavbarForAdmin";
import UnsolvedQuestions from "./Pages/Student/UnsolvedQuestions";
import AdminStudentlist from "./Pages/Admin/AdminStudentlist";
import AdminTutorlist from "./Pages/Admin/AdminTutorlist";
import NavbarforTutor from "./Components/NavbarforTutor";
import TutorSolvedQuestions from "./Pages/Tutor/TutorSolvedQuestions";
import TutorProfile from "./Pages/Tutor/TutorProfile";
import SigninTutor from "./Pages/Tutor/SigninTutor";
import SignupTutor from "./Pages/Tutor/SignupTutor";
import SigninAdmin from "./Pages/Admin/SigninAdmin";
import DisplayIndividualQuestion from "./Components/DisplayIndividualQuestion";
import DisplayIndividualQuestionForTutor from "./Components/DisplayIndividualQuestionForTutor";
import UpdateQuestion from "./Pages/Student/UpdateQuestion";
import UpdateProfile from "./Pages/Student/UpdateProfile";
import ViewAnswer from "./Pages/Tutor/ViewAnswer";
import ViewAnswers from "./Pages/Student/ViewAnswers";
import AllQuestionsAsked from "./Pages/Admin/AllQuestionsAsked";
import Blog1 from "./Pages/Blogs/Blog1";
import Error from "./Pages/Error";
import Loginauth from "./Pages/Auth/Loginauth";
import Signupauth from "./Pages/Auth/Signupauth";
import Explore from "./Pages/Explore";
import Mycourse from "./Pages/Tutor/Mycourse";
import CreateCourse from "./Pages/Tutor/CreateCourse";
import Chatgpt from "./Pages/Student/Chatgpt";
function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("login") === "true" ? true : false || false
  );
  const [notLoggedIn, setNotloggedIn] = useState(!loggedIn);
  const [loggedInTutor, setLoggedInTutor] = useState(
    localStorage.getItem("user") === "tutor" || false
  );
  const [loggedInAdmin, setLoggedInAdmin] = useState(
    localStorage.getItem("user") === "admin" || false
  );
  const [loggedInStudent, setLoggedInStudent] = useState(
    localStorage.getItem("user") === "student" || false
  );
  return (
    <>
      {(notLoggedIn && <NavbarComponent />) ||
        (loggedInTutor && <NavbarforTutor />) ||
        (loggedInStudent && <NavbarForStudent />) ||
        (loggedInAdmin && <NavbarForAdmin />)}
      <Routes>
        <Route path="/" element={<Home />} />

        {notLoggedIn ? (
          <>
            <Route path="/blog" element={<Blog1 />} />
            <Route path="/loginauth" element={<Loginauth />} />
            <Route path="/signupauth" element={<Signupauth />} />
            <Route path="/signin/student" element={<Signin />} />
            <Route path="/signup/student" element={<Signup />} />
            <Route path="/signin/admin" element={<SigninAdmin />} />
            <Route path="/signin/tutor" element={<SigninTutor />} />
            <Route path="/signup/tutor" element={<SignupTutor />} />
            <Route path="/explore" element={<Explore />} />
          </>
        ) : (
          <>
            {loggedInStudent ? (
              <>
                <Route
                  path="/student/askquestion"
                  element={<LoggedStudent />}
                />
                <Route path="/student/profile" element={<StudentProfile />} />
                <Route
                  path="/student/solvedquestions"
                  element={<SolvedQuestions />}
                />
                <Route
                  path="/student/getquestion"
                  element={<DisplayIndividualQuestion />}
                />
                <Route
                  path="/student/unsolvedquestions"
                  element={<UnsolvedQuestions />}
                />
                <Route
                  path="/students/updatequestion"
                  element={<UpdateQuestion />}
                />
                <Route
                  path="/students/updateprofile"
                  element={<UpdateProfile />}
                />
                <Route path="/student/viewanswer" element={<ViewAnswers />} />
                <Route path="/blog" element={<Blog1 />} />
                <Route path="/student/chatgpt" element={<Chatgpt />} />
              </>
            ) : (
              <>
                {loggedInTutor ? (
                  <>
                    <Route path="/tutorprofile" element={<TutorProfile />} />
                    <Route
                      path="/tutor/solvedquestions"
                      element={<TutorSolvedQuestions />}
                    />
                    <Route path="/tutor/mycourse" element={<Mycourse />} />
                    <Route
                      path="/tutor/createcourse"
                      element={<CreateCourse />}
                    />
                    <Route path="/tutor/viewanswer" element={<ViewAnswer />} />
                    <Route path="/tutor/answerquestion" element={<Tutor />} />
                    <Route
                      path="/tutor/getquestion"
                      element={<DisplayIndividualQuestionForTutor />}
                    />
                    <Route path="/blog" element={<Blog1 />} />
                  </>
                ) : (
                  <>
                    {loggedInAdmin ? (
                      <>
                        <Route path="/admin" element={<LoggedAdmin />} />
                        <Route
                          path="/admin/studentlist"
                          element={<AdminStudentlist />}
                        />
                        <Route
                          path="/admin/tutorlist"
                          element={<AdminTutorlist />}
                        />
                        <Route
                          path="/admin/allquestions"
                          element={<AllQuestionsAsked />}
                        />
                        <Route path="/blog" element={<Blog1 />} />
                      </>
                    ) : (
                      <>
                        <Route path="*" element={<Error />} />
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Routes>
    </>
  );
}
export default App;
