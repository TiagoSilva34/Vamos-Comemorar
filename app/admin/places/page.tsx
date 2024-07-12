"use client";
import Button from "@/app/components/button/button";
import {
  MdAdd,
  MdDelete,
  MdRefresh,
  MdEdit,
  MdArrowLeft,
  MdArrowRight,
} from "react-icons/md";
import Grid from "@/app/components/grid/grid";
import Select from "@/app/components/select/select";
import { places } from "@/app/repository/filterData";
import "./styles.scss";

export default function Places() {
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
      </div>
      <h1 className="update-title">ATUALIZADO EM: 10/07/2024 10:38</h1>
      <Grid>
        <div>
          <ul className="grid-header-items">
            <li>
              <span>Logo</span>
              <span>V.</span>
              <span>Nome</span>
              <span className="email">E-mail</span>
              <span>Ranking</span>
              <span>Status</span>
              <span className="grid-header-actions">Ações</span>
            </li>
          </ul>
          <ul className="grid-list-items">
            {places.map((place) => (
              <>
                <li key={place.name}>
                  <span>
                    <img src="" alt="" />
                  </span>
                  <span>{place.v}</span>
                  <span>{place.name}</span>
                  <span className="email">{place.email}</span>
                  <span>{place.ranking}</span>
                  <span>{place.status}</span>
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
        <div className="pagination">
          <ul className="pagination-list">
            <li>
              <MdArrowLeft className="arrowLeft" />
            </li>
            <li className="pagination-item active">1</li>
            <li className="pagination-item">2</li>
            <li className="pagination-item">3</li>
            <li>
              <MdArrowRight className="arrowRight" />
            </li>
          </ul>
          <Select className="items-per-page">
            <option value="">10</option>
          </Select>
        </div>
      </Grid>
    </div>
  );
}
