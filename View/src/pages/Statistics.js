import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../assets/AgencyDashboard.css";

const Statistics = () => {
  return (
    <Container className="mt-5 min-vh-100">
      <Row>
        <h5 className="mb-4">الإحصائيات لهذا الشهر</h5>
        <Col className="pointer-event">
          <div class="card info-card revenue-card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots"></i>
              </a>
            </div>

            <div class="card-body">
              <h5 class="card-title">
                الأرباح <span>| هذا الشهر</span>
              </h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-currency-dollar"></i>
                </div>
                <div class="ps-3">
                  <h6>3245 دأ</h6>
                  <span class="text-success small pt-1 fw-bold">8%</span>{" "}
                  <span class="text-muted small pt-2 ps-1">بازدياد </span>
                  <span class="text-muted small pt-2 ps-1 ">
                    مقارنة بمارس 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card info-card revenue-card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots"></i>
              </a>
            </div>

            <div class="card-body">
              <h5 class="card-title">
                التعليقات <span>| هذا الشهر</span>
              </h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-currency-dollar"></i>
                </div>
                <div class="ps-3">
                  <h6>3245 دأ</h6>
                  <span class="text-success small pt-1 fw-bold">8%</span>{" "}
                  <span class="text-muted small pt-2 ps-1">بازدياد </span>
                  <span class="text-muted small pt-2 ps-1 ">
                    مقارنة بمارس 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card info-card revenue-card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots"></i>
              </a>
            </div>

            <div class="card-body">
              <h5 class="card-title">
                المستخدمين <span>| هذا الشهر</span>
              </h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-currency-dollar"></i>
                </div>
                <div class="ps-3">
                  <h6>3245 دأ</h6>
                  <span class="text-success small pt-1 fw-bold">8%</span>{" "}
                  <span class="text-muted small pt-2 ps-1">بازدياد </span>
                  <span class="text-muted small pt-2 ps-1 ">
                    مقارنة بمارس 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Statistics;
