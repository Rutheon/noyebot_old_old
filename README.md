Noyebot
=======
적당히 쓸만한 디코 봇
# 시작하기
* ```git clone https://github.com/codingnoye/noyebot```으로 봇을 가져온다.
* ```cd noyebot```으로 디렉토리에 들어간다.
* ```npm install```로 node 의존성을 설치한다. 
* [디코 개발자 포탈](https://discordapp.com/developers/applications/)로 가서 봇을 만들고 토큰을 가져온다.
* ```config.preview.js```를 ```config.js```로 복사하고 토큰을 넣는다.
* ```npm start```로 봇을 실행한다. 
# 폴더 구조
* ```cmds/``` : 명령어 파일들이 들어 있음. 안에 파일 만들면 알아서 명령어에 추가됨. extension에 넣는 걸 권장, disabled에 넣어 비활성화
* ```data/``` : 데이터가 저장되는 영역. 건들지 않는 걸 추천
* ```lib/``` : 라이브러리 영역.
* ```plugins/``` : 플러그인 영역. 안에 파일 만들면 알아서 적용됨.
* ```src/``` : 소스 영역. 열어봤자 지저분한 코드밖에 없음.
* ```index.js``` : 엔트리 포인트.
* ```config.js``` : 설정 영역. 여기다 토큰을 넣어야 봇이 굴러감.