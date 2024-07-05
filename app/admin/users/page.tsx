"use client";
import Button from "@/app/components/button/button";
import { MdAdd, MdDelete, MdRefresh } from "react-icons/md";
import Grid from "@/app/components/grid/grid";
import Select from "@/app/components/select/select";
import { users } from "@/app/repository/filterData";
import { useState } from "react";
import Input from "@/app/components/input/input";
import { MdEdit } from "react-icons/md";
import "./styles.scss";

export default function Users() {
  const [filerBy, setFilterBy] = useState<string>();

  return (
    <div className="main-content">
      <div className="main-content-actions">
        <div className="btn-actions">
          <Button className="btn-refresh">
            <span>
              <MdRefresh className="refresh-icon" />
            </span>
          </Button>
          <Button className="btn-add">
            <span>
              <MdAdd className="add-icon" />
            </span>
          </Button>
        </div>

        <div className="search-container">
          <Input
            className="search-input"
            placeholder="Nome, E-mail ou Cpf (Apenas Números)"
          />
          <Select onChange={() => {}} className="search-select">
            <option value=""></option>
          </Select>
        </div>
      </div>

      <Grid>
        <div>
          <ul className="grid-header-items">
            <li>
              <span>Nome</span>
              <span className="email">E-mail</span>
              <span>Telefone</span>
              <span>Status</span>
              <span>Criado em</span>
              <span className="grid-header-actions">Ações</span>
            </li>
          </ul>
          <ul className="grid-list-items">
            {users.map((user) => (
              <>
                <li key={user.name}>
                  <span>{user.name}</span>
                  <span className="email">{user.email}</span>
                  <span>{user.telefone}</span>
                  <span>{user.status}</span>
                  <span>{user.createAt}</span>
                  <div className="grid-list-btn-actions">
                    <Button type="button">
                      <MdEdit />
                    </Button>
                    <Button type="button">
                      <MdDelete />
                    </Button>
                  </div>
                </li>
                <li key={user.name}>
                  <span>{user.name}</span>
                  <span className="email">{user.email}</span>
                  <span>{user.telefone}</span>
                  <span>{user.status}</span>
                  <span>{user.createAt}</span>
                  <div className="grid-list-btn-actions">
                    <Button type="button">
                      <MdEdit />
                    </Button>
                    <Button type="button">
                      <MdDelete />
                    </Button>
                  </div>
                </li>
                <li key={user.name}>
                  <span>{user.name}</span>
                  <span className="email">{user.email}</span>
                  <span>{user.telefone}</span>
                  <span>{user.status}</span>
                  <span>{user.createAt}</span>
                  <div className="grid-list-btn-actions">
                    <Button type="button">
                      <MdEdit />
                    </Button>
                    <Button type="button">
                      <MdDelete />
                    </Button>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div></div>
      </Grid>
    </div>
  );
}
