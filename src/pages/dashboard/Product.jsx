import React, { useState } from "react";
import arrowDown from "./img/arrowDown.png";
import closeModal from "./img/closeModal.png";
import edit from "./img/edit.png";
import statusUp from "./img/statusUp.png";
import redTrash from "./img/redTrash.png";
import tickCircle from "./img/tickCircle.png";
import DataTable from "react-data-table-component";
import Checkbox3 from "./checkbox3/Checkbox3";
import TripleItem3 from "./dropdown/TripleItem3";
import PartnerModal from "./modal/PartnerModal";
import { useSelector } from 'react-redux';


export default function Product() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);


  // const { listLoan } = useSelector((state) => state.loanReducer);
  // console.log(listLoan)

  // const clicked = () => {
  //   setModalOn(true);
  // };

  const handleProceedClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "73px",
      },
    },

    headCells: {
      style: {
        fontWeight: 700,
        fontSize: "0.875rem",
        color: "#8A8B9F",
      },
    },
  };
  const columns = [
    {
      name: "Product Name",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.productName}</div>
      ),
      width: "288px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.amount}</div>
      ),
      width: "156px",
    },
    {
      name: "Duration",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.duration}</div>
      ),
      width: "139px",
    },
    {
      name: "C.S",
      selector: (row) => (
        <div className="text-sm font-semibold text-[#42BE65]">{row.cs}</div>
      ),
      width: "88px",
    },
    {
      name: "Date",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.date}</div>
      ),
      width: "99px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="flex items-center justify-center gap-[55px]">
          <div className="flex items-center justify-center gap-2 px-4 py-1 bg-[#C2FED3] rounded-[1.875rem]">
            <div className="w-1.5 h-1.5 bg-[#42BE65] rounded-full"></div>
            <div className="text-[0.625rem] font-semibold">{row.status}</div>
          </div>
          <TripleItem3
            img1={edit}
            img2={statusUp}
            img3={redTrash}
            button1={"Edit Product"}
            button2={"View Performance"}
            button3={"Delete"}
          />
        </div>
      ),
      width: "200px",
    },
  ];

  const data = [
    {
      id: 1,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "3 Months",
      cs: 750,
      date: "9/27/22",
      status: "Active",
    },
    {
      id: 2,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "6 Months",
      cs: 750,
      date: "9/27/22",
      status: "Active",
    },
    {
      id: 3,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "12 Months",
      cs: 750,
      date: "9/27/22",
      status: "Active",
    },
    {
      id: 4,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "3 Months",
      cs: 750,
      date: "9/27/22",
      status: "Active",
    },
    {
      id: 5,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "6 Months",
      cs: 750,
      date: "9/27/22",
      status: "active",
    },
    {
      id: 6,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "15 Months",
      cs: 750,
      date: "9/27/22",
      status: "active",
    },
    {
      id: 7,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "9 Months",
      cs: 750,
      date: "9/27/22",
      status: "Active",
    },
    {
      id: 8,
      productName: "Low income earners loan",
      amount: "₦ 1,500,000.00",
      duration: "12 Months",
      cs: 750,
      date: "9/27/22",
      status: "Active",
    },
  ];

  return (
    <div className="p-5 mt-7">
      <div className="font-bold text-[34px] leading-9 mb-8">Loan Products</div>
      {/* LOAN REQUESTED TABLE */}
      <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-[36px] mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <div className="flex items-center justify-center gap-[0.9375rem]">
            <p className="text-sm font-bold text-[#8A8B9F]">New Product</p>
            <p className="text-[0.625rem] font-bold px-2.5 py-px rounded-[1.125rem] bg-[#ECECEC]">
              48 products
            </p>
          </div>
          <button className="flex gap-2.5 border p-2 border-black rounded">
            <p className="text-xs font-bold">Bulk actions</p>
            <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
          </button>
        </div>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          striped
          selectableRows
          selectableRowsComponent={Checkbox3}
          responsive
        />
      </div>
      {modalOn && (
        <PartnerModal setModalOn={setModalOn} setChoice={setChoice} />
      )}
      {choice && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-[#17191C66] bg-opacity-40 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
                <div className="bg-white w-[1020px] h-[590px]">
                  <div className="flex h-[40px] bg-[#F6F6F6] p-6 justify-between items-center">
                    <p className="font-bold text-sm">Add Partners</p>
                    <button className="" onClick={handleCancelClick}>
                      <img
                        src={closeModal}
                        alt=" close icon"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 pl-8 pr-[60px] mt-[50px]">
                    <div className="col-span-1 flex flex-col gap-10">
                      <div className="flex gap-4">
                        <img
                          src={tickCircle}
                          alt="tick-circle"
                          className="w-6 h-6"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(19%) sepia(70%) saturate(4770%) hue-rotate(273deg) brightness(76%) contrast(124%)",
                            opacity: 0.5,
                          }}
                        />
                        <div className="flex flex-col gap-px">
                          <p className="font-semibold text-xs text-[#8003CD] text-opacity-50">
                            General Information
                          </p>
                          <p className="font-semibold text-xs text-[#8A8B9F] text-opacity-50">
                            Provide basic information about company
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <img
                          src={tickCircle}
                          alt="tick-circle"
                          className="w-6 h-6"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(19%) sepia(70%) saturate(4770%) hue-rotate(273deg) brightness(76%) contrast(124%)",
                          }}
                        />
                        <div className="flex flex-col gap-px">
                          <p className="font-semibold text-xs text-[#8003CD]">
                            Business Information
                          </p>
                          <p className="font-semibold text-xs text-[#8A8B9F]">
                            Provide basic information about company
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <img
                          src={tickCircle}
                          alt="tick-circle"
                          className="w-6 h-6"
                        />
                        <div className="flex flex-col gap-px">
                          <p className="font-semibold text-xs text-[#8A8B9F]">
                            Invite a team member
                          </p>
                          <p className="font-semibold text-xs text-[#8A8B9F]">
                            Provide basic information about company
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 ml-[65px]">
                      <form
                        action="#"
                        method="POST"
                        className=""
                        // onSubmit={handleProceedClick}
                      >
                        <div className="">
                          <div className="">
                            <div className="grid grid-cols-6 gap-4">
                              <div className="col-span-6">
                                <label
                                  htmlFor="street-address"
                                  className="text-xs font-bold leading-4"
                                >
                                  Business Registration Number
                                </label>
                                <input
                                  type="text"
                                  name="full-name"
                                  id="full-name"
                                  autoComplete=""
                                  className="block w-[375px] font-normal rounded border border-solid border-[#DCDCE4] py-1.5 text-sm sm:leading-6 outline-none"
                                  required
                                />
                              </div>
                            </div>

                            <div className="mt-6">
                              <p className="text-xs font-bold leading-4">
                                C.A.C Upload
                              </p>
                              <div className="flex flex-col justify-center items-center gap-2 w-[375px] h-[127px] border border-dashed border-[#DCDCE4] mt-px">
                                <p className="font-bold text-sm text-[#8A8B9F]">
                                  Drag & Drop
                                </p>
                                <div className="flex items-center justify-center">
                                  <p className="text-xs font-semibold">
                                    Your files here or
                                  </p>
                                  <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer pl-1 text-xs font-semibold text-[#8003CD] focus-within:outline-none leading-[20px]"
                                  >
                                    <span>browse</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6">
                              <p className="text-xs font-bold leading-4">
                                Company License Upload
                              </p>
                              <div className="flex flex-col justify-center items-center gap-2 w-[375px] h-[127px] border border-dashed border-[#DCDCE4] mt-px">
                                <p className="font-bold text-sm text-[#8A8B9F]">
                                  Drag & Drop
                                </p>
                                <div className="flex items-center justify-center">
                                  <p className="text-xs font-semibold">
                                    Your files here or
                                  </p>
                                  <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer pl-1 text-xs font-semibold text-[#8003CD] focus-within:outline-none leading-[20px]"
                                  >
                                    <span>browse</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="flex h-[40px] bg-[#F6F6F6] p-6 justify-between mt-[46px] justify-center items-center">
                    <button
                      className="p-1.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                    <button
                      className="p-1.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                      type="submit"
                      onClick={handleProceedClick}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
