"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { useSolutionTabs } from "@/hooks/useSolutionTabs";
import "@/styles/solution-tabs.css";
import Image from "next/image";
export default function SolutionTabsSection() {
  const ref = useRef<HTMLDivElement>(null);
  useSolutionTabs(ref);

  return (
    <div className="merged-section" id="section-5" ref={ref}>
      <section className="sec">
        <span className="pill">
          ONE SOLUTION
        </span>
        <h1>
          From Conversation to Care, From Data to Decisions.
        </h1>
        <div className="tabs" role="tablist" id="sec5-tabs">
          <div className="ind" id="sec5-ind"></div>
          <button className="tab" role="tab" aria-selected="true">
            Configurable EMR
          </button>
          {" "}
          <button className="tab" role="tab" aria-selected="false">
            Appointment & Scheduling
          </button>
          {" "}
          <button className="tab" role="tab" aria-selected="false">
            Patient Engagement
          </button>
        </div>
        <div className="card">
          <div className="panel on" role="tabpanel">
            <h2>
              Comprehensive Clinical Documentation & EMR Management
            </h2>
            <ul>
              <li>
                <i></i>
                Configurable SOAP Notes & Templates
              </li>
              <li>
                <i></i>
                Doctor EMR, Nurse EMR & Personalized Care Plans
              </li>
              <li>
                <i></i>
                Specialty-wise EMR Configuration
              </li>
              <li>
                <i></i>
                Copy Previous Clinical Data & Comparative Clinical Analysis
              </li>
            </ul>
            <button className="try">
              Try Now
            </button>
            <div className="right">
              <p className="dr d-none">
                Dr. Anusheel Singh
              </p>
              <div className="frame d-none">
                <div className="inner">
                  <h4>
                    Total revenue for today
                  </h4>
                  <div className="rev">
                    <div className="donut" id="sec5-donut">
                      <svg viewBox="0 0 128 128">
                        <g transform="rotate(0 64 64)">
                          <circle className="y" cx="64" cy="64" r="55" pathLength="100" strokeDasharray="0 100" id="sec5-cy" />
                          <circle className="b" cx="64" cy="64" r="55" pathLength="100" strokeDasharray="0 100" id="sec5-cb" />
                        </g>
                      </svg>
                      <div className="mid" id="sec5-mid">
                        <span id="sec5-midt">
                          ₹ 0
                        </span>
                      </div>
                    </div>
                    <div className="leg">
                      <div data-k="y" style={{ "--c": "#f0ab0d" } as CSSProperties}>
                        <b className="l">
                          Cash:
                          {" "}
                          <strong>
                            175
                          </strong>
                          {" "}
                          times
                        </b>
                        <p className="dn">
                          ↓
                          {" "}
                          <span style={{ color: "#5a6a85" } as CSSProperties}>
                            down by 13%
                          </span>
                        </p>
                      </div>
                      <div data-k="b" style={{ "--c": "#1f87ff" } as CSSProperties}>
                        <b className="l">
                          Online:
                          {" "}
                          <strong>
                            70
                          </strong>
                          {" "}
                          times
                        </b>
                        <p className="up">
                          ↑
                          {" "}
                          <span style={{ color: "#5a6a85" } as CSSProperties}>
                            up by 13%
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/Images/Clinical_Notes_EMR.svg" alt="Akhil Systems logo" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            </div>
            
          </div>
          <div className="panel" role="tabpanel">
            <h2>
              Patient Engagement & Follow-Up Management
            </h2>
            <ul>
              <li>
                <i></i>
                Patient Follow-Up & Easy Follow-Up through Doctor App
              </li>
              <li>
                <i></i>
                Patient Engagement and Communication
              </li>
              <li>
                <i></i>
                WhatsApp-Based Patient Communication
              </li>
              <li>
                <i></i>
                Email and SMS Notification
              </li>
            </ul>
            <button className="try">
              Try Now
            </button>
            <div className="right">
              <p className="dr d-none">
                Dr. Anusheel Singh
              </p>
              <div className="frame d-none">
                <div className="inner">
                  <h4>
                    Appointments today
                  </h4>
                  <div className="big" data-n="48">
                    0
                  </div>
                  <div className="bars">
                    <div className="bar" style={{ "--c": "#1ea85a", "--w": "67%" } as CSSProperties}>
                      <div>
                        <span style={{ all: "unset" } as CSSProperties}>
                          Confirmed
                        </span>
                        <b>
                          32
                        </b>
                      </div>
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div className="bar" style={{ "--c": "#f0ab0d", "--w": "21%" } as CSSProperties}>
                      <div>
                        <span style={{ all: "unset" } as CSSProperties}>
                          Waiting
                        </span>
                        <b>
                          10
                        </b>
                      </div>
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div className="bar" style={{ "--c": "#e0364a", "--w": "12%" } as CSSProperties}>
                      <div>
                        <span style={{ all: "unset" } as CSSProperties}>
                          Cancelled
                        </span>
                        <b>
                          6
                        </b>
                      </div>
                      <span>
                        <i></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/Images/Pastel_Clinic_Appointment.svg" alt="Akhil Systems logo" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            </div>
          </div>
          <div className="panel" role="tabpanel">
            <h2>
              Smart Appointment Scheduling & Management
            </h2>
            <ul>
              <li>
                <i></i>
                Online Appointment Booking & Appointment Management for <br/> Multiple Consultations
              </li>
              <li>
                <i></i>
                Easy Scheduling Through Doctor App
              </li>
              <li>
                <i></i>
                Doctor Availability and Schedule Management
              </li>
              <li>
                <i></i>
                Patient Follow-Up Appointment Booking
              </li>
            </ul>
            <button className="try">
              Try Now
            </button>
            <div className="right">
              <p className="dr d-none">
                Dr. Anusheel Singh
              </p>
              <div className="frame d-none">
                <div className="inner">
                  <h4>
                    Patient engagement this month
                  </h4>
                  <div className="big" data-n="82" data-s="%">
                    0
                  </div>
                  <div className="bars">
                    <div className="bar" style={{ "--c": "#1f87ff", "--w": "82%" } as CSSProperties}>
                      <div>
                        <span style={{ all: "unset" } as CSSProperties}>
                          App usage
                        </span>
                        <b>
                          82%
                        </b>
                      </div>
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div className="bar" style={{ "--c": "#8a5cf0", "--w": "91%" } as CSSProperties}>
                      <div>
                        <span style={{ all: "unset" } as CSSProperties}>
                          Reminders read
                        </span>
                        <b>
                          91%
                        </b>
                      </div>
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div className="bar" style={{ "--c": "#f0ab0d", "--w": "64%" } as CSSProperties}>
                      <div>
                        <span style={{ all: "unset" } as CSSProperties}>
                          Feedback given
                        </span>
                        <b>
                          64%
                        </b>
                      </div>
                      <span>
                        <i></i>
                      </span>
                    </div>
                  </div>
                </div>                
              </div>
              <Image src="/Images/Appointments_Scheduling.svg" alt="Akhil Systems logo" width={0} height={0} style={{ width: "auto", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
