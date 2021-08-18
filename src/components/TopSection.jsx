import styled from 'styled-components';

const SolarContainer = styled.div`
  background: linear-gradient(
    135deg,
    hsla(0, 0%, 10%, 0.3) 0%,
    hsla(263, 16%, 22%, 0.2) 100%
  );
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 3px 4px 1px hsla(0, 0%, 10%, 0.3);
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  padding: 25px 25px 20px 25px;
`;

const SolarPanelHolder = styled.div`
  border-radius: 5px;
  border: 3px solid #111;
  display: inline-flex;
  overflow: hidden;
`;

const SolarPanel = styled.div`
  background: linear-gradient(#524243 0%, #533d34 100%);
  border-right: solid 1px #776561;
  height: 20px;
  width: 20px;

  &:last-child {
    border-right: none;
  }
`;

export const TopSection = () => (
  <SolarContainer>
    <SolarPanelHolder>
      <SolarPanel />
      <SolarPanel />
      <SolarPanel />
      <SolarPanel />
    </SolarPanelHolder>
  </SolarContainer>
);
