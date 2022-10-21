import styled from "styled-components";

export const PageDiv = styled.div`
  margin: 2em 5rem 0;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 1.2em;
`;

export const PageTitle = styled.h2`
  color: var(--dark-icon);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-heading);
  margin-bottom: 0.15em;
  margin-top: 0;
`;

export const PageSubtitle = styled.h3`
  color: var(--color-greyscale-600);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-heading);
  margin-top: 0.15rem;
  margin-bottom: 0;
`;

export const Message = styled.h2`
  text-align: center;
  flex-basis: 100%;
  color: var(--dark-icon);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-heading);
`;

export const Button = styled.button`
  background: var(--color-brand-300);
  color: var(--color-dark-icon);
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6em;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  cursor: pointer;
`;

export const SecondaryButton = styled(Button)`
  background: var(--color-brand-20);
  color: var(--color-brand-500);
  :hover {
    background: var(--color-brand-500);
    color: var(--color-brand-20);
  }
`;
