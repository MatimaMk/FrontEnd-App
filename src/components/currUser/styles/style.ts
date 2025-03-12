import { createStyles } from "antd-style";

export const useStyles = createStyles({
  cardDiv: `
    display: flex;
    flex-wrap: wrap;
    /* Allow multiple cards in a row */
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 24px;
  `,
  card: `
    width: 100%;
    max-width: 600px;
    /* Restrict card width */
    padding: 16px;
    border: 2px solid green;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fdfdfd;
  `,
  title: `
    font-size: 36px;
    font-weight: bold;
    color: green;
    margin-bottom: 16px;
    text-align: center;
  `,
  text: `
    font-size: 16px;
    margin: 4px 0;
    color: #333;
  `,
  noItemsMessage: `
    font-size: 18px;
    color: #999;
    text-align: center;
    margin-top: 24px;
  `,
});