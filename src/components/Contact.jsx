import Image from "next/image";
import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import FillButton from "./micro/FillButton";

const Contact = () => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center">
      <p className="uppercase p-12 tracking-[10px] text-xl text-[#F2A2E8]">
        Contact
      </p>

      <h2 className="py-8 text-gray-400">Let's Get in Touch</h2>
      <p className="py-2 text-gray-200 max-w-lg text-center">
        I am always looking for new opportunities both for full-time and
        freelancing. Please feel free to drop a message and I'll surely get back
        to you
      </p>
      <div className="my-12">
        <FillButton
          child="Say Hi!"
          href="mailto:bose.suvro@gmail.com"
          padX={3}
          padY={1}
        />
      </div>
    </div>
  );
};

export default Contact;

// <div className="w-full h-auto md:h-screen mx-8">
//   <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
//     <p className="text-xl text-center tracking-[10px] uppercase text-[#F2A2E8]">
//       Contact
//     </p>
//     <div className="grid lg:grid-cols-5 gap-8">
//       <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
//         <div className="lg:p-4 h-full rounded-xl">
//           <div>
//             <Image
//               className="rounded-xl hover:scale-105 ease-in duration-300 content-center"
//               src="/assets/contact-us.jpg"
//               alt="/"
//               width="600"
//               height="600"
//             />
//           </div>
//           <div>
//             <h2 className="py-2">Suvro Bose</h2>
//             <p>Full-Stack Developer</p>
//             <p className="py-4">
//               I am available for freelance or full-time positions. Contact
//               me and let's talk
//             </p>
//           </div>
//           <div>
//             <p className="uppercase pt-8 ">Connect With Me</p>
//             <div className="flex items-center justify-between py-4">
//               <a href="https://www.linkedin.com/in/toy0407/">
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                   <FaLinkedinIn />
//                 </div>
//               </a>
//               <a href="https://github.com/toy0407">
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                   <FaGithub />
//                 </div>
//               </a>
//               <a href="mailto:bose.suvro@gmail.com">
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
//                   <AiOutlineMail />
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right */}
//       <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
//         <div className="p-4">
//           <form>
//             <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//               <div className="flex flex-col">
//                 <label className="uppercase text-sm py-2">Name</label>
//                 <input
//                   className="border-2 rounded-lg p-3 flex border-gray-300"
//                   type="text"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="uppercase text-sm py-2">Phone No.</label>
//                 <input
//                   className="border-2 rounded-lg p-3 flex border-gray-300"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col py-2">
//               <label className="uppercase text-sm py-2">Email</label>
//               <input
//                 className="border-2 rounded-lg p-3 flex border-gray-300"
//                 type="email"
//               />
//             </div>
//             <div className="flex flex-col py-2">
//               <label className="uppercase text-sm py-2">Subject</label>
//               <input
//                 className="border-2 rounded-lg p-3 flex border-gray-300"
//                 type="text"
//               />
//             </div>
//             <div className="flex flex-col py-2">
//               <label className="uppercase text-sm py-2">Message</label>
//               <textarea
//                 className="border-2 rounded-lg p-3 border-gray-300"
//                 rows="10"
//               ></textarea>
//             </div>
//             <button className="w-full p-4 text-gray-100 mt-4">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
