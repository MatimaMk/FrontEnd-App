"use client";
import styles from "./page.module.css";
import Button from "antd/es/button";
import { Card, Flex, Typography } from "antd";


export default function Home() {
  return (
    
    <div className={styles.page}>
     
        <main className={styles.main}>
          <Card
            styles={{
              body: { padding: 0, overflow: "hidden", width: 900, height: 500 },
            }}
          >
            <Flex justify="space-between">
              <img
                alt="diet-image"
                src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240452?k=20&m=1155240452&s=170667a&w=0&h=bduOZzahxHhXORVnjovY7SWTSdLh6nzrZAKdJtPzia4="
                style={{ display: "block", width: 700, height: 550 }}
              />
              <Flex vertical align="flex-end" style={{ padding: 32 }}>
                <Typography.Title level={3}>
                  Trainer for Nutrition
                </Typography.Title>
                <h2>
                  Use nutrition to fuel powerful results with a meal plan.{" "}
                </h2>
                <p>
                  Learn about the all-in-one nutrition tool that executes as a
                  trainer to help you plan your meals and manage your nutrition.
                </p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <Button type="primary" href="./trainer" target="_blank">
                    Register
                  </Button>
                  <Button
                    type="primary"
                    href="/trainer/dashboard"
                    target="_blank"
                  >
                    Login
                  </Button>
                </div>
              </Flex>
            </Flex>
          </Card>
        </main>

      
      <footer className={styles.footer}></footer>
    </div>
    
    

  );
}
