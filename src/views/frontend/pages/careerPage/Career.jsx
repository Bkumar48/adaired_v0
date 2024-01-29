// // React components
// import { memo, useReducer } from "react";
// import Banner from "../../components/banners/Banner";
// import Button from "../../components/buttonComponent/Button";
// import { Icon } from "@iconify/react";
// import DOMPurify from "dompurify";
// import { useState } from "react";
// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import axios from "axios";

// // Memoized component for rendering HTML
// const RenderHtml = memo(({ data }) => {
//   if (!data) return null;
//   const sanitizedHtml = DOMPurify.sanitize(data);
//   return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
// });

// RenderHtml.displayName = "RenderHtml";

// // Memoized component for current recruitments
// const CurrentRecruitments = memo((props) => {
//   const [isOpen, toggleAccordion] = useReducer((state) => !state, false);

//   // Helper function to format date
//   const formatDate = (inputDate) => {
//     const date = new Date(inputDate);
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return date.toLocaleDateString("en-US", options);
//   };

//   return (
//     <>
//       {props.data &&
//         props.data.map((job) => {
//           return (
//             <>
//               <div className="current_recruitments">
//                 <div className="current__recruitment-card">
//                   <div className="job__title d-flex">
//                     <h3>{job.jobName}</h3>
//                     <div className="job__upadted-on">
//                       <span>( 2 Days Ago )</span>
//                     </div>
//                   </div>

//                   <div className="job__description">
//                     <p>{job.jobDescription}</p>
//                   </div>

//                   <div className="job__location">
//                     <p>
//                       <Icon icon="carbon:location-filled" color="#038EB0" />{" "}
//                       Bestech Business Tower, Mohali
//                     </p>
//                   </div>

//                   <div className="d-flex openings__applicants">
//                     <p className="openings">
//                       <Icon icon="carbon:user-filled" color="#038EB0" /> Opening
//                       - 2
//                     </p>

//                     <p className="experience_required">
//                       {" "}
//                       <Icon icon="carbon:calendar" color="#038EB0" /> 2-3 Years
//                     </p>
//                   </div>
//                 </div>

//                 <div
//                   className={`description__accordion ${isOpen ? "active" : ""}`}
//                 >
//                   <div
//                     className="description__accordion-header"
//                     onClick={toggleAccordion}
//                   >
//                     <h3>Description</h3>
//                     <div className="svg_container">
//                       <Icon
//                         icon="simple-line-icons:arrow-down"
//                         className="arrow-up"
//                       />
//                     </div>
//                   </div>
//                   {isOpen && (
//                     <div className="description__accordion-content">
//                       {/* <div className="job__description">
//                         <h3>Job Description</h3>
//                         <p>
//                           We are seeking a motivated and talented Digital
//                           Marketing Executive to join our team.
//                         </p>
//                       </div> */}

//                       <div className="extraContent mt25  mb-50">
//                         <RenderHtml data={job.description} />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//             </>
//           );
//         })}
//     </>
//   );
// });

// CurrentRecruitments.displayName = "CurrentRecruitments";

// // Memoized component for career form
// const CareerForm = memo(() => {
//   const [imageName, setImageName] = useState("");
//   return (
//     <div className="form">
//       <form action="" className="career__form">
//         <div className="form-group">
//           <input type="text" id="name" placeholder="Name" />
//         </div>
//         <div className="form-group">
//           <input type="email" id="email" placeholder="Email" />
//         </div>
//         <div className="form-group">
//           <input type="tel" id="phone" placeholder="Phone No." />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="current_designation"
//             placeholder="Current Designation"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="resume">Upload Resume :</label>
//           <input
//             type="file"
//             id="file"
//             className="resume-file"
//             onChange={(e) => {
//               const name = e.target.files[0];
//               setImageName(name.name);
//             }}
//           />
//           <div className="upload-col">
//             <span type="button" className="resume-upload">
//               Choose File
//             </span>
//             <label className="file" id="file">
//               {imageName !== "" ? imageName : "No File choosen"}
//             </label>
//           </div>
//         </div>

//         <div className="form-group">
//           <textarea rows="5" placeholder="Query"></textarea>
//         </div>
//         <Button
//           title="Submit"
//           type="submit"
//           svgBackgroundColor="#000"
//           icon="solar:arrow-right-broken"
//           borderColor="#FB9100"
//           width="100%"
//           textAlign="center"
//         />
//       </form>
//     </div>
//   );
// });

// CareerForm.displayName = "CareerForm";

// // Main Career component
// const Career = () => {
//   const {
//     data: jobs,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["jobs"],
//     queryFn: async () => {
//       try {
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/v1/career/all`
//         );
//         console.log(data.result);
//         return data.result;
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   });
//   return (
//     <>
//       <Banner title="Career" />
//       <div className="career_wrapper">
//         <div className="career_container container pad100">
//           <h2 className="bigheading">We Are Currently Recruiting For :</h2>
//           <div className="d-flex career_content align-start">
//             <div className="career__left">
//               <CurrentRecruitments data={jobs} />
//             </div>
//             <div className="career__right">
//               <CareerForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Career;

import { memo, useState } from "react";
import Banner from "../../components/banners/Banner";
import Button from "../../components/buttonComponent/Button";
import { Icon } from "@iconify/react";
import DOMPurify from "dompurify";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const RenderHtml = memo(({ data }) => {
  if (!data) return null;
  const sanitizedHtml = DOMPurify.sanitize(data);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
});

RenderHtml.displayName = "RenderHtml";

const JobCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  let modifiedDescription = job.description || "";
  modifiedDescription = modifiedDescription.replace(
    /<ol>/g,
    '<ol class="ol-list">'
  );

  const dateString = job.updatedAt;
  const date = new Date(dateString);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = currentDate - date;
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysAgo = Math.round(difference / millisecondsPerDay);

// Construct the string
let daysAgoString;
if (daysAgo === 0) {
    daysAgoString = "Today";
} else {
    daysAgoString = `${daysAgo} ${daysAgo === 1 ? 'Day' : 'Days'} Ago`;
}


  return (
    <div className="current_recruitments mb-50">
      <div className="current__recruitment-card">
        <div className="job__title d-flex">
          <h3>{job.jobName}</h3>
          <div className="job__upadted-on">
            <span>( {daysAgoString} )</span>
          </div>
        </div>

        <div className="job__description">
          <p>{job.jobDescription}</p>
        </div>

        <div className="job__location">
          <p>
            <Icon icon="carbon:location-filled" color="#038EB0" /> Bestech
            Business Tower, Mohali
          </p>
        </div>

        <div className="d-flex openings__applicants">
          <p className="openings">
            <Icon icon="carbon:user-filled" color="#038EB0" /> Opening -{" "}
            {job.openings}
          </p>
          <p className="experience_required">
            {" "}
            <Icon icon="carbon:calendar" color="#038EB0" />{" "}
            {job.experienceRequired}{" "}
          </p>
        </div>
      </div>
      <div className={`description__accordion ${isOpen ? "active" : ""}`}>
        <div
          className="description__accordion-header"
          onClick={toggleAccordion}
        >
          <h3>Description</h3>
          <div className="svg_container">
            <Icon
              icon="simple-line-icons:arrow-down"
              className={isOpen ? "arrow-up" : ""}
            />
          </div>
        </div>
        {isOpen && (
          <div className="description__accordion-content">
            <RenderHtml data={modifiedDescription} />
          </div>
        )}
      </div>
    </div>
  );
};

const CurrentRecruitments = memo(({ data }) => {
  return (
    <>{data && data.map((job, index) => <JobCard key={index} job={job} />)}</>
  );
});

CurrentRecruitments.displayName = "CurrentRecruitments";

const CareerForm = memo(() => {
  const [imageName, setImageName] = useState("");
  return (
    <div className="form">
      <form action="" className="career__form">
        <div className="form-group">
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="tel" id="phone" placeholder="Phone No." />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="current_designation"
            placeholder="Current Designation"
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume :</label>
          <input
            type="file"
            id="file"
            className="resume-file"
            onChange={(e) => {
              const name = e.target.files[0];
              setImageName(name.name);
            }}
          />
          <div className="upload-col">
            <span type="button" className="resume-upload">
              Choose File
            </span>
            <label className="file" id="file">
              {imageName !== "" ? imageName : "No File choosen"}
            </label>
          </div>
        </div>

        <div className="form-group">
          <textarea rows="5" placeholder="Query"></textarea>
        </div>
        <Button
          title="Submit"
          type="submit"
          svgBackgroundColor="#000"
          icon="solar:arrow-right-broken"
          borderColor="#FB9100"
          width="100%"
          textAlign="center"
        />
      </form>
    </div>
  );
});

CareerForm.displayName = "CareerForm";

const Career = () => {
  const {
    data: jobs,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/career/all`
        );
        return data.result;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Banner title="Career" />
      <div className="career_wrapper">
        <div className="career_container container pad100">
          <h2 className="bigheading">We Are Currently Recruiting For :</h2>
          <div className="d-flex career_content align-start">
            <div className="career__left">
              <CurrentRecruitments data={jobs} />
            </div>
            <div className="career__right">
              <CareerForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
