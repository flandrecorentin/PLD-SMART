#FROM openjdk:11-jdk
#COPY . /h4221-backend
#RUN apt-get -y update && apt -y install maven && apt-get clean
#ADD . /h4221-backend
#WORKDIR /h4221-backend
#RUN mvn clean package -DskipTests && mvn package && mvn install
#EXPOSE 8080
#ENTRYPOINT [ "java" , "-jar" , "/h4221-backend/target/" ]
FROM eclipse-temurin:17-jdk-alpine
# VOLUME /tmp
WORKDIR /dockerback
RUN apk update
RUN apk add openjdk17
RUN apk add maven
COPY . .
EXPOSE 9000
RUN mvn install && mvn package
CMD ["java","-jar","./target/h4221-backend-0.0.1-SNAPSHOT.jar"]