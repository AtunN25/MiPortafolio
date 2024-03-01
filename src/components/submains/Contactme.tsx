import "../../index.css";
import { Subtema } from "./subparts/Subtema.tsx";

import React, { useRef, useEffect } from "react";

import Vitejslogo from "../../assets/Vitejs-logo.svg.png";
import react from "../../assets/react.svg";

import { CardContainer } from "../ui/3d-card.tsx";

import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";
import {  toast } from "react-toastify";

export function Contactme() {
  
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i3rex9r", "template_oimzfz3", form.current!, {
        publicKey: "GHnk-Bjt8CkRQ3Z20",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Mensaje enviado con exito😃", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error el enviar el mensaje😰", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );

    form.current!.reset();
  };

  return (
    <div className="pt-2  md:grid grid-cols-2 gap-5 p-1 md:h-full pb-3">
      <CardContainer className="inter-var">
        <div className="bg-neutral-800 border-2  md:h-full rounded-lg divcircle hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
          <Subtema subnamePageHeader={"LOCALIZACION"} />
          <div className="relative h-[620px] rounded-lg shadow-lg r dark:shadow-black/20 flex justify-center items-center p-3 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15178.275423829606!2d-70.24252501103089!3d-17.998785028566807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ac59e303c5e97%3A0x68da2cd60620089!2sDistrito%20de%20Pocollay%2C%20Tacna!5e0!3m2!1ses-419!2spe!4v1693185595511!5m2!1ses-419!2spe"
              className=" left-0 top-0 h-full w-full rounded-lg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </CardContainer>

      <div className="pt-4 md:pt-0 col-span-1 flex flex-col gap-2">
        <div className="bg-neutral-800 border-2  opacity-85 rounded-lg h-4/6 mb-2 divcircle hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
          <Subtema subnamePageHeader={"ENVIAME UN MENSAJE"} />
          <form
            ref={form}
            onSubmit={sendEmail}
            className="px-8 pt-6 pb-8 mb-4 rounded"
          >
            <div className="mb-4 grid grid-cols-2">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="firstName"
                >
                  Nombres
                </label>
                <input
                  className="w-64 px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Nombres"
                  required
                  name="user_name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="Last Name"
                >
                  Apellidos
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Apellidos"
                  name="user_last_name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                id="email"
                type="email"
                placeholder="Email"
                required
                name="user_email"
              />
            </div>
            <div className=" mb-4 ">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="Mensaje"
              >
                Mensaje
              </label>
              <textarea
                className=" rounded-md w-full h-28 px-3 py-2"
                placeholder="Mensaje"
                name="message"
                required
              ></textarea>
            </div>
            <div>
              <button
                className="flex items-center bg-transparent hover:bg-cyan-600 text-cyan-300 font-semibold hover:text-white py-2 px-4 border border-cyan-300 hover:border-transparent rounded"
                type="submit"
                value="Send"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        <CardContainer className="inter-var">
          <div className=" text-white bg-neutral-800 border-2  opacity-85 rounded-lg h-2/6 divcircle hover:border-cyan-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f]">
            <Subtema subnamePageHeader={"SECCION SIN MOTIVO O POR AÑADIR"} />

            <p className="px-2">
              Es la primera version de mi portafolio y la seguire mejorando de
              acuerdo al diseño en{" "}
              <a
                href="https://www.figma.com/file/1j68kU3Ox7tddEv9iFfKPL/Free-Template-Portfolio-Web-Site-(Community)?type=design&node-id=1%3A2&mode=dev&t=efqv3q83bbzg2vn8-1"
                className="text-teal-400 "
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                figma
              </a>{" "}
              con mas efectos.
            </p>
            <h1 className="px-2"> Este proyecto esta siendo creado con :</h1>
            <div className="px-2 flex items-end justify-end">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="html-5--v1"
              />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/css3.png"
                alt="css3"
              />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/typescript--v1.png"
                alt="typescript--v1"
              />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/tailwindcss.png"
                alt="tailwindcss"
              />
              <img className="h-11 w-11 " src={Vitejslogo} alt="Logo"></img>
              <img className="h-11 w-11 " src={react} alt="Logo"></img>
              <span className="flex justify-end w-full p-4">v 2.1</span>
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
}
