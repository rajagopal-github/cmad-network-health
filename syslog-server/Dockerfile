FROM maven:3.6.0-jdk-8 as build

WORKDIR /opt

COPY syslog-server/ .

RUN mvn package -DskipTests


FROM java:openjdk-8-jre

WORKDIR /opt

COPY --from=build /opt/syslog-server/target/syslog-server.jar .

EXPOSE 8080

CMD java -jar syslog-server.jar
