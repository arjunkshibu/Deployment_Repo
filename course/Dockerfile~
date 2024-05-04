FROM openjdk:21-slim
COPY --from=build /target/course-0.0.1-SNAPSHOT.jar courseapp.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","courseapp.jar"]
