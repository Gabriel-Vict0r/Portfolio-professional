import React from "react";
import "../sass/components/widgets/contactMe.sass";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import TextareaAutosize from "react-textarea-autosize";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { Reveal } from "react-reveal";
import ElementContact from "../img/contactMe/Elemento.svg";
//schema for validate the data for send email
const schema = yup.object({
  name: yup
    .string("O campo deve conter apenas letras")
    .required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  phone: yup.string(),
  subject: yup
    .string()
    .min(2, "o assunto deve ter no mínimo duas letras")
    .required("O assunto é obrigatório"),
  message: yup
    .string()
    .min(2, "A mensagem deve ter no mínimo duas letras")
    .required("A mensagem é obrigatória"),
});

//register the name of inputs, function from validation and function for show errors
const ContactMe = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //Send email for the destinity (my mail box)
  function sendEmail(data) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
      subject: data.subject,
      contact: data.phone,
    };
    emailjs
      .send(
        "service_i88yk2u",
        "template_j4usb0r",
        templateParams,
        "dnO6L1lAESXXK9Now"
      )
      .then(
        () => {
          Swal.fire({
            title: "Enviado!",
            text: "Seu e-mail foi enviado com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
          });
          setNameInput("");
          setEmailInput("");
          setSubjectInput("");
          setPhoneInput("");
          setMessageInput("");
        },
        (error) => {
          Swal.fire({
            title: "Erro",
            text: `Ocorreu um erro ao enviar o seu email ${error}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  }

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  return (
    <section className="contact" id={id}>
      <Reveal>
        <img
          src={ElementContact}
          alt="elemento decorativo"
          className="element-form"
        />
      </Reveal>
      <div className="light-form" />
      <Reveal>
        <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
          <h2>Contate-me</h2>
          <div className="field">
            <input
              type="text"
              className="contact-input"
              placeholder="Nome"
              {...register("name")}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            {errors.name && (
              <span className="errorMessage">{errors.name?.message}</span>
            )}
          </div>
          <div className="field">
            <input
              type="text"
              className="contact-input"
              placeholder="E-mail"
              {...register("email")}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            {errors.email && (
              <span className="errorMessage">{errors.email?.message}</span>
            )}
          </div>
          <div className="field">
            <input
              type="text"
              id=""
              className="contact-input"
              placeholder="Assunto"
              {...register("subject")}
              value={subjectInput}
              onChange={(e) => setSubjectInput(e.target.value)}
            />
            {errors.subject && (
              <span className="errorMessage msgSubject">
                {errors.subject?.message}
              </span>
            )}
          </div>
          <div className="field">
            <InputMask
              type="text"
              className="contact-input"
              placeholder="Telefone"
              mask="(99) 99999-9999"
              {...register("phone")}
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
            {errors.phone && (
              <span className="errorMessage msgSubject">
                {errors.phone?.message}
              </span>
            )}
          </div>
          <div className="field">
            <TextareaAutosize
              minRows={2}
              placeholder="Mensagem"
              {...register("message")}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            {errors.message && (
              <span className="errorMessage msgMessage">
                {errors.message?.message}
              </span>
            )}
          </div>
          <input type="submit" className="button-send" value="Enviar" />
        </form>
      </Reveal>
    </section>
  );
};

export default ContactMe;
