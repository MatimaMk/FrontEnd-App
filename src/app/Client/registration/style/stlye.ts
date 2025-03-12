import { createStyles } from "antd-style";

export const useStyles = createStyles({
  container: `
    display: flex;
    height: 100vh;
    align-items: center;
    background-color: #f4f5f7;
  `,
  leftSection: `
    flex: 1;
    background-image: url(''); /* Add background image URL */
    background-size: cover;
    background-position: center;
  `,
  formContainer: `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  card: `
    width: 100%;
    max-width: 500px;
    padding: 24px;
    border: 2px solid green;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  `,
  title: `
    font-size: 24px;
    font-weight: bold;
    color: #1890ff;
    margin-bottom: 16px;
    text-align: center;
  `,
  input: `
    border-radius: 4px;
    margin-bottom: 16px;
  `,
  button: `
    width: 100%;
    background-color: #1890ff;
    border-color: #1890ff;
    margin-top: 16px;
  `,
  paragraph: `
    text-align: center;
    margin-top: 16px;
  `,
  link: `
    color: #1890ff;
    font-weight: bold;
    text-decoration: none;
  `,
});
