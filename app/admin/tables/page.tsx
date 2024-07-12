"use client";
import Button from "@/app/components/button/button";
import { MdAdd, MdDelete, MdRefresh, MdEdit, MdArrowLeft, MdArrowRight } from "react-icons/md";
import Grid from "@/app/components/grid/grid";
import Select from "@/app/components/select/select";
import { tables } from "@/app/repository/filterData";
import "./styles.scss";

export default function Tables() {
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

      <Grid>
        <div>
          <ul className="grid-header-items">
            <li>
              <span>Avatar</span>
              <span>Nome</span>
              <span>Preço</span>
              <span>Externa</span>
              <span>Local</span>
              <span className="grid-header-actions">Ações</span>
            </li>
          </ul>
          <ul className="grid-list-items">
            {tables.map((table) => (
              <>
                <li key={table.name}>
                  <span><span className="avatar">VC</span></span>
                  <span>{table.avatar}</span>
                  <span >{table.name}</span>
                  <span>{table.preço}</span>
                  <span>{table.externa}</span>
                  <span>{table.local}</span>
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
              <li><MdArrowLeft className="arrowLeft"/></li>
              <li className="pagination-item active">1</li>
              <li className="pagination-item">2</li>
              <li className="pagination-item">3</li>
              <li><MdArrowRight className="arrowRight" /></li>
            </ul>
            <Select className="items-per-page">
                <option value="">10</option>
            </Select>
        </div>
      </Grid>
    </div>
  );
}
