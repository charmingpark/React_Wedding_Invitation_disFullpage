import { useState } from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { AboutUsStyle } from './AboutUs.style.js';
import Clipboard from 'clipboard';
import groom from '../../images/groom.jpg';
import bride from '../../images/bride.jpg';
import icon_tel from '../../images/icon_tel_m.png';

function AboutUs() {
  const [displayCss, setdisplayCss] = useState('0');
  const clipboard = new Clipboard('.bankCopy');

  const handleClick = () => {
    setdisplayCss('100');
    setTimeout(() => {
      console.log('Button clicked!');
      setdisplayCss('0');
    }, 1500);
  };

  clipboard.on('success', function (e) {
    console.log('Action:', e.action);
    console.log('Text:', e.text);
    console.log('Trigger:', e.trigger);

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });

  return (
    <section
      className="aboutUs atm"
      id="aboutUs"
      // ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <AboutUsStyle>
        <div className="contactInner">
          <h2 className="hanTit ranTxt top">신랑신부 소개</h2>
          {/* material.UI 를 설치하고 탭패널로 만들기 */}
          <div className="ranBox family">
            <div className="secTitleWrap">
              <p className="mt">
                전화나 메시지로
                <br />
                축하의 마음을 전달해보세요.
              </p>
              {/* <img src={groomNBride} alt="" /> */}
            </div>
            {/* table 태그로 구현하기 */}
            <TabsUnstyled defaultValue={0}>
              <TabsListUnstyled className="groomNBride">
                <TabUnstyled></TabUnstyled>
                <TabUnstyled>
                  <img src={groom} alt="신랑 김동진" />
                  <p>
                    <strong>신랑 김동진</strong>
                  </p>
                </TabUnstyled>
                <TabUnstyled>
                  <img src={bride} alt="신부 박찬민" />
                  <p>
                    <strong>신부 박찬민</strong>
                  </p>
                </TabUnstyled>
              </TabsListUnstyled>
              <TabPanelUnstyled value={0}>
                <p className="info">
                  사진을 클릭하시면 해당 인물의
                  <br />
                  정보를 보실 수 있습니다.
                </p>
              </TabPanelUnstyled>
              <TabPanelUnstyled value={1}>
                <div className="from">
                  <b>김의홍 · 한옥화</b> 의 장남
                </div>
                {/* ::after image-background로 전화버튼 삽입 */}
                <a className="callTo" href="tel:010-2270-6408">
                  <img src={icon_tel} alt="" />
                  신랑에게 연락하기
                </a>
                <br />
                {/* TODO: popup 이 뜨면서 복사되었다고 알리기 + 계좌정보 */}
                <div className="bankCopy-container">
                  <button
                    className="bankCopy groom"
                    data-clipboard-text="농협NH 301000-72-72481 김동진"
                    onClick={handleClick}
                  >
                    신부측에 축의금 보내기
                  </button>
                </div>
                <div className="fullyCopied" style={{ opacity: displayCss }}>
                  복사되었습니다.
                </div>
              </TabPanelUnstyled>
              <TabPanelUnstyled value={2}>
                <div className="from">
                  <b>박춘서 · 오치림</b> 의 장녀
                </div>
                {/* ::after image-background로 전화버튼 삽입 */}
                <a className="callTo" href="tel:010-2316-7239">
                  <img src={icon_tel} alt="" />
                  신부에게 연락하기
                </a>
                <br />
                {/* TODO: popup 이 뜨면서 복사되었다고 알리기 + 계좌정보 */}
                <div className="bankCopy-container">
                  <button
                    className="bankCopy bride"
                    data-clipboard-text="국민은행 048402-04-324513 박찬민"
                    onClick={handleClick}
                  >
                    신부측에 축의금 보내기
                  </button>
                </div>
                <div className="fullyCopied" style={{ opacity: displayCss }}>
                  복사되었습니다.
                </div>
              </TabPanelUnstyled>
            </TabsUnstyled>
          </div>
        </div>
      </AboutUsStyle>
    </section>
  );
}
export default AboutUs;
