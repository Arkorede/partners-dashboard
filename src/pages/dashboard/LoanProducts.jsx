import React, { useState, useEffect } from "react";
import amigos from "./img/amigos.png";
import Checkbox1 from "./checkbox1/Checkbox1";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loan } from "../../_redux/thunks";

const LoanProducts = () => {
  const [state, setState] = useState({
    product_name: "",
    maximum_amount: "",
    maximum_duration: "",
    interest_rate: "",
    discount: "",
    discount_duration: "",
    // loan_requirements: "",
  });

  const {
    product_name,
    maximum_amount,
    maximum_duration,
    interest_rate,
    discount,
    discount_duration,
    // loan_requirements,
  } = state;

  // const { currentLoan } = useSelector((state) => state.loanReducer);

  // useEffect(() => {
  //   if (currentLoan) {
  //     alert("Loan Created");
  //   }
  // }, [currentLoan]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(
      loan(
        product_name,
        maximum_amount,
        maximum_duration,
        interest_rate,
        discount,
        discount_duration,
        // loan_requirements
      )
    );
    setState({
      product_name: "",
      maximum_amount: "",
      maximum_duration: "",
      interest_rate: "",
      discount: "",
      discount_duration: "",
      // loan_requirements: "",
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log('input');
  };

  const [showFirstDiv, setShowFirsttDiv] = useState(true);

  const handleButtonClick = () => {
    setShowFirsttDiv(false);
  };

  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate("./product");
  };

  return (
    <div className="p">
      {showFirstDiv ? (
        <div className="p-5 mt-6">
          <div className="font-bold text-[34px] leading-9 mb-8">
            Loan Products
          </div>
          <img
            src={amigos}
            alt="a person standing"
            className="mt-[183px] w-[349px] h-[346px] mx-auto"
          />
          <div className="flex flex-col justify-center items-center">
            <p className="mt-2 font-bold text-sm text-[#8A8B9F]">
              You haven’t added any loan product yet
            </p>
            <button
              className="mt-8 p-2.5 bg-[#8003CD] text-white text-xs font-bold rounded"
              onClick={handleButtonClick}
            >
              Add New Product
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5 mt-5">
          <div className="font-bold text-[34px] leading-9">Loan Products</div>
          <p className="mt-3 mb-5 font-semibold text-sm text-[#8A8B9F]">
            Fill in the details below to add a loan product
          </p>
          <div className="border border-solid border-[#E5EAEF] rounded w-[867px] h-[270px]">
            <div className="border-b p-6 flex gap-2 justify-start items-baseline">
              <p className="text-xl font-bold">Product Info</p>
              <p className="text-sm font-normal">1/3</p>
            </div>
            <form className="px-6 py-6">
              <div className="grid grid-cols-6 gap-x-[1.125rem] gap-y-5">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product-name"
                    class="text-xs font-bold leading-4"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    value={product_name}
                    onChange={handleChange}
                    id="product-name"
                    autoComplete="product-name"
                    class="block w-full font-normal placeholder:text-[#333333] placeholder:font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                    placeholder="Employee Loan"
                    aria-required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="amount"
                    className="text-xs font-bold leading-4"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    name="maximum_amount"
                    value={maximum_amount}
                    onChange={handleChange}
                    id="amount"
                    autoComplete="amount"
                    className="block w-full placeholder:text-[#333333] placeholder:font-normal font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                    placeholder="N800,000.00"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="duration"
                    className="text-xs font-bold leading-4"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    name="maximum_duration"
                    id="duration"
                    value={maximum_duration}
                    onChange={handleChange}
                    autoComplete="duration"
                    className="block w-full font-normal placeholder:text-[#333333] placeholder:font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                    placeholder="9 Months"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="interest-rate"
                    className="text-xs font-bold leading-4"
                  >
                    Interest Rate
                  </label>
                  <input
                    type="text"
                    name="interest_rate"
                    value={interest_rate}
                    onChange={handleChange}
                    id="interest-rate"
                    autoComplete="given-interest-rate"
                    placeholder="30%"
                    className="block w-full placeholder:text-[#333333] placeholder:font-normal font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="mt-8 border border-solid border-[#E5EAEF] rounded w-[867px] h-[361px]">
            <div className="border-b p-6 flex gap-2 justify-start items-baseline">
              <p className="text-xl font-bold">Clear Loan Requirements</p>
              <p className="text-sm font-normal">2/3</p>
            </div>
            <form action="#" className="p-6 mt-7 flex gap-[16.625rem]">
              <Checkbox1
                text1={"Credit Score"}
                text2={"Bank Statement"}
                text3={"Employment History"}
              />
              <input
                type="text"
                className="px-4 py-2.5 text-[10px] font-normal h-[30px] outline-none border border-[#DCDCE4] rounded"
                placeholder="Minimum Credit Score"
              />
            </form>
          </div>

          <div className="mt-8 border border-solid border-[#E5EAEF] rounded w-[867px] h-[188px]">
            <div className="border-b p-6 flex gap-2 justify-start items-baseline">
              <p className="text-xl font-bold">Discount</p>
              <p className="text-sm font-normal">3/3</p>
            </div>
            <form className="px-6 py-6">
              <div className="grid grid-cols-6 gap-x-[1.125rem] gap-y-5">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="discount" class="text-xs font-bold leading-4">
                    How many percentage discount?
                  </label>
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    value={discount}
                    onChange={handleChange}
                    autoComplete="discount"
                    class="block w-full font-normal placeholder:text-[#333333] placeholder:font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                    placeholder="10%"
                    aria-required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="duration"
                    className="text-xs font-bold leading-4"
                  >
                    Duration of discount?
                  </label>
                  <input
                    type="text"
                    name="discount_duration"
                    value={discount_duration}
                    onChange={handleChange}
                    id="duration"
                    autoComplete="duration"
                    className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-xs sm:leading-6 outline-none"
                    placeholder="Get a calendar that allows you pick duration"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mt-8 mb-8 flex justify-end w-[867px]">
            <button
              className="font-bold text-xs text-white p-2.5 bg-[#8003CD] rounded"
              // onClick={handleViewProduct}
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanProducts;
