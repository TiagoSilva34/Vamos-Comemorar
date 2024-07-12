"use client";

import Banner from "@/app/components/banner/banner";
import Image from "next/image";
import imgBanner from "@/app/assets/banner01.webp";
import Form from "@/app/components/form/form";
import logoWhite from "@/app/assets/logo_white.png";
import Link from "next/link";
import Input from "../components/input/input";
import Button from "../components/button/button";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";
import { validateEmail } from "../utils/validations";
import "./styles.scss";
import { login, validateToken } from "../services/app.servcies";
import { ILogin } from "./interface";
import { useRouter } from "next/navigation";
import { access } from "fs";

export default function Login() {
  const [show, setShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<any>(undefined)

  const router = useRouter()

  const onClickLogin = () => {
    debugger
    const creds: ILogin = {
      access: email,
      password: password
    }

    if (creds.access.length && creds.password.length) 
    login(creds).then((response) => {
        if (creds.access === 'Admin@vamoscomemorar.com.br' && creds.password === 'Admin@123') {
          localStorage.setItem('authenticated', JSON.stringify(response))
          validateToken(response.token)
          router.push('/admin')
        }
    })
  }

  const emailIsValid = useCallback((value: string) => {
    setEmail(value)

    if (validateEmail(email)) setIsValid(true)
    else setIsValid(false)
  }, [email])

  return (
    <div className="container">
      {openModal && <div>Aqui vai o modal de troca de senha</div>}
      <Banner id="banner-container" className="banner-container">
        <Image src={imgBanner} alt="Logo banner" style={{ width: "100%" }} />
      </Banner>

      <div className="login">
        <div className="form-container">
          <Link href="/">
            <Image
              src={logoWhite}
              alt="Logo"
              style={{ margin: "0 auto", padding: "1rem" }}
            />
          </Link>
          <Form id="form-login" className="form-login">
            <div className="input-container">
              <Input
                placeholder="Email / CPF"
                type="email"
                id="cpf"
                className="cpf"
                onChange={(event: any) => emailIsValid(event)}
                value={email}
              />
              <Input
                placeholder="Senha"
                type="text"
                id="password"
                className="password"
                onChange={setPassword}
                value={password}
              />
              {show && <MdVisibility onClick={() => setShow(true)} />}
              {!show && <MdVisibilityOff onClick={() => setShow(false)} />}
              <small>0 / 15</small>
              <Link href="#" onClick={() => setOpenModal(true)}>
                ESQUECEU SUA SENHA?
              </Link>
            </div>

            <Button type="button" className="btn-login" onClick={onClickLogin}>
              ENTRAR
            </Button>
            <div className="title">
              <p>
                Ainda não tem uma conta? <Link href="/register">Cadastrar</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
