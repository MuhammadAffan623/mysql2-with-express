# mysql2-with-express

# Run mysql docker container


```bash
docker run -p 3306:3306 --name fypdatabse -v /your/local/path:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=shayanFYP890  -e MYSQL_DATABASE=fypDB -d mysql:latest
```
