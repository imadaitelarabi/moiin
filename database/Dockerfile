FROM phpmyadmin

# Environment variables
ARG PMA_HOST
ARG PMA_PORT
ARG PMA_SSL_CERT

# Set working directory
WORKDIR /var/www/html

COPY DigiCertGlobalRootCA.crt /var/www/html

# Expose port 80
EXPOSE 80
