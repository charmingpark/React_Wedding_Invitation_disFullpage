import styled from 'styled-components';

export const AboutUsStyle = styled.div`
  img {
    width: 100px;
    height: 100px;
  }

  .MuiTab-root {
    opacity: 0.5;
    background-color: transparent;
    img {
      height: 8em;
      width: 8em;
      margin: 0 10px 10px;
      border-radius: 50%;
      display: inline-block;
    }
    p {
      font-size: 1.15em;
      padding-bottom: 0.5em;
      color: #f1dae0;
    }
  }

  p.info {
    margin-top: 3em;
    line-height: 1.5em;
    font-family: 'Pretendard', serif;
    font-size: 0.85em;
    font-weight: 500;
  }
  a.callTo {
    padding: 5px 0;
    line-height: 36px;
    background-color: #f1dae0;
    color: #334357;
    width: 14em;
    display: inline-block;
    border-radius: 8px;
    height: 36px;
    text-decoration: auto;
    text-indent: 0.5em;
    img {
      width: 1.05em;
      height: 1.05em;
      position: relative;
      top: 4px;
      right: 8px;
    }
  }
  /* button.bankCopy {
    margin: 1em;
    width: 14em;
    height: 2.8em;
    border-radius: 8px;
    border: 0.5px solid #fff;
    display: inline-block;
    -webkit-text-decoration: auto;
    text-decoration: auto;
    color: #fff;
    opacity: 0.8;
    line-height: 1.8em;
    &:after {
      display: block;
      margin-top: -10px;
      font-size: 0.8em;
      white-space: pre;
    }
    &.groom:after {
      content: '농협NH 301000-72-72481 김동진\A(클릭하시면 계좌번호가 복사됩니다.)';
    }
    &.bride:after {
      content: '국민은행 048402-04-324513 박찬민\A(클릭하시면 계좌번호가 복사됩니다.)';
    }
  } */
  /* content속성에서 줄바꿈 = \A */
  .MuiTab-root.Mui-selected {
    opacity: 1;
  }
  .MuiTabPanel-root {
    font-size: 1.05em;
    line-height: 2;
  }

  .from {
    font-family: 'Pretendard', serif;
  }

  .fullyCopied {
    font-family: 'Pretendard', serif;
    font-weight: bold;
    font-size: 0.85em;
    padding: 0.2em;
    margin-top: 0.5em;
    display: block;
  }
`;

// MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-3bmhjh-MuiPaper-root-MuiPopover-paper
