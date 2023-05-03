FROM openjdk:11-jdk
COPY . /h4221-backend
RUN apt-get -y update && apt -y install maven && apt-get clean
ADD . /h4221-backend
WORKDIR /h4221-backend
RUN mvn clean package -DskipTests && mvn package && mvn install
EXPOSE 8080
ENTRYPOINT [ "java" , "-jar" , "/h4221-backend/target/h4221-backend-0.0.1-SNAPSHOT.jar" ]