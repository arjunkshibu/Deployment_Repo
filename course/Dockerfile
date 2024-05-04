FROM openjdk:21-slim
COPY target/*.jar courseapp.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/courseapp.jar"]
