# Imagen base con Java (ajusta la versión según tu pom.xml)
FROM eclipse-temurin:17-jdk-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia el wrapper de Maven y el pom.xml para descargar dependencias
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN chmod +x mvnw && ./mvnw dependency:go-offline

# Copia el código fuente y compila
COPY src/ src/
RUN ./mvnw clean package -DskipTests

# Expone el puerto que usa tu app (normalmente 8080)
EXPOSE 8080

# Comando para arrancar la app
CMD ["sh", "-c", "java -jar target/*.jar"]
