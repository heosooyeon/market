import '../NavBar.css'

export default function NavBar() {
    const allList = document.getElementById('allList')
    let sign = false

    function ClickList() {
        sign = !sign
        if(sign) {
            allList.style.display = 'flex'
        } else {
            allList.style.display = 'none'
        }
    }

    return (
        <div className='NavBar'>
            <header>
            <div className="alertbtn">
                <div style={{padding:'2.5px 7.5px 2.5px 7.5px'}}>
                    <span style={{color:'purple', fontWeight:'bold'}}>{"샛별택배 "}</span>
                    <span>{"배송안내 >"}</span>
                </div>
            </div>
            <nav>
                <ul class="list_menu">
                    <li>
                    <a style={{color:'purple'}}>회원가입</a>
                    </li>
                    <li>
                        <a>로그인</a>
                    </li>
                    <li>
                        <a>고객센터▼</a>
                    </li>
                </ul>
            </nav>
            
        </header>
        <h1 className="logo">
                <img className="logoImg" src={process.env.PUBLIC_URL+ "/로고-아이콘.jpg"}></img>
            </h1>
        <div className="funcmenu">
            <ul style={{marginLeft:'-60px'}}>
                <li className='menu' onClick={ClickList} ><img style={{marginRight:'8px'}} src={process.env.PUBLIC_URL+"/ico_gnb_all_off.webp"}></img><a>카테고리</a></li>
                <li className='menu'><a>신상품</a></li>
                <li className='menu'><a>베스트</a></li>
                <li className='menu'><a>알뜰쇼핑</a></li>
                <li className='menu'><a>특가/혜택</a></li>
                <li className="iconmenu">
                    <ul>
                        <li><div style={{marginTop:'-5px'}} className="inputBox"><input id = "search" placeholder="검색어를 입력해주세요."></input><img className="searchicon"src={process.env.PUBLIC_URL+'/search.webp'}></img></div></li>
                        <li><img style={{marginTop:'-5px'}} src={ process.env.PUBLIC_URL+ "/ico_delivery_setting.svg"}></img></li>
                        <li><img style={{marginTop:'-5px'}} src={process.env.PUBLIC_URL+ "/btn-heart-off.svg"}></img></li>
                        <li><img style={{marginTop:'-5px'}} src={process.env.PUBLIC_URL+"/ico_cart.svg"}></img></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div>
            <ul id='allList'>
                <li>추석 선물세트</li>
                <li>채소</li>
                <li>과일 . 견과 . 쌀</li>
                <li>수산 . 해산 . 건어물</li>
                <li>정육 . 계란</li>
                <li>국 . 반찬 . 메인요리</li>
                <li>샐러드 . 간편식</li>
                <li>면 . 양념 . 오일</li>
                <li>생수 . 음료 . 우유 . 커피</li>
                <li>간식 . 과자 . 떡</li>
                <li>베이커리 . 치즈 . 델리</li>
                <li>건강식품</li>
                <li>와인</li>
                <li>전통주</li>
                <li>생활용품 . 리빙 . 캠핑</li>
                <li>스킨케어 . 메이크업</li>
                <li>헤어 . 바디 . 구강</li>
                <li>주방용품</li>
                <li>가전제품</li>
                <li>반려동물</li>
                <li>베이비 . 키즈 . 완구</li>
                <li>컬리의 추천</li>
            </ul>
        </div>
        </div>
    )
}