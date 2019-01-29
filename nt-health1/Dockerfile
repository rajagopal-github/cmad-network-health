FROM maven as build
WORKDIR /opt/cmad-network-health
COPY . .
RUN mvn package -DskipTests

FROM primetoninc/jdk:1.8
COPY --from=build /opt/cmad-network-health/target/networkhealth-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
CMD java -jar networkhealth-0.0.1-SNAPSHOT.jar
