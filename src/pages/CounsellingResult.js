import React from "react";
import Role from "../assets/role-icon.png";
import Stream from "../assets/stream-icon.png";
import Exam from "../assets/exam-icon.png";
import Card from "../utils/Card";
import Button from "../utils/Button";

const CounsellingResult = () => {
  // format of API responset
  // inme se koi bhi value empty ho sakti hai. so use Nullish Coalescing ('??') and conditional chaining (streams?.name)
  const CounsellingResult = {
    streams: [
      {
        name: "Physics, Chem, Maths",
        reason: "Because you like maths and problem solving",
      },
      {
        name: "Commerce, Maths",
        reason: "Since you like maths and want to do business",
      },
    ],
    degrees: {
      underGraduate: [
        {
          name: "Bachelor of Science in Mathematics",
          reason: "you can use your math skills to become a mathematician",
        },
        {
          name: "Bachelor of Business Administration",
          reason: "Since you want to do business",
        },
      ],
      postGraducate: [
        {
          name: "Master of Science in Mathematics",
          reason:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, dolore!",
        },
        {
          name: "Master of Business Administration",
          reason:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi.",
        },
      ],
    },
    universities: [
      {
        name: "Delhi Technological University",
        image: "https://static.theprint.in/wp-content/uploads/2020/08/DTU.jpeg",
      },
      {
        name: "IIT Bombay",
        image:
          "https://static.zollege.in/public/college_data/images/appImage/1646910962banner2.jpg?tr=h-250,w-400,c-force",
      },
      {
        name: "Delhi University",
        image:
          "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/26/a385f468490c9cf096c6ffc2f57349e41672078981528575_original.png",
      },
      {
        name: "IIT Delhi",
        image:
          "https://static.toiimg.com/thumb/resizemode-4,width-1280,msid-58944050/58944050.jpg",
      },
    ],
    careers: ["Mathematician", "Business"],
    competitiveExams: ["CUET", "GATE"],
  };

  return (
    <>
      <div>
        <h2 className="title">Result</h2>
        <h3 className="text-center font-montserrat mt-8 mb-3">Submitted !</h3>
        {/* Progress */}
        <div className="flex justify-center h-4">
          <div className="progress"></div>
        </div>
        {/* Result */}
        <div className="bg-[#111C25] w-11/12 md:w-10/12 mx-auto my-3 py-14 px-10 md:px-16 rounded-3xl">
          {/* stream and role */}
          <div className="flex flex-col gap-4 md:flex md:flex-row md:flex-wrap md:justify-between">
            <div className="flex items-center md:border-r">
              <img src={Stream} alt="stream" className="md:w-16 w-12" />
              <span className="mx-3 md:text-xl font-bold">
                {CounsellingResult.streams.map((e, i) => {
                  return (
                    <span className="block">
                      {i + 1}. {e.name}
                    </span>
                  );
                })}
              </span>
            </div>
            <div className="flex items-center md:border-r">
              <img
                src={Role}
                alt="stream"
                width={60}
                className="md:w-16 w-12"
              />
              <span className="mx-3 md:text-xl font-bold">
                {CounsellingResult.careers.map((e, i) => {
                  return e + ", ";
                })}
              </span>
            </div>
            <div className="flex items-center">
              <img
                src={Exam}
                alt="stream"
                width={60}
                className="md:w-16 w-12"
              />
              <span className="mx-3 md:text-xl font-bold">
                {CounsellingResult.competitiveExams.map((e, i) => {
                  return e + ", ";
                })}
              </span>
            </div>
          </div>
          {/* university courses */}
          <div className="md:text-2xl overflow-x-scroll md:overflow-hidden md:m-10">
            <div
              className="bg-white"
              style={{ height: "1px", opacity: "10%" }}
            />
            <table className="table-auto md:mx-auto shrink">
              <caption class="caption-top text-lg my-3 underline">
                Some University courses you can consider!
              </caption>

              <thead>
                <tr className="border-2 bg-[#FFC803] text-black">
                  <th className="border-2 p-6">Undergraduate</th>
                  <th className="border-2 p-6">Postgraduate</th>
                </tr>
              </thead>
              <tbody>
                {CounsellingResult.degrees.underGraduate.map((ele, index) => {
                  return (
                    <tr className="border-2">
                      <td className="border-2 p-6">{ele.name}</td>
                      <td className="border-2 p-6">
                        {CounsellingResult.degrees.postGraducate[index]?.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* university cards */}
          <div className="bg-white" style={{ height: "1px", opacity: "10%" }} />
          <div className="flex justify-around my-10 flex-wrap gap-5">
            {CounsellingResult.universities.map((ele, index) => {
              return <Card image={ele.image} name={ele.name} />;
            })}
          </div>
          {/* Reasoning */}
          <div className="bg-white" style={{ height: "1px", opacity: "10%" }} />
          <div className="my-10">
            <span className="md:underline block my-4 text-xl md:text-2xl">
              Why we Suggested you this path or career ?
            </span>
            <div className="px-4 py-2 font-semibold md:text-xl bg-white text-black rounded-2xl">
              <span>
                As per your response in form we figured out that you should
                choose following carrer path because of following reasons:
              </span>
              <div className="">
                <span className="underline font-bold">Streams:</span>{" "}
                {CounsellingResult.streams.map((e) => {
                  return (
                    <span className="block">
                      {e.name + "->"} <span className="italic">{e.reason}</span>
                    </span>
                  );
                })}
              </div>
              <div className="">
                <span className="underline font-bold">Degrees:</span>{" "}
                {CounsellingResult.degrees.underGraduate.map((e, index) => {
                  return (
                    <>
                      <span className="block">
                        {e.name + "->"}{" "}
                        <span className="italic">{e.reason}</span>
                      </span>
                      <span className="block">
                        {CounsellingResult.degrees.postGraducate[index]?.name +
                          "->"}{" "}
                        <span className="italic">
                          {
                            CounsellingResult.degrees.postGraducate[index]
                              ?.reason
                          }
                        </span>
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="btn flex justify-between gap-1">
            <Button fontSize="15px">Take Quiz Again</Button>
            <Button fontSize="15px">Go to Roadmap</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounsellingResult;