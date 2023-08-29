import React from "react";
import DashboardHero from "./DashboardHero";
import { UilUser } from "@iconscout/react-unicons";
import OutboundRoundedIcon from "@mui/icons-material/OutboundRounded";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { PieChart } from "react-minimal-pie-chart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProgressBar from "@ramonak/react-progress-bar";
import Demogragph from "./img/demography.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "./data/Chart";
import { Label } from "recharts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Naira from "react-naira";

import { useSelector} from "react-redux";


const Dashboard = () => {

  // const data = useSelector((state)=>{
  //   return state.currentUser
  // })
  
  // console.log(data)

  return (
    <>
      {/* HEADING */}
      <div className=" h-full w-[1030px] pt-12 mx-5">
        
        <span className="normal tracking-[-0.5px] font-[700] text-[#333333] h-[36] w-[175] text-[34px] font-[Manrope]">
          Dashboard
        </span>
        <DashboardHero />
        <div className=" pl-2 container mt-[24px] flex flex-row gap-[10px] w-[1020px]">
          <div className="container relative w-[363px] h-[163px] rounded-[8px] py-[26px] px-[24px] border-[1px] border-solid border-[#E5EAEF] ">
            <div className="bg-[#F7EBFF] flex justify-center items-center h-[33px] w-[33px] rounded-full">
              <UilUser size="15" color="#8003CD" />
            </div>
            <div className="mt-8 font-[Manrope] text-[#A1A6B0] text-[10px] font-[700] ">
              Total Loan Approved
            </div>
            <div className="font-[Manrope] h-[36px] mt-[-8px] text-[#333333] font-[700] text-[30px]">
              200,000
            </div>
            <div className="flex flex-row h-[19px] gap-[5px] px-[8px] py-[4px] w-[53px] rounded-[10px] items-center justify-evenly left-[16rem] bottom-[1.5rem] absolute bg-[#EDFCF1]">
              <div className="pb-[2px]">
                <OutboundRoundedIcon
                  style={{
                    fontSize: "9px",
                    color: "#42BE65",
                  }}
                />
              </div>
              <div className="text-[#42BE65] text-[8px] font-[Manrope]">
                5,18%
              </div>
            </div>
          </div>
          <div className="container relative w-[363px] h-[163px] rounded-[8px] py-[26px] px-[24px] border-[1px] border-solid border-[#E5EAEF] ">
            <div className="bg-[#F7EBFF] flex justify-center items-center h-[33px] w-[33px] rounded-full">
              <ShowChartIcon
                style={{
                  fontSize: "15px",
                  color: "#8003CD",
                  border: "2px solid #8003CD",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="mt-8 font-[Manrope] text-[#A1A6B0] text-[10px] font-[700] ">
              Total Loan Overdue
            </div>
            <div className="font-[Manrope] h-[36px] mt-[-8px] text-[#333333] font-[700] text-[30px]">
              172
            </div>
            <div className="flex flex-row h-[19px] gap-[5px] px-[8px] py-[4px] w-[53px] rounded-[10px] items-center justify-evenly left-[16rem] bottom-[1.5rem] absolute bg-[#EDFCF1]">
              <div className="pb-[2px]">
                <OutboundRoundedIcon
                  style={{
                    fontSize: "9px",
                    color: "#42BE65",
                  }}
                />
              </div>
              <div className="text-[#42BE65] text-[8px] font-[Manrope] ">
                5,18%
              </div>
            </div>
          </div>
          <div className="container relative w-[363px] h-[163px] rounded-[8px] py-[26px] px-[24px] border-[1px] border-solid border-[#E5EAEF] ">
            <div className="bg-[#F7EBFF] flex justify-center items-center text-[#8003CD] h-[33px] w-[33px] rounded-full">
              &#8358;
            </div>
            <div className="mt-8 font-[Manrope] text-[#A1A6B0] text-[10px] font-[700] ">
              Total Loan Disbursed
            </div>
            <div className="font-[Manrope] h-[36px] mt-[-8px] text-[#333333] font-[700] text-[30px]">
              20,000,000
            </div>
            <div className="flex flex-row h-[19px] gap-[5px] px-[8px] py-[4px] w-[53px] rounded-[10px] items-center justify-evenly left-[16rem] bottom-[1.5rem] absolute bg-[#EDFCF1]">
              <div className="pb-[2px]">
                <OutboundRoundedIcon
                  style={{
                    fontSize: "9px",
                    color: "#42BE65",
                  }}
                />
              </div>
              <div className="text-[#42BE65]  text-[8px] font-[Manrope] ">
                5,18%
              </div>
            </div>
          </div>
        </div>

        {/* SECTION-2 */}
        <div className="flex flex-row mx-[8px]justify-evenly gap-[1rem] mt-[24px]">
          <div className="w-[665px] h-[328px]  border-[1px] border-solid border-[#E5EAEF] rounded-[8px] ">
            <div className=" flex gap-[20rem] px-[16px] py-[20px] ">
              <div className="font-[manrope] font-[700]  text-[18px]  text-[#333333]">
                Loan Income
              </div>
              <div className="flex flex-row justify-center items-center h-[38px] w-[134px] rounded-[5px] bg-[#F2F3F4] ">
                <div>This Month</div>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className=" h-[300px] ">
              <Chart />
            </div>
          </div>
          <div className=" flex flex-col items-center  w-[448px] h-[328px] border-[1px] rounded-[8px] border-solid border-[#E5EAEF] ">
            <div className=" flex gap-[12rem] px-[16px] py-[20px] ">
              <div className="font-[manrope] font-[700]  text-[18px] text-[#333333]">
                Conversion Rate
              </div>
              <div>
                <MoreHorizIcon
                  style={{
                    fontSize: "25px",
                    color: "#F2F3F4",
                  }}
                />
              </div>
            </div>
            <div style={{ width: "194px", height: "194px" }}>
              <CircularProgressbarWithChildren
                text="47%"
                value={67}
                styles={buildStyles({
                  rotation: 0,
                  strokeLinecap: "round",
                  textSize: "15px",
                  pathTransitionDuration: 0.5,
                  pathColor: "#8003CD",
                  textColor: " #FFFFFF",
                  trailColor: "#F5E6FF",
                  fill: "#8003CD",
                })}
              >
                <div className="-z-10  w-[86px] h-[86px] bg-[#8003CD] rounded-full"></div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[20px] mt-[24px] px-[8px]  ">
          <div className=" h-[328px] w-[448px] rounded-[8px] border-[1px] border-solid border-[#E5EAEF] ">
            <div className=" flex justify-between px-[16px] py-[20px] ">
              <div className="font-[manrope] font-[700]  text-[18px] text-[#333333]">
                Overall Progress
              </div>
              <div>
                <MoreHorizIcon
                  style={{
                    fontSize: "25px",
                    color: " #F2F3F4",
                  }}
                />
              </div>
            </div>
            <div className=" h-[172px] w-[100%] justify-center">
              <PieChart
                data={[
                  { title: "green", value: 50, color: "#42BE65" },
                  { title: "purple", value: 50, color: "#8003CD" },
                  { title: "orange", value: 50, color: "#FF3A29" },
                ]}
              />
            </div>
            <div className="flex justify-evenly mt-[26px]">
              <div className="flex justify-center items-center gap-[6px]">
                <div className="rounded-full bg-[#42BE65] w-[14px] h-[14px]"></div>
                <div>Completed</div>
              </div>
              <div className="flex justify-center items-center gap-[6px]">
                <div className="rounded-full bg-[#8003CD] w-[14px] h-[14px]"></div>
                <div>Active</div>
              </div>
              <div className="flex justify-center items-center gap-[6px]">
                <div className="rounded-full bg-[#FF3A29] w-[14px] h-[14px]"></div>
                <div>Overdue</div>
              </div>
            </div>
          </div>
          <div className="h-[328px] w-[277px]  px-[16px] py-[20px] rounded-[8px] border-[1px] border-solid border-[#E5EAEF]">
            <div className=" flex justify-between  pb-[20px] ">
              <div className="font-[Manrope] font-[700]  text-[18px] text-[#333333]">
                Loan Types
              </div>
              <div>
                <MoreHorizIcon
                  style={{
                    fontSize: "25px",
                    color: "#F2F3F4",
                  }}
                />
              </div>
            </div>
            <div className="mb-[24px]">
              <div className="flex justify-between mb-[6px]">
                <div className="text-[12px] font-[Manrope] font-[700] text-[#333333]">
                  Personal Loans
                </div>
                <div className="text-[12px] font-[Manrope] font-[500] text-[#FFB200] ">
                  65,376
                </div>
              </div>
              <ProgressBar
                bgColor="#FFB200"
                baseBgColor="#FFF5CC"
                completed={70}
                height="8px"
                width="245px"
                labelColor="#FFB200"
                borderRadius="72px"
              />
            </div>
            <div className="mb-[24px]">
              <div className="flex justify-between mb-[6px]">
                <div className="text-[12px] font-[Manrope] font-[700] text-[#333333]">
                  Business Loans Loans
                </div>
                <div className="text-[12px] font-[Manrope] font-[500] text-[#4339F2] ">
                  12,109
                </div>
              </div>
              <ProgressBar
                bgColor="#4339F2"
                baseBgColor=" #DAD7FE"
                completed={60}
                height="8px"
                width="245px"
                borderRadius="72px"
                labelColor="#4339F2"
              />
            </div>
            <div className="mb-[24px]">
              <div className="flex justify-between mb-[6px]">
                <div className="text-[12px] font-[Manrope] font-[700] text-[#333333]">
                  Twitter
                </div>
                <div className="text-[12px] font-[Manrope] font-[500] text-[#02A0FC] ">
                  132,645
                </div>
              </div>
              <ProgressBar
                bgColor="#02A0FC"
                baseBgColor="#CCF8FE"
                completed={80}
                height="8px"
                width="245px"
                borderRadius="72px"
                labelColor="#02A0FC"
                // isLabelVisible
              />
            </div>
            <div className="">
              <div className="flex justify-between mb-[6px]">
                <div className="text-[12px] font-[Manrope] font-[700] text-[#333333]">
                  Twitter
                </div>
                <div className="text-[12px] font-[Manrope] font-[500] text-[#02A0FC] ">
                  132,645
                </div>
              </div>
              <ProgressBar
                bgColor="#02A0FC"
                baseBgColor="#CCF8FE"
                completed={80}
                height="8px"
                width="245px"
                borderRadius="72px"
                labelColor="#02A0FC"
              />
            </div>
          </div>
          <div className=" h-[328px] w-[364px] rounded-[8px] border-[1px] border-solid border-[#E5EAEF] ">
            <div className=" flex justify-between px-[16px] py-[20px] ">
              <div className="font-[manrope] font-[700]  text-[18px] text-[#333333]">
                Demography
              </div>
              <div>
                <MoreHorizIcon
                  style={{
                    fontSize: "25px",
                    color: " #F2F3F4",
                  }}
                />
              </div>
            </div>

            <img
              className="h-[172px] w-[100%] px-[12px]"
              alt="demograph"
              src={Demogragph}
            ></img>

            <div className="flex justify-evenly mt-[26px]">
              <div className="flex justify-center items-center gap-[6px]">
                <div className="rounded-full bg-[#42BE65] w-[14px] h-[14px]"></div>
                <div>Completed</div>
              </div>
              <div className="flex justify-center items-center gap-[6px]">
                <div className="rounded-full bg-[#8003CD] w-[14px] h-[14px]"></div>
                <div>Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
