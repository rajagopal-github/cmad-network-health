FROM maven:3.6.0-jdk-8 as build

WORKDIR /opt/syslog-server

COPY . .

RUN mvn compile \
	&& mvn test \
	&& mvn package


FROM tomcat:latest

WORKDIR /opt

COPY --from=build /opt/syslog-server/target/syslog-server.jar .

CMD java -jar syslog-server.jar
