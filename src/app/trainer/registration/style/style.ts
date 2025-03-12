import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  card_div: css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  `,
  card: css`
    width: 100%;
    max-width: 600px; /* Enlarged the card width */
    padding: 32px;
    border: 4px solid green; /* Thicker green border */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  title: css`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
  `,
  input: css`
    height: 48px; /* Enlarged input box height */
    font-size: 16px; /* Increased font size */
    border: 2px solid green; /* Thicker green border */
    border-radius: 4px; /* Optional: Rounded corners for better UI */
  `,
  button: css`
    width: 100%;
    height: 56px; /* Enlarged button height */
    font-size: 18px; /* Increased font size */
    font-weight: bold;
    margin-top: 16px;
  `,
  paragraph: css`
    margin-top: 20px; /* Added space below the button */
    font-size: 16px;
    text-align: center;
  `,
  link: css`
    color: green;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
});
