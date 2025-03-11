"use client";
import { Button, Typography, Tooltip } from "antd";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e9f7eb", // Subtle pastel
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "#1e3e06", // Deep green
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography.Title
          level={2}
          style={{
            color: "#e0ffdb",
            margin: 0,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          DietCoach
        </Typography.Title>
      </nav>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <div
          style={{
            width: 900,
            display: "flex",
            flexDirection: "row-reverse",
            gap: 0,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: 16,
            overflow: "hidden",
            transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          {/* Card Section */}
          <div
            style={{
              padding: 32,
              gap: 20,
              width: 450,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f5ffe6",
            }}
          >
            <Typography.Title
              level={2}
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "#1e3e06",
              }}
            >
              Trainer for Nutrition
            </Typography.Title>
            <Typography.Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "#4f4f4f",
              }}
            >
              Use nutrition to fuel powerful results with a meal plan.
            </Typography.Text>
            <Tooltip title="Learn more about this!">
              <Typography.Paragraph
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#4f4f4f",
                }}
              >
                Discover how our all-in-one nutrition tool can guide you to
                success!
              </Typography.Paragraph>
            </Tooltip>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                marginTop: 20,
              }}
            >
              <Button
                type="primary"
                size="large"
                href="/trainer/register"
                target="_blank"
                style={{
                  backgroundColor: "#1e3e06",
                  borderColor: "#1e3e06",
                  color: "#e0ffdb",
                  transition: "all 0.3s ease",
                }}
              >
                Register
              </Button>
              <Button
                type="primary"
                size="large"
                href="/trainer/login"
                target="_blank"
                style={{
                  backgroundColor: "#1e3e06",
                  borderColor: "#1e3e06",
                  color: "#e0ffdb",
                  transition: "all 0.3s ease",
                }}
              >
                Login
              </Button>
              <Button
                type="primary"
                size="large"
                href="/trainer/testing"
                target="_blank"
                style={{
                  backgroundColor: "#1e3e06",
                  borderColor: "#1e3e06",
                  color: "#e0ffdb",
                  transition: "all 0.3s ease",
                }}
              >
                Testing
              </Button>
              <Button
                type="primary"
                size="large"
                href="/trainer/dashboard"
                target="_blank"
                style={{
                  backgroundColor: "#1e3e06",
                  borderColor: "#1e3e06",
                  color: "#e0ffdb",
                  transition: "all 0.3s ease",
                }}
              >
                Dashboard
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <img
            alt="diet-image"
            src="https://media.istockphoto.com/photos/table-filled-with-large-variety-of-food-picture-id1155240369?k=6&m=1155240369&s=170667a&w=0&h=ubqHRyw3BPin3i0sfBjqesyPVqhoGubxnOFyLPL2SXQ="
            style={{
              width: 450,
              height: 450,
              objectFit: "cover",
              borderRadius: "16px 0 0 16px",
              border: "4px solid #1e3e06",
              transition: "transform 0.3s",
            }}
          />
        </div>
      </main>
    </div>
  );
}
