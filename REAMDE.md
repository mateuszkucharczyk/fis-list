## 1) Requirements:
- git
- JAVA 8
- maven 3.5.0
## 2) Start webserver
    git clone https://github.com/mateuszkucharczyk/fis-list
    cd fis-list
    mvn package -P setup
    java -jar ./webserver/target/webserver-0.0.1-SNAPSHOT.jar
## 3) Open browser
    http://localhost:8080/index.html
## 4) Technologie:
- Baza danych HSQLDB. SpringBoot zapewnia konfiguracje HSQLDB w trybie in-memory "out-of-the-box" . W sam raz rozwiazanie dla testowej aplikacji.
- Frontend Angular 4. Dedykowane do fronted + TypeScript jest sprawdzany przez kompilator + mało kodu a ładny efekt + chciałem sobie przypomnieć jak się w nim pisze 